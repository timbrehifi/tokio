#![allow(clippy::redundant_clone)]

use crate::park::{CachedParkThread, Park, Unpark};
use crate::runtime::enter;
use crate::runtime::time;
use crate::sync::Notify;
use crate::util::{waker_ref, Wake};

use std::pin::Pin;
use std::sync::{Arc, Mutex};
use std::task::Context;
use std::task::Poll::Ready;
use std::{future::Future, sync::PoisonError};

#[derive(Debug)]
pub(super) struct Shell {
    driver: Mutex<Option<time::Driver>>,

    notify: Arc<Notify>,

    /// TODO: don't store this
    unpark: Arc<Handle>,
}

#[derive(Debug)]
struct Handle(<time::Driver as Park>::Unpark);

impl Shell {
    pub(super) fn new(driver: time::Driver) -> Shell {
        let unpark = Arc::new(Handle(driver.unpark()));

        Shell {
            driver: Mutex::new(Some(driver)),
            notify: Arc::new(Notify::new()),
            unpark,
        }
    }

    pub(super) fn block_on<F>(&self, f: F) -> F::Output
    where
        F: Future,
    {
        let _e = enter(true);

        pin!(f);

        if let Some(driver_guard) = self.take_driver() {
            self.block_on_driver(driver_guard, f)
        } else {
            let mut parker = CachedParkThread::new();
            let waker = parker.get_unpark().unwrap().into_waker();
            let mut cx = Context::from_waker(&waker);

            let notifier = self.notify.clone();

            let mut notified = Box::pin(notifier.notified());

            loop {
                if let Ready(_) = notified.as_mut().poll(&mut cx) {
                    if let Some(driver_guard) = self.take_driver() {
                        return self.block_on_driver(driver_guard, f);
                    } else {
                        todo!("create new notified future")
                    }
                }

                if let Ready(v) = crate::coop::budget(|| f.as_mut().poll(&mut cx)) {
                    return v;
                }

                parker.park().expect("Failed to park");
            }
        }
    }

    fn block_on_driver<F>(&self, mut driver: DriverGuard<'_>, mut f: Pin<&mut F>) -> F::Output
    where
        F: Future,
    {
        let waker = waker_ref(&self.unpark);
        let mut cx = Context::from_waker(&waker);

        // This is safe to unwrap since the only place we set the
        // inner `Option` to `None` is in the `Drop` impl of `DriverGuard`.
        let driver = driver.inner.as_mut().unwrap();

        loop {
            if let Ready(v) = crate::coop::budget(|| f.as_mut().poll(&mut cx)) {
                return v;
            }

            driver.park().unwrap();
        }
    }

    fn take_driver(&self) -> Option<DriverGuard<'_>> {
        let mut lock = self.driver.lock().unwrap();
        let driver = lock.take()?;

        Some(DriverGuard {
            inner: Some(driver),
            shell: &self,
        })
    }
}

impl Wake for Handle {
    /// Wake by value
    fn wake(self: Arc<Self>) {
        Wake::wake_by_ref(&self);
    }

    /// Wake by reference
    fn wake_by_ref(arc_self: &Arc<Self>) {
        arc_self.0.unpark();
    }
}

struct DriverGuard<'a> {
    inner: Option<time::Driver>,
    shell: &'a Shell,
}

impl Drop for DriverGuard<'_> {
    fn drop(&mut self) {
        if let Some(inner) = self.inner.take() {
            self.shell
                .driver
                .lock()
                .unwrap_or_else(PoisonError::into_inner)
                .replace(inner);

            self.shell.notify.notify_one();
        }
    }
}
