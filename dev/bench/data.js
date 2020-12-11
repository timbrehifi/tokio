window.BENCHMARK_DATA = {
  "lastUpdate": 1607720885752,
  "repoUrl": "https://github.com/timbrehifi/tokio",
  "entries": {
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/timbrehifi/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605330111279,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15308,
            "range": "± 4599",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1075,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 602,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15123,
            "range": "± 4332",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1106,
            "range": "± 104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/timbrehifi/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605574923933,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 21186,
            "range": "± 4807",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1043,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 581,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 20949,
            "range": "± 4714",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1050,
            "range": "± 172",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/timbrehifi/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605646944809,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18334,
            "range": "± 7632",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1177,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 681,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 18815,
            "range": "± 8724",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1151,
            "range": "± 191",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/timbrehifi/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605733301665,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18478,
            "range": "± 8232",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1211,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 682,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17673,
            "range": "± 5647",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1185,
            "range": "± 426",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/timbrehifi/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605906114114,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16046,
            "range": "± 5517",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1037,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 598,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15501,
            "range": "± 5016",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1030,
            "range": "± 188",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae67851f11b7cc1f577de8ce21767ce3e2c7aff9",
          "message": "time: use intrusive lists for timer tracking (#3080)\n\nMore-or-less a half-rewrite of the current time driver, supporting the\r\nuse of intrusive futures for timer registration.\r\n\r\nFixes: #3028, #3069",
          "timestamp": "2020-11-23T10:42:50-08:00",
          "tree_id": "be43cb76333b0e9e42a101d659f9b2e41555d779",
          "url": "https://github.com/timbrehifi/tokio/commit/ae67851f11b7cc1f577de8ce21767ce3e2c7aff9"
        },
        "date": 1606165321368,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14841,
            "range": "± 3071",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1082,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 649,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15001,
            "range": "± 5610",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1082,
            "range": "± 90",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "driftluo@foxmail.com",
            "name": "漂流",
            "username": "driftluo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874fc3320bc000fee20d63b3ad865a1145122640",
          "message": "codec: add read_buffer_mut to FramedRead (#3166)",
          "timestamp": "2020-11-24T09:39:16+01:00",
          "tree_id": "53540b744f6a915cedc1099afe1b0639443b2436",
          "url": "https://github.com/timbrehifi/tokio/commit/874fc3320bc000fee20d63b3ad865a1145122640"
        },
        "date": 1606208503487,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17022,
            "range": "± 5557",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1078,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 589,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16590,
            "range": "± 6703",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1008,
            "range": "± 182",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/timbrehifi/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606222922026,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14616,
            "range": "± 3279",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1034,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 621,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14329,
            "range": "± 3119",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1047,
            "range": "± 76",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/timbrehifi/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606422662007,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18336,
            "range": "± 15344",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1145,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 684,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17088,
            "range": "± 5358",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1135,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niklas.fiekas@backscattering.de",
            "name": "Niklas Fiekas",
            "username": "niklasf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49129434198a96444bc0e9582a14062d3a46e93a",
          "message": "signal: expose CtrlC stream on windows (#3186)\n\n* Make tokio::signal::windows::ctrl_c() public.\r\n* Stop referring to private tokio::signal::windows::Event in module\r\n  documentation.\r\n\r\nCloses #3178",
          "timestamp": "2020-11-27T19:53:17Z",
          "tree_id": "904fb6b1fb539bffe69168c7202ccc3db15321dc",
          "url": "https://github.com/timbrehifi/tokio/commit/49129434198a96444bc0e9582a14062d3a46e93a"
        },
        "date": 1606509056388,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 20174,
            "range": "± 3152",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 887,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 531,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 20039,
            "range": "± 3004",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 884,
            "range": "± 293",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0acd06b42a9d1461302388f2a533e86d391d6040",
          "message": "runtime: fix shutdown_timeout(0) blocking (#3174)",
          "timestamp": "2020-11-28T19:31:13+01:00",
          "tree_id": "c17e5d58e10ee419e492cb831843c3f08e1f66d8",
          "url": "https://github.com/timbrehifi/tokio/commit/0acd06b42a9d1461302388f2a533e86d391d6040"
        },
        "date": 1606595471269,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14885,
            "range": "± 4868",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1007,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 586,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15125,
            "range": "± 3002",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1000,
            "range": "± 167",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/timbrehifi/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606645485198,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15568,
            "range": "± 2916",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1113,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 628,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16424,
            "range": "± 9164",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1117,
            "range": "± 85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kylekosic@gmail.com",
            "name": "Kyle Kosic",
            "username": "kykosic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a85fdb884d961bb87a2f3d446c548802868e54cb",
          "message": "runtime: test for shutdown_timeout(0) (#3196)",
          "timestamp": "2020-11-29T21:30:19+01:00",
          "tree_id": "c554597c6596dc6eddc98bfafcc512361ddb5f31",
          "url": "https://github.com/timbrehifi/tokio/commit/a85fdb884d961bb87a2f3d446c548802868e54cb"
        },
        "date": 1606692172509,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16663,
            "range": "± 7910",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1038,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 624,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16338,
            "range": "± 8110",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1038,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pickfire@riseup.net",
            "name": "Ivan Tham",
            "username": "pickfire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72d6346c0d43d867002dc0cc5527fbd0b0e23c3f",
          "message": "macros: #[tokio::main] can be used on non-main (#3199)",
          "timestamp": "2020-11-30T17:34:11+01:00",
          "tree_id": "c558d1cb380cc67bfc56ea960a7d9e266259367a",
          "url": "https://github.com/timbrehifi/tokio/commit/72d6346c0d43d867002dc0cc5527fbd0b0e23c3f"
        },
        "date": 1606764086820,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15028,
            "range": "± 3566",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1082,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 647,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14667,
            "range": "± 3753",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1084,
            "range": "± 84",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "73653352+HK416-is-all-you-need@users.noreply.github.com",
            "name": "HK416-is-all-you-need",
            "username": "HK416-is-all-you-need"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7707ba88efa9b9d78436f1fbdc873d81bfc3f7a5",
          "message": "io: add AsyncFd::with_interest (#3167)\n\nFixes #3072",
          "timestamp": "2020-11-30T11:11:18-08:00",
          "tree_id": "45e9d190af02ab0cdc92c317e3127a1b8227ac3a",
          "url": "https://github.com/timbrehifi/tokio/commit/7707ba88efa9b9d78436f1fbdc873d81bfc3f7a5"
        },
        "date": 1606771075098,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15110,
            "range": "± 3881",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1036,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 615,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14790,
            "range": "± 5690",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1043,
            "range": "± 27",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08548583b948a0be04338f1b1462917c001dbf4a",
          "message": "chore: prepare v0.3.5 release (#3201)",
          "timestamp": "2020-11-30T12:57:31-08:00",
          "tree_id": "bc964338ba8d03930d53192a1e2288132330ff97",
          "url": "https://github.com/timbrehifi/tokio/commit/08548583b948a0be04338f1b1462917c001dbf4a"
        },
        "date": 1606778635175,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 31332,
            "range": "± 33030",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1091,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 671,
            "range": "± 1742",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 38565,
            "range": "± 31929",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1105,
            "range": "± 384",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8e0f0a919663b210627c132d6af3e19a95d8037",
          "message": "example: add back udp-codec example (#3205)",
          "timestamp": "2020-12-01T12:20:20+09:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/timbrehifi/tokio/commit/a8e0f0a919663b210627c132d6af3e19a95d8037"
        },
        "date": 1606800402727,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15348,
            "range": "± 5545",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 974,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 660,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14916,
            "range": "± 7955",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1081,
            "range": "± 55",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6051a61ec5c96113f4b543de3ec55431695347a",
          "message": "sync: make add_permits panic with usize::MAX >> 3 permits (#3188)",
          "timestamp": "2020-12-02T22:58:28+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/timbrehifi/tokio/commit/a6051a61ec5c96113f4b543de3ec55431695347a"
        },
        "date": 1606966848672,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15018,
            "range": "± 4306",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1090,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 649,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15198,
            "range": "± 4613",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1086,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a6051a61ec5c96113f4b543de3ec55431695347a",
          "message": "sync: make add_permits panic with usize::MAX >> 3 permits (#3188)",
          "timestamp": "2020-12-02T22:58:28+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/timbrehifi/tokio/commit/a6051a61ec5c96113f4b543de3ec55431695347a"
        },
        "date": 1606971158037,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17063,
            "range": "± 5326",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1110,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 766,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16926,
            "range": "± 7514",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1091,
            "range": "± 90",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "647299866a2262c8a1183adad73673e5803293ed",
          "message": "util: add writev-aware `poll_write_buf` (#3156)\n\n## Motivation\r\n\r\nIn Tokio 0.2, `AsyncRead` and `AsyncWrite` had `poll_write_buf` and\r\n`poll_read_buf` methods for reading and writing to implementers of\r\n`bytes` `Buf` and `BufMut` traits. In 0.3, these were removed, but\r\n`poll_read_buf` was added as a free function in `tokio-util`. However,\r\nthere is currently no `poll_write_buf`.\r\n\r\nNow that `AsyncWrite` has regained support for vectored writes in #3149,\r\nthere's a lot of potential benefit in having a `poll_write_buf` that\r\nuses vectored writes when supported and non-vectored writes when not\r\nsupported, so that users don't have to reimplement this.\r\n\r\n## Solution\r\n\r\nThis PR adds a `poll_write_buf` function to `tokio_util::io`, analogous\r\nto the existing `poll_read_buf` function.\r\n\r\nThis function writes from a `Buf` to an `AsyncWrite`, advancing the\r\n`Buf`'s internal cursor. In addition, when the `AsyncWrite` supports\r\nvectored writes (i.e. its `is_write_vectored` method returns `true`),\r\nit will use vectored IO.\r\n\r\nI copied the documentation for this functions from the docs from Tokio\r\n0.2's `AsyncWrite::poll_write_buf` , with some minor modifications as\r\nappropriate.\r\n\r\nFinally, I fixed a minor issue in the existing docs for `poll_read_buf`\r\nand `read_buf`, and updated `tokio_util::codec` to use `poll_write_buf`.\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T11:19:16-08:00",
          "tree_id": "c92df9ae491f0a444e694879858d032c3f6a5373",
          "url": "https://github.com/timbrehifi/tokio/commit/647299866a2262c8a1183adad73673e5803293ed"
        },
        "date": 1607033447528,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14887,
            "range": "± 4247",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 953,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 588,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15514,
            "range": "± 5615",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1061,
            "range": "± 119",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00500d1b35f00c68117d8f4e7320303e967e92e3",
          "message": "util: prepare v0.5.1 release (#3210)\n\n### Added\r\n\r\n- io: `poll_read_buf` util fn (#2972).\r\n- io: `poll_write_buf` util fn with vectored write support (#3156).\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T15:30:52-08:00",
          "tree_id": "fe18e0f55daa4f26cf53bfe42a713338ac5460d9",
          "url": "https://github.com/timbrehifi/tokio/commit/00500d1b35f00c68117d8f4e7320303e967e92e3"
        },
        "date": 1607055931355,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15319,
            "range": "± 4400",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1145,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 677,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15726,
            "range": "± 3606",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1135,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "00500d1b35f00c68117d8f4e7320303e967e92e3",
          "message": "util: prepare v0.5.1 release (#3210)\n\n### Added\r\n\r\n- io: `poll_read_buf` util fn (#2972).\r\n- io: `poll_write_buf` util fn with vectored write support (#3156).\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T15:30:52-08:00",
          "tree_id": "fe18e0f55daa4f26cf53bfe42a713338ac5460d9",
          "url": "https://github.com/timbrehifi/tokio/commit/00500d1b35f00c68117d8f4e7320303e967e92e3"
        },
        "date": 1607056133862,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15415,
            "range": "± 3865",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1091,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 649,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14752,
            "range": "± 3413",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1087,
            "range": "± 37",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "udoprog@tedro.se",
            "name": "John-John Tedro",
            "username": "udoprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a125ebd745f31098aa170cb1009ff0fe34508d37",
          "message": "rt: fix panic in task abort when off rt (#3159)\n\nA call to `JoinHandle::abort` releases a task. When called from outside of the runtime,\r\nthis panics due to the current implementation checking for a thread-local worker context.\r\n\r\nThis change makes accessing the thread-local context optional under release, by falling\r\nback to remotely marking a task remotely as dropped. Behaving the same as if the core\r\nwas stolen by another worker.\r\n\r\nFixes #3157",
          "timestamp": "2020-12-03T21:29:59-08:00",
          "tree_id": "8dab5d17383a5f63f7554ec009cf6e1408c46d96",
          "url": "https://github.com/timbrehifi/tokio/commit/a125ebd745f31098aa170cb1009ff0fe34508d37"
        },
        "date": 1607073962642,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13803,
            "range": "± 4705",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 904,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 524,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13587,
            "range": "± 3263",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 881,
            "range": "± 131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "udoprog@tedro.se",
            "name": "John-John Tedro",
            "username": "udoprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a125ebd745f31098aa170cb1009ff0fe34508d37",
          "message": "rt: fix panic in task abort when off rt (#3159)\n\nA call to `JoinHandle::abort` releases a task. When called from outside of the runtime,\r\nthis panics due to the current implementation checking for a thread-local worker context.\r\n\r\nThis change makes accessing the thread-local context optional under release, by falling\r\nback to remotely marking a task remotely as dropped. Behaving the same as if the core\r\nwas stolen by another worker.\r\n\r\nFixes #3157",
          "timestamp": "2020-12-03T21:29:59-08:00",
          "tree_id": "8dab5d17383a5f63f7554ec009cf6e1408c46d96",
          "url": "https://github.com/timbrehifi/tokio/commit/a125ebd745f31098aa170cb1009ff0fe34508d37"
        },
        "date": 1607076136209,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15246,
            "range": "± 5037",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1085,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 647,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16579,
            "range": "± 3883",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1103,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/timbrehifi/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607268212387,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14633,
            "range": "± 3011",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1081,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 638,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15940,
            "range": "± 3961",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1084,
            "range": "± 85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62023dffe5396ee1a0380f12c7530bf4ff59fe4a",
          "message": "sync: forward port 0.2 mpsc test (#3225)\n\nForward ports the test included in #3215. The mpsc sempahore has been\r\nreplaced in 0.3 and does not include the bug being fixed.",
          "timestamp": "2020-12-07T11:24:15-08:00",
          "tree_id": "c891a48ce299e6cfd01090a880d1baf16ebe0ad7",
          "url": "https://github.com/timbrehifi/tokio/commit/62023dffe5396ee1a0380f12c7530bf4ff59fe4a"
        },
        "date": 1607388812565,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15427,
            "range": "± 4622",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1086,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 648,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15800,
            "range": "± 4131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1090,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e01391351bcb0715f737cefe94e1bc99f19af226",
          "message": "Add stress test (#3222)\n\nCreated a simple echo TCP server that on two different runtimes that is\r\ncalled from a GitHub action using Valgrind to ensure that there are\r\nno memory leaks.\r\n\r\nFixes: #3022",
          "timestamp": "2020-12-07T21:12:22-08:00",
          "tree_id": "5575f27e36e49b887062119225e1d61335a01b9a",
          "url": "https://github.com/timbrehifi/tokio/commit/e01391351bcb0715f737cefe94e1bc99f19af226"
        },
        "date": 1607408906868,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14002,
            "range": "± 4697",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 947,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 586,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14264,
            "range": "± 4137",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 919,
            "range": "± 107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9706ca92a8deb69d6e29265f21424042fea966c5",
          "message": "time: Fix race condition in timer drop (#3229)\n\nDropping a timer on the millisecond that it was scheduled for, when it was on\r\nthe pending list, could result in a panic previously, as we did not record the\r\npending-list state in cached_when.\r\n\r\nHopefully fixes: ZcashFoundation/zebra#1452",
          "timestamp": "2020-12-08T16:42:43-08:00",
          "tree_id": "cd77e2148b7cdf03d0fcb38e8e27cf3f7eed1ed9",
          "url": "https://github.com/timbrehifi/tokio/commit/9706ca92a8deb69d6e29265f21424042fea966c5"
        },
        "date": 1607481678199,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16459,
            "range": "± 6652",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1137,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 652,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16595,
            "range": "± 4937",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1122,
            "range": "± 199",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cd240053b2e1dd5835186539f563c3496dfd7d",
          "message": "task: add missing feature flags for task_local and spawn_blocking (#3237)",
          "timestamp": "2020-12-09T23:49:28+01:00",
          "tree_id": "bbc90b40091bd716d0269b84da2bafb32288b149",
          "url": "https://github.com/timbrehifi/tokio/commit/52cd240053b2e1dd5835186539f563c3496dfd7d"
        },
        "date": 1607564859803,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14989,
            "range": "± 4823",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1092,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 646,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14414,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1124,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clemens.koza@gmx.at",
            "name": "Clemens Koza",
            "username": "SillyFreak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9646b4bce342342cc654c4c0834c0bf3627f7aa0",
          "message": "toml: enable test-util feature for the playground (#3224)",
          "timestamp": "2020-12-10T10:39:05+01:00",
          "tree_id": "0c5c06ea6a86a13b9485506cf2066945eaf53189",
          "url": "https://github.com/timbrehifi/tokio/commit/9646b4bce342342cc654c4c0834c0bf3627f7aa0"
        },
        "date": 1607596075111,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13167,
            "range": "± 2492",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 910,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 538,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13228,
            "range": "± 2530",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 909,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yusuktan@maguro.dev",
            "name": "Yusuke Tanaka",
            "username": "magurotuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1d76ec8f35052480eb14204d147df658bfdfdd",
          "message": "docs: fix typo in signal module documentation (#3249)",
          "timestamp": "2020-12-10T08:11:45-08:00",
          "tree_id": "46efd6f41cfaf702fb40c62b89800c511309d584",
          "url": "https://github.com/timbrehifi/tokio/commit/4b1d76ec8f35052480eb14204d147df658bfdfdd"
        },
        "date": 1607627414854,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14388,
            "range": "± 5541",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1042,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 603,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14940,
            "range": "± 3965",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1052,
            "range": "± 74",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16c2e0983cc0ab22f9a0b7a1ac37ea32a42b9a6e",
          "message": "net: Pass SocketAddr by value (#3125)",
          "timestamp": "2020-12-10T14:58:27-05:00",
          "tree_id": "d46d58a79f31dba872aa060ef378743fcedea70e",
          "url": "https://github.com/timbrehifi/tokio/commit/16c2e0983cc0ab22f9a0b7a1ac37ea32a42b9a6e"
        },
        "date": 1607648069634,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15528,
            "range": "± 6401",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1095,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 645,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14915,
            "range": "± 4182",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1099,
            "range": "± 21",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/timbrehifi/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607668948037,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14502,
            "range": "± 5486",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1008,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 611,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14959,
            "range": "± 3438",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1008,
            "range": "± 105",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/timbrehifi/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605330116262,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 192024,
            "range": "± 21365",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 748276,
            "range": "± 129546",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5540115,
            "range": "± 1126534",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21483602,
            "range": "± 2722116",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/timbrehifi/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605574926721,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 201953,
            "range": "± 56879",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 727682,
            "range": "± 73324",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4876651,
            "range": "± 1272248",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20854300,
            "range": "± 2262284",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/timbrehifi/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605646941106,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 207603,
            "range": "± 67166",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 760406,
            "range": "± 169881",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5715916,
            "range": "± 1240208",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21322087,
            "range": "± 2469163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/timbrehifi/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605733312125,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199398,
            "range": "± 7613",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 749328,
            "range": "± 41272",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5774986,
            "range": "± 823478",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21294686,
            "range": "± 2239414",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/timbrehifi/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605906102926,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 185938,
            "range": "± 11793",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 689838,
            "range": "± 56479",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5245941,
            "range": "± 1261275",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20286829,
            "range": "± 2212505",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae67851f11b7cc1f577de8ce21767ce3e2c7aff9",
          "message": "time: use intrusive lists for timer tracking (#3080)\n\nMore-or-less a half-rewrite of the current time driver, supporting the\r\nuse of intrusive futures for timer registration.\r\n\r\nFixes: #3028, #3069",
          "timestamp": "2020-11-23T10:42:50-08:00",
          "tree_id": "be43cb76333b0e9e42a101d659f9b2e41555d779",
          "url": "https://github.com/timbrehifi/tokio/commit/ae67851f11b7cc1f577de8ce21767ce3e2c7aff9"
        },
        "date": 1606165322793,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 193999,
            "range": "± 31635",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 677633,
            "range": "± 161498",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4934862,
            "range": "± 1416618",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19860289,
            "range": "± 2811152",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "driftluo@foxmail.com",
            "name": "漂流",
            "username": "driftluo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874fc3320bc000fee20d63b3ad865a1145122640",
          "message": "codec: add read_buffer_mut to FramedRead (#3166)",
          "timestamp": "2020-11-24T09:39:16+01:00",
          "tree_id": "53540b744f6a915cedc1099afe1b0639443b2436",
          "url": "https://github.com/timbrehifi/tokio/commit/874fc3320bc000fee20d63b3ad865a1145122640"
        },
        "date": 1606208491324,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 142451,
            "range": "± 20823",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 576571,
            "range": "± 90665",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4370564,
            "range": "± 1147304",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 16491704,
            "range": "± 3164063",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/timbrehifi/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606222922797,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 200460,
            "range": "± 29783",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 737728,
            "range": "± 66240",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5611819,
            "range": "± 947299",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21260179,
            "range": "± 3309583",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/timbrehifi/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606422658997,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 188049,
            "range": "± 42858",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 701942,
            "range": "± 36040",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5466911,
            "range": "± 1063396",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20412758,
            "range": "± 1754069",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niklas.fiekas@backscattering.de",
            "name": "Niklas Fiekas",
            "username": "niklasf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49129434198a96444bc0e9582a14062d3a46e93a",
          "message": "signal: expose CtrlC stream on windows (#3186)\n\n* Make tokio::signal::windows::ctrl_c() public.\r\n* Stop referring to private tokio::signal::windows::Event in module\r\n  documentation.\r\n\r\nCloses #3178",
          "timestamp": "2020-11-27T19:53:17Z",
          "tree_id": "904fb6b1fb539bffe69168c7202ccc3db15321dc",
          "url": "https://github.com/timbrehifi/tokio/commit/49129434198a96444bc0e9582a14062d3a46e93a"
        },
        "date": 1606509066022,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199278,
            "range": "± 22284",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 726544,
            "range": "± 146583",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5376948,
            "range": "± 1276214",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21878420,
            "range": "± 3051473",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0acd06b42a9d1461302388f2a533e86d391d6040",
          "message": "runtime: fix shutdown_timeout(0) blocking (#3174)",
          "timestamp": "2020-11-28T19:31:13+01:00",
          "tree_id": "c17e5d58e10ee419e492cb831843c3f08e1f66d8",
          "url": "https://github.com/timbrehifi/tokio/commit/0acd06b42a9d1461302388f2a533e86d391d6040"
        },
        "date": 1606595469622,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190382,
            "range": "± 6433",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 729964,
            "range": "± 63527",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5515798,
            "range": "± 1005129",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22536569,
            "range": "± 2844498",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/timbrehifi/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606645468849,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 166464,
            "range": "± 22489",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 708599,
            "range": "± 96826",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5281395,
            "range": "± 771098",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19719670,
            "range": "± 2614883",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kylekosic@gmail.com",
            "name": "Kyle Kosic",
            "username": "kykosic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a85fdb884d961bb87a2f3d446c548802868e54cb",
          "message": "runtime: test for shutdown_timeout(0) (#3196)",
          "timestamp": "2020-11-29T21:30:19+01:00",
          "tree_id": "c554597c6596dc6eddc98bfafcc512361ddb5f31",
          "url": "https://github.com/timbrehifi/tokio/commit/a85fdb884d961bb87a2f3d446c548802868e54cb"
        },
        "date": 1606692163643,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 192440,
            "range": "± 7742",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 708482,
            "range": "± 47830",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5238701,
            "range": "± 622497",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21611646,
            "range": "± 3001302",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pickfire@riseup.net",
            "name": "Ivan Tham",
            "username": "pickfire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72d6346c0d43d867002dc0cc5527fbd0b0e23c3f",
          "message": "macros: #[tokio::main] can be used on non-main (#3199)",
          "timestamp": "2020-11-30T17:34:11+01:00",
          "tree_id": "c558d1cb380cc67bfc56ea960a7d9e266259367a",
          "url": "https://github.com/timbrehifi/tokio/commit/72d6346c0d43d867002dc0cc5527fbd0b0e23c3f"
        },
        "date": 1606764096902,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 188912,
            "range": "± 10019",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 733495,
            "range": "± 171228",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5337367,
            "range": "± 735688",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20695923,
            "range": "± 2730373",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "73653352+HK416-is-all-you-need@users.noreply.github.com",
            "name": "HK416-is-all-you-need",
            "username": "HK416-is-all-you-need"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7707ba88efa9b9d78436f1fbdc873d81bfc3f7a5",
          "message": "io: add AsyncFd::with_interest (#3167)\n\nFixes #3072",
          "timestamp": "2020-11-30T11:11:18-08:00",
          "tree_id": "45e9d190af02ab0cdc92c317e3127a1b8227ac3a",
          "url": "https://github.com/timbrehifi/tokio/commit/7707ba88efa9b9d78436f1fbdc873d81bfc3f7a5"
        },
        "date": 1606771076841,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 183678,
            "range": "± 19080",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 702722,
            "range": "± 80741",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5262913,
            "range": "± 590765",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20024990,
            "range": "± 2654195",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08548583b948a0be04338f1b1462917c001dbf4a",
          "message": "chore: prepare v0.3.5 release (#3201)",
          "timestamp": "2020-11-30T12:57:31-08:00",
          "tree_id": "bc964338ba8d03930d53192a1e2288132330ff97",
          "url": "https://github.com/timbrehifi/tokio/commit/08548583b948a0be04338f1b1462917c001dbf4a"
        },
        "date": 1606778632626,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 186918,
            "range": "± 27624",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 706906,
            "range": "± 226312",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5358126,
            "range": "± 796031",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21335660,
            "range": "± 2634222",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8e0f0a919663b210627c132d6af3e19a95d8037",
          "message": "example: add back udp-codec example (#3205)",
          "timestamp": "2020-12-01T12:20:20+09:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/timbrehifi/tokio/commit/a8e0f0a919663b210627c132d6af3e19a95d8037"
        },
        "date": 1606800411578,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195984,
            "range": "± 43451",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 733855,
            "range": "± 81470",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5565210,
            "range": "± 1118944",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21059063,
            "range": "± 3442597",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6051a61ec5c96113f4b543de3ec55431695347a",
          "message": "sync: make add_permits panic with usize::MAX >> 3 permits (#3188)",
          "timestamp": "2020-12-02T22:58:28+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/timbrehifi/tokio/commit/a6051a61ec5c96113f4b543de3ec55431695347a"
        },
        "date": 1606966844133,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 145003,
            "range": "± 15311",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 539414,
            "range": "± 72822",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 3894072,
            "range": "± 511584",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 15127408,
            "range": "± 2367038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a6051a61ec5c96113f4b543de3ec55431695347a",
          "message": "sync: make add_permits panic with usize::MAX >> 3 permits (#3188)",
          "timestamp": "2020-12-02T22:58:28+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/timbrehifi/tokio/commit/a6051a61ec5c96113f4b543de3ec55431695347a"
        },
        "date": 1606971147931,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190017,
            "range": "± 6540",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 740024,
            "range": "± 91832",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5548418,
            "range": "± 783450",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20552715,
            "range": "± 2782905",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "647299866a2262c8a1183adad73673e5803293ed",
          "message": "util: add writev-aware `poll_write_buf` (#3156)\n\n## Motivation\r\n\r\nIn Tokio 0.2, `AsyncRead` and `AsyncWrite` had `poll_write_buf` and\r\n`poll_read_buf` methods for reading and writing to implementers of\r\n`bytes` `Buf` and `BufMut` traits. In 0.3, these were removed, but\r\n`poll_read_buf` was added as a free function in `tokio-util`. However,\r\nthere is currently no `poll_write_buf`.\r\n\r\nNow that `AsyncWrite` has regained support for vectored writes in #3149,\r\nthere's a lot of potential benefit in having a `poll_write_buf` that\r\nuses vectored writes when supported and non-vectored writes when not\r\nsupported, so that users don't have to reimplement this.\r\n\r\n## Solution\r\n\r\nThis PR adds a `poll_write_buf` function to `tokio_util::io`, analogous\r\nto the existing `poll_read_buf` function.\r\n\r\nThis function writes from a `Buf` to an `AsyncWrite`, advancing the\r\n`Buf`'s internal cursor. In addition, when the `AsyncWrite` supports\r\nvectored writes (i.e. its `is_write_vectored` method returns `true`),\r\nit will use vectored IO.\r\n\r\nI copied the documentation for this functions from the docs from Tokio\r\n0.2's `AsyncWrite::poll_write_buf` , with some minor modifications as\r\nappropriate.\r\n\r\nFinally, I fixed a minor issue in the existing docs for `poll_read_buf`\r\nand `read_buf`, and updated `tokio_util::codec` to use `poll_write_buf`.\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T11:19:16-08:00",
          "tree_id": "c92df9ae491f0a444e694879858d032c3f6a5373",
          "url": "https://github.com/timbrehifi/tokio/commit/647299866a2262c8a1183adad73673e5803293ed"
        },
        "date": 1607033427871,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190717,
            "range": "± 17635",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 727350,
            "range": "± 57015",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5520013,
            "range": "± 808770",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21256511,
            "range": "± 3241131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00500d1b35f00c68117d8f4e7320303e967e92e3",
          "message": "util: prepare v0.5.1 release (#3210)\n\n### Added\r\n\r\n- io: `poll_read_buf` util fn (#2972).\r\n- io: `poll_write_buf` util fn with vectored write support (#3156).\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T15:30:52-08:00",
          "tree_id": "fe18e0f55daa4f26cf53bfe42a713338ac5460d9",
          "url": "https://github.com/timbrehifi/tokio/commit/00500d1b35f00c68117d8f4e7320303e967e92e3"
        },
        "date": 1607055931938,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190446,
            "range": "± 14465",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 739409,
            "range": "± 39483",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5753912,
            "range": "± 962668",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20538908,
            "range": "± 3561689",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "00500d1b35f00c68117d8f4e7320303e967e92e3",
          "message": "util: prepare v0.5.1 release (#3210)\n\n### Added\r\n\r\n- io: `poll_read_buf` util fn (#2972).\r\n- io: `poll_write_buf` util fn with vectored write support (#3156).\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T15:30:52-08:00",
          "tree_id": "fe18e0f55daa4f26cf53bfe42a713338ac5460d9",
          "url": "https://github.com/timbrehifi/tokio/commit/00500d1b35f00c68117d8f4e7320303e967e92e3"
        },
        "date": 1607056128997,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 186322,
            "range": "± 25482",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 649305,
            "range": "± 95256",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4798882,
            "range": "± 1329887",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19527616,
            "range": "± 3299942",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "udoprog@tedro.se",
            "name": "John-John Tedro",
            "username": "udoprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a125ebd745f31098aa170cb1009ff0fe34508d37",
          "message": "rt: fix panic in task abort when off rt (#3159)\n\nA call to `JoinHandle::abort` releases a task. When called from outside of the runtime,\r\nthis panics due to the current implementation checking for a thread-local worker context.\r\n\r\nThis change makes accessing the thread-local context optional under release, by falling\r\nback to remotely marking a task remotely as dropped. Behaving the same as if the core\r\nwas stolen by another worker.\r\n\r\nFixes #3157",
          "timestamp": "2020-12-03T21:29:59-08:00",
          "tree_id": "8dab5d17383a5f63f7554ec009cf6e1408c46d96",
          "url": "https://github.com/timbrehifi/tokio/commit/a125ebd745f31098aa170cb1009ff0fe34508d37"
        },
        "date": 1607073974316,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179953,
            "range": "± 31041",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 689031,
            "range": "± 70777",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5471403,
            "range": "± 982906",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19885842,
            "range": "± 2811351",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "udoprog@tedro.se",
            "name": "John-John Tedro",
            "username": "udoprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a125ebd745f31098aa170cb1009ff0fe34508d37",
          "message": "rt: fix panic in task abort when off rt (#3159)\n\nA call to `JoinHandle::abort` releases a task. When called from outside of the runtime,\r\nthis panics due to the current implementation checking for a thread-local worker context.\r\n\r\nThis change makes accessing the thread-local context optional under release, by falling\r\nback to remotely marking a task remotely as dropped. Behaving the same as if the core\r\nwas stolen by another worker.\r\n\r\nFixes #3157",
          "timestamp": "2020-12-03T21:29:59-08:00",
          "tree_id": "8dab5d17383a5f63f7554ec009cf6e1408c46d96",
          "url": "https://github.com/timbrehifi/tokio/commit/a125ebd745f31098aa170cb1009ff0fe34508d37"
        },
        "date": 1607076124306,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 152473,
            "range": "± 19030",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 622396,
            "range": "± 73434",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4770663,
            "range": "± 560099",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18092708,
            "range": "± 3715593",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/timbrehifi/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607268232411,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 176966,
            "range": "± 47907",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 666245,
            "range": "± 168051",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4821812,
            "range": "± 1351633",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19569360,
            "range": "± 3075811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62023dffe5396ee1a0380f12c7530bf4ff59fe4a",
          "message": "sync: forward port 0.2 mpsc test (#3225)\n\nForward ports the test included in #3215. The mpsc sempahore has been\r\nreplaced in 0.3 and does not include the bug being fixed.",
          "timestamp": "2020-12-07T11:24:15-08:00",
          "tree_id": "c891a48ce299e6cfd01090a880d1baf16ebe0ad7",
          "url": "https://github.com/timbrehifi/tokio/commit/62023dffe5396ee1a0380f12c7530bf4ff59fe4a"
        },
        "date": 1607388822354,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 144905,
            "range": "± 18614",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 594604,
            "range": "± 41497",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4479870,
            "range": "± 942402",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17608985,
            "range": "± 2284944",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e01391351bcb0715f737cefe94e1bc99f19af226",
          "message": "Add stress test (#3222)\n\nCreated a simple echo TCP server that on two different runtimes that is\r\ncalled from a GitHub action using Valgrind to ensure that there are\r\nno memory leaks.\r\n\r\nFixes: #3022",
          "timestamp": "2020-12-07T21:12:22-08:00",
          "tree_id": "5575f27e36e49b887062119225e1d61335a01b9a",
          "url": "https://github.com/timbrehifi/tokio/commit/e01391351bcb0715f737cefe94e1bc99f19af226"
        },
        "date": 1607408908609,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 201518,
            "range": "± 44891",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 730931,
            "range": "± 88473",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5014468,
            "range": "± 730798",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22129321,
            "range": "± 3293532",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9706ca92a8deb69d6e29265f21424042fea966c5",
          "message": "time: Fix race condition in timer drop (#3229)\n\nDropping a timer on the millisecond that it was scheduled for, when it was on\r\nthe pending list, could result in a panic previously, as we did not record the\r\npending-list state in cached_when.\r\n\r\nHopefully fixes: ZcashFoundation/zebra#1452",
          "timestamp": "2020-12-08T16:42:43-08:00",
          "tree_id": "cd77e2148b7cdf03d0fcb38e8e27cf3f7eed1ed9",
          "url": "https://github.com/timbrehifi/tokio/commit/9706ca92a8deb69d6e29265f21424042fea966c5"
        },
        "date": 1607481682590,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 177182,
            "range": "± 43984",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 692640,
            "range": "± 216094",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4997028,
            "range": "± 1329194",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18327772,
            "range": "± 3151375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cd240053b2e1dd5835186539f563c3496dfd7d",
          "message": "task: add missing feature flags for task_local and spawn_blocking (#3237)",
          "timestamp": "2020-12-09T23:49:28+01:00",
          "tree_id": "bbc90b40091bd716d0269b84da2bafb32288b149",
          "url": "https://github.com/timbrehifi/tokio/commit/52cd240053b2e1dd5835186539f563c3496dfd7d"
        },
        "date": 1607564869606,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 188161,
            "range": "± 10782",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 721856,
            "range": "± 53780",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5754316,
            "range": "± 522815",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21040958,
            "range": "± 2704460",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clemens.koza@gmx.at",
            "name": "Clemens Koza",
            "username": "SillyFreak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9646b4bce342342cc654c4c0834c0bf3627f7aa0",
          "message": "toml: enable test-util feature for the playground (#3224)",
          "timestamp": "2020-12-10T10:39:05+01:00",
          "tree_id": "0c5c06ea6a86a13b9485506cf2066945eaf53189",
          "url": "https://github.com/timbrehifi/tokio/commit/9646b4bce342342cc654c4c0834c0bf3627f7aa0"
        },
        "date": 1607596099052,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195501,
            "range": "± 35313",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 759828,
            "range": "± 113098",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5541653,
            "range": "± 920898",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21330359,
            "range": "± 3206431",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yusuktan@maguro.dev",
            "name": "Yusuke Tanaka",
            "username": "magurotuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1d76ec8f35052480eb14204d147df658bfdfdd",
          "message": "docs: fix typo in signal module documentation (#3249)",
          "timestamp": "2020-12-10T08:11:45-08:00",
          "tree_id": "46efd6f41cfaf702fb40c62b89800c511309d584",
          "url": "https://github.com/timbrehifi/tokio/commit/4b1d76ec8f35052480eb14204d147df658bfdfdd"
        },
        "date": 1607627411589,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 187012,
            "range": "± 8964",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 718302,
            "range": "± 57257",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5509166,
            "range": "± 1107661",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20523360,
            "range": "± 3242035",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16c2e0983cc0ab22f9a0b7a1ac37ea32a42b9a6e",
          "message": "net: Pass SocketAddr by value (#3125)",
          "timestamp": "2020-12-10T14:58:27-05:00",
          "tree_id": "d46d58a79f31dba872aa060ef378743fcedea70e",
          "url": "https://github.com/timbrehifi/tokio/commit/16c2e0983cc0ab22f9a0b7a1ac37ea32a42b9a6e"
        },
        "date": 1607648077030,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 157255,
            "range": "± 2294",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 629175,
            "range": "± 20785",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4570408,
            "range": "± 387510",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17669104,
            "range": "± 2700800",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/timbrehifi/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607668887612,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 152984,
            "range": "± 31996",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 588212,
            "range": "± 106850",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4252946,
            "range": "± 1377827",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 16554010,
            "range": "± 2456999",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/timbrehifi/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605330127157,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1062,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16480,
            "range": "± 6045",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1104,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15937,
            "range": "± 7206",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 599,
            "range": "± 45",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/timbrehifi/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605574896013,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 985,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14402,
            "range": "± 5399",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 998,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14394,
            "range": "± 6209",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 564,
            "range": "± 59",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/timbrehifi/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605646938865,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1043,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16381,
            "range": "± 11882",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1055,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 19135,
            "range": "± 6686",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 626,
            "range": "± 289",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/timbrehifi/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605733317776,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1036,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14329,
            "range": "± 3665",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1046,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14936,
            "range": "± 3907",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 591,
            "range": "± 27",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/timbrehifi/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605906087774,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 713,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12709,
            "range": "± 3276",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 727,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13213,
            "range": "± 3980",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 438,
            "range": "± 77",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae67851f11b7cc1f577de8ce21767ce3e2c7aff9",
          "message": "time: use intrusive lists for timer tracking (#3080)\n\nMore-or-less a half-rewrite of the current time driver, supporting the\r\nuse of intrusive futures for timer registration.\r\n\r\nFixes: #3028, #3069",
          "timestamp": "2020-11-23T10:42:50-08:00",
          "tree_id": "be43cb76333b0e9e42a101d659f9b2e41555d779",
          "url": "https://github.com/timbrehifi/tokio/commit/ae67851f11b7cc1f577de8ce21767ce3e2c7aff9"
        },
        "date": 1606165337165,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1008,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17609,
            "range": "± 7563",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1063,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16561,
            "range": "± 6197",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 606,
            "range": "± 55",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "driftluo@foxmail.com",
            "name": "漂流",
            "username": "driftluo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874fc3320bc000fee20d63b3ad865a1145122640",
          "message": "codec: add read_buffer_mut to FramedRead (#3166)",
          "timestamp": "2020-11-24T09:39:16+01:00",
          "tree_id": "53540b744f6a915cedc1099afe1b0639443b2436",
          "url": "https://github.com/timbrehifi/tokio/commit/874fc3320bc000fee20d63b3ad865a1145122640"
        },
        "date": 1606208498395,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 840,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13677,
            "range": "± 3426",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 855,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13827,
            "range": "± 3610",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 487,
            "range": "± 67",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/timbrehifi/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606222925583,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1007,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13688,
            "range": "± 3348",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 984,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14111,
            "range": "± 3720",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 562,
            "range": "± 51",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/timbrehifi/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606422669366,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 970,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15512,
            "range": "± 5270",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1006,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15249,
            "range": "± 4662",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 548,
            "range": "± 124",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niklas.fiekas@backscattering.de",
            "name": "Niklas Fiekas",
            "username": "niklasf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49129434198a96444bc0e9582a14062d3a46e93a",
          "message": "signal: expose CtrlC stream on windows (#3186)\n\n* Make tokio::signal::windows::ctrl_c() public.\r\n* Stop referring to private tokio::signal::windows::Event in module\r\n  documentation.\r\n\r\nCloses #3178",
          "timestamp": "2020-11-27T19:53:17Z",
          "tree_id": "904fb6b1fb539bffe69168c7202ccc3db15321dc",
          "url": "https://github.com/timbrehifi/tokio/commit/49129434198a96444bc0e9582a14062d3a46e93a"
        },
        "date": 1606509066027,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 972,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13946,
            "range": "± 3963",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 988,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14535,
            "range": "± 3441",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 567,
            "range": "± 43",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0acd06b42a9d1461302388f2a533e86d391d6040",
          "message": "runtime: fix shutdown_timeout(0) blocking (#3174)",
          "timestamp": "2020-11-28T19:31:13+01:00",
          "tree_id": "c17e5d58e10ee419e492cb831843c3f08e1f66d8",
          "url": "https://github.com/timbrehifi/tokio/commit/0acd06b42a9d1461302388f2a533e86d391d6040"
        },
        "date": 1606595463729,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 859,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15080,
            "range": "± 4358",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 874,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15046,
            "range": "± 6967",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 518,
            "range": "± 168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/timbrehifi/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606645463742,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 812,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13793,
            "range": "± 4563",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 848,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13496,
            "range": "± 3289",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 494,
            "range": "± 104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kylekosic@gmail.com",
            "name": "Kyle Kosic",
            "username": "kykosic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a85fdb884d961bb87a2f3d446c548802868e54cb",
          "message": "runtime: test for shutdown_timeout(0) (#3196)",
          "timestamp": "2020-11-29T21:30:19+01:00",
          "tree_id": "c554597c6596dc6eddc98bfafcc512361ddb5f31",
          "url": "https://github.com/timbrehifi/tokio/commit/a85fdb884d961bb87a2f3d446c548802868e54cb"
        },
        "date": 1606692174041,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1007,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14846,
            "range": "± 5583",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1036,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14257,
            "range": "± 3333",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 593,
            "range": "± 51",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pickfire@riseup.net",
            "name": "Ivan Tham",
            "username": "pickfire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72d6346c0d43d867002dc0cc5527fbd0b0e23c3f",
          "message": "macros: #[tokio::main] can be used on non-main (#3199)",
          "timestamp": "2020-11-30T17:34:11+01:00",
          "tree_id": "c558d1cb380cc67bfc56ea960a7d9e266259367a",
          "url": "https://github.com/timbrehifi/tokio/commit/72d6346c0d43d867002dc0cc5527fbd0b0e23c3f"
        },
        "date": 1606764099064,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 920,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14752,
            "range": "± 7413",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 973,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14428,
            "range": "± 3835",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 564,
            "range": "± 187",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "73653352+HK416-is-all-you-need@users.noreply.github.com",
            "name": "HK416-is-all-you-need",
            "username": "HK416-is-all-you-need"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7707ba88efa9b9d78436f1fbdc873d81bfc3f7a5",
          "message": "io: add AsyncFd::with_interest (#3167)\n\nFixes #3072",
          "timestamp": "2020-11-30T11:11:18-08:00",
          "tree_id": "45e9d190af02ab0cdc92c317e3127a1b8227ac3a",
          "url": "https://github.com/timbrehifi/tokio/commit/7707ba88efa9b9d78436f1fbdc873d81bfc3f7a5"
        },
        "date": 1606771068241,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 787,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12655,
            "range": "± 4169",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 800,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13062,
            "range": "± 3275",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 476,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8e0f0a919663b210627c132d6af3e19a95d8037",
          "message": "example: add back udp-codec example (#3205)",
          "timestamp": "2020-12-01T12:20:20+09:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/timbrehifi/tokio/commit/a8e0f0a919663b210627c132d6af3e19a95d8037"
        },
        "date": 1606800406751,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1015,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15509,
            "range": "± 5217",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 959,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14491,
            "range": "± 3662",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 559,
            "range": "± 98",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6051a61ec5c96113f4b543de3ec55431695347a",
          "message": "sync: make add_permits panic with usize::MAX >> 3 permits (#3188)",
          "timestamp": "2020-12-02T22:58:28+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/timbrehifi/tokio/commit/a6051a61ec5c96113f4b543de3ec55431695347a"
        },
        "date": 1606966840159,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 744,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12692,
            "range": "± 2533",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 771,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13117,
            "range": "± 3029",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 435,
            "range": "± 14",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a6051a61ec5c96113f4b543de3ec55431695347a",
          "message": "sync: make add_permits panic with usize::MAX >> 3 permits (#3188)",
          "timestamp": "2020-12-02T22:58:28+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/timbrehifi/tokio/commit/a6051a61ec5c96113f4b543de3ec55431695347a"
        },
        "date": 1606971141143,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1042,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14271,
            "range": "± 3319",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1051,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16468,
            "range": "± 16835",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 594,
            "range": "± 35",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "647299866a2262c8a1183adad73673e5803293ed",
          "message": "util: add writev-aware `poll_write_buf` (#3156)\n\n## Motivation\r\n\r\nIn Tokio 0.2, `AsyncRead` and `AsyncWrite` had `poll_write_buf` and\r\n`poll_read_buf` methods for reading and writing to implementers of\r\n`bytes` `Buf` and `BufMut` traits. In 0.3, these were removed, but\r\n`poll_read_buf` was added as a free function in `tokio-util`. However,\r\nthere is currently no `poll_write_buf`.\r\n\r\nNow that `AsyncWrite` has regained support for vectored writes in #3149,\r\nthere's a lot of potential benefit in having a `poll_write_buf` that\r\nuses vectored writes when supported and non-vectored writes when not\r\nsupported, so that users don't have to reimplement this.\r\n\r\n## Solution\r\n\r\nThis PR adds a `poll_write_buf` function to `tokio_util::io`, analogous\r\nto the existing `poll_read_buf` function.\r\n\r\nThis function writes from a `Buf` to an `AsyncWrite`, advancing the\r\n`Buf`'s internal cursor. In addition, when the `AsyncWrite` supports\r\nvectored writes (i.e. its `is_write_vectored` method returns `true`),\r\nit will use vectored IO.\r\n\r\nI copied the documentation for this functions from the docs from Tokio\r\n0.2's `AsyncWrite::poll_write_buf` , with some minor modifications as\r\nappropriate.\r\n\r\nFinally, I fixed a minor issue in the existing docs for `poll_read_buf`\r\nand `read_buf`, and updated `tokio_util::codec` to use `poll_write_buf`.\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T11:19:16-08:00",
          "tree_id": "c92df9ae491f0a444e694879858d032c3f6a5373",
          "url": "https://github.com/timbrehifi/tokio/commit/647299866a2262c8a1183adad73673e5803293ed"
        },
        "date": 1607033438046,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1010,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15082,
            "range": "± 3375",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1049,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14270,
            "range": "± 4223",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 591,
            "range": "± 66",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00500d1b35f00c68117d8f4e7320303e967e92e3",
          "message": "util: prepare v0.5.1 release (#3210)\n\n### Added\r\n\r\n- io: `poll_read_buf` util fn (#2972).\r\n- io: `poll_write_buf` util fn with vectored write support (#3156).\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T15:30:52-08:00",
          "tree_id": "fe18e0f55daa4f26cf53bfe42a713338ac5460d9",
          "url": "https://github.com/timbrehifi/tokio/commit/00500d1b35f00c68117d8f4e7320303e967e92e3"
        },
        "date": 1607055937092,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1037,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17109,
            "range": "± 6233",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1070,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15829,
            "range": "± 5684",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 611,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "00500d1b35f00c68117d8f4e7320303e967e92e3",
          "message": "util: prepare v0.5.1 release (#3210)\n\n### Added\r\n\r\n- io: `poll_read_buf` util fn (#2972).\r\n- io: `poll_write_buf` util fn with vectored write support (#3156).\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T15:30:52-08:00",
          "tree_id": "fe18e0f55daa4f26cf53bfe42a713338ac5460d9",
          "url": "https://github.com/timbrehifi/tokio/commit/00500d1b35f00c68117d8f4e7320303e967e92e3"
        },
        "date": 1607056141941,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 811,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14410,
            "range": "± 4074",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 855,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14790,
            "range": "± 4818",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 485,
            "range": "± 101",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "udoprog@tedro.se",
            "name": "John-John Tedro",
            "username": "udoprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a125ebd745f31098aa170cb1009ff0fe34508d37",
          "message": "rt: fix panic in task abort when off rt (#3159)\n\nA call to `JoinHandle::abort` releases a task. When called from outside of the runtime,\r\nthis panics due to the current implementation checking for a thread-local worker context.\r\n\r\nThis change makes accessing the thread-local context optional under release, by falling\r\nback to remotely marking a task remotely as dropped. Behaving the same as if the core\r\nwas stolen by another worker.\r\n\r\nFixes #3157",
          "timestamp": "2020-12-03T21:29:59-08:00",
          "tree_id": "8dab5d17383a5f63f7554ec009cf6e1408c46d96",
          "url": "https://github.com/timbrehifi/tokio/commit/a125ebd745f31098aa170cb1009ff0fe34508d37"
        },
        "date": 1607076125027,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 841,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13217,
            "range": "± 2403",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 881,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13466,
            "range": "± 2529",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 500,
            "range": "± 32",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/timbrehifi/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607268207043,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1012,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15593,
            "range": "± 4583",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1041,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15861,
            "range": "± 6915",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 597,
            "range": "± 106",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62023dffe5396ee1a0380f12c7530bf4ff59fe4a",
          "message": "sync: forward port 0.2 mpsc test (#3225)\n\nForward ports the test included in #3215. The mpsc sempahore has been\r\nreplaced in 0.3 and does not include the bug being fixed.",
          "timestamp": "2020-12-07T11:24:15-08:00",
          "tree_id": "c891a48ce299e6cfd01090a880d1baf16ebe0ad7",
          "url": "https://github.com/timbrehifi/tokio/commit/62023dffe5396ee1a0380f12c7530bf4ff59fe4a"
        },
        "date": 1607388834640,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1031,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14113,
            "range": "± 3688",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1061,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14876,
            "range": "± 5922",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 588,
            "range": "± 54",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e01391351bcb0715f737cefe94e1bc99f19af226",
          "message": "Add stress test (#3222)\n\nCreated a simple echo TCP server that on two different runtimes that is\r\ncalled from a GitHub action using Valgrind to ensure that there are\r\nno memory leaks.\r\n\r\nFixes: #3022",
          "timestamp": "2020-12-07T21:12:22-08:00",
          "tree_id": "5575f27e36e49b887062119225e1d61335a01b9a",
          "url": "https://github.com/timbrehifi/tokio/commit/e01391351bcb0715f737cefe94e1bc99f19af226"
        },
        "date": 1607408908327,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 925,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15853,
            "range": "± 7753",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 952,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17704,
            "range": "± 6108",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 570,
            "range": "± 102",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9706ca92a8deb69d6e29265f21424042fea966c5",
          "message": "time: Fix race condition in timer drop (#3229)\n\nDropping a timer on the millisecond that it was scheduled for, when it was on\r\nthe pending list, could result in a panic previously, as we did not record the\r\npending-list state in cached_when.\r\n\r\nHopefully fixes: ZcashFoundation/zebra#1452",
          "timestamp": "2020-12-08T16:42:43-08:00",
          "tree_id": "cd77e2148b7cdf03d0fcb38e8e27cf3f7eed1ed9",
          "url": "https://github.com/timbrehifi/tokio/commit/9706ca92a8deb69d6e29265f21424042fea966c5"
        },
        "date": 1607481674427,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 917,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14335,
            "range": "± 3746",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 988,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14363,
            "range": "± 5623",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 554,
            "range": "± 66",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cd240053b2e1dd5835186539f563c3496dfd7d",
          "message": "task: add missing feature flags for task_local and spawn_blocking (#3237)",
          "timestamp": "2020-12-09T23:49:28+01:00",
          "tree_id": "bbc90b40091bd716d0269b84da2bafb32288b149",
          "url": "https://github.com/timbrehifi/tokio/commit/52cd240053b2e1dd5835186539f563c3496dfd7d"
        },
        "date": 1607564860879,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1013,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14496,
            "range": "± 3386",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1009,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13995,
            "range": "± 4022",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 592,
            "range": "± 45",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clemens.koza@gmx.at",
            "name": "Clemens Koza",
            "username": "SillyFreak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9646b4bce342342cc654c4c0834c0bf3627f7aa0",
          "message": "toml: enable test-util feature for the playground (#3224)",
          "timestamp": "2020-12-10T10:39:05+01:00",
          "tree_id": "0c5c06ea6a86a13b9485506cf2066945eaf53189",
          "url": "https://github.com/timbrehifi/tokio/commit/9646b4bce342342cc654c4c0834c0bf3627f7aa0"
        },
        "date": 1607596104009,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1044,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16227,
            "range": "± 5230",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1092,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15908,
            "range": "± 3337",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 66",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yusuktan@maguro.dev",
            "name": "Yusuke Tanaka",
            "username": "magurotuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1d76ec8f35052480eb14204d147df658bfdfdd",
          "message": "docs: fix typo in signal module documentation (#3249)",
          "timestamp": "2020-12-10T08:11:45-08:00",
          "tree_id": "46efd6f41cfaf702fb40c62b89800c511309d584",
          "url": "https://github.com/timbrehifi/tokio/commit/4b1d76ec8f35052480eb14204d147df658bfdfdd"
        },
        "date": 1607627410305,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 840,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12192,
            "range": "± 2937",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 864,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12590,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 495,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16c2e0983cc0ab22f9a0b7a1ac37ea32a42b9a6e",
          "message": "net: Pass SocketAddr by value (#3125)",
          "timestamp": "2020-12-10T14:58:27-05:00",
          "tree_id": "d46d58a79f31dba872aa060ef378743fcedea70e",
          "url": "https://github.com/timbrehifi/tokio/commit/16c2e0983cc0ab22f9a0b7a1ac37ea32a42b9a6e"
        },
        "date": 1607648074060,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 974,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14404,
            "range": "± 4472",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1042,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14534,
            "range": "± 3855",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 569,
            "range": "± 81",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/timbrehifi/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607668882353,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 831,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13093,
            "range": "± 2955",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 832,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14047,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 466,
            "range": "± 78",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/timbrehifi/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607720884656,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 837,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13038,
            "range": "± 2498",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 866,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13074,
            "range": "± 2890",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 495,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/timbrehifi/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605330134859,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6653586,
            "range": "± 2255486",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6521283,
            "range": "± 1458432",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6021558,
            "range": "± 2097832",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 508,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 512,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 532,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49643,
            "range": "± 1907",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 813,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1060604,
            "range": "± 182350",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 744587,
            "range": "± 60700",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/timbrehifi/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605574957147,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7464437,
            "range": "± 2780081",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7247618,
            "range": "± 1945492",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6603234,
            "range": "± 2095692",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 944,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 923,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 933,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 68354,
            "range": "± 10087",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1131,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1145422,
            "range": "± 178354",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 826554,
            "range": "± 118170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/timbrehifi/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605646968046,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7319039,
            "range": "± 2838569",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7157551,
            "range": "± 2167337",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6254355,
            "range": "± 2281045",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 840,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 813,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 811,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 64107,
            "range": "± 13916",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1086,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1089044,
            "range": "± 241033",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 751589,
            "range": "± 96600",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/timbrehifi/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605733328591,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6856802,
            "range": "± 2339112",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6557302,
            "range": "± 1808635",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5807799,
            "range": "± 2360222",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 673,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 666,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 664,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50163,
            "range": "± 2594",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 885,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1132317,
            "range": "± 47737",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 799634,
            "range": "± 28045",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/timbrehifi/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605906099434,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5901414,
            "range": "± 2140944",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5904426,
            "range": "± 1250103",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5301680,
            "range": "± 2263164",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 533,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 531,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 531,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45761,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 721,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 961696,
            "range": "± 6985",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 695904,
            "range": "± 7738",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae67851f11b7cc1f577de8ce21767ce3e2c7aff9",
          "message": "time: use intrusive lists for timer tracking (#3080)\n\nMore-or-less a half-rewrite of the current time driver, supporting the\r\nuse of intrusive futures for timer registration.\r\n\r\nFixes: #3028, #3069",
          "timestamp": "2020-11-23T10:42:50-08:00",
          "tree_id": "be43cb76333b0e9e42a101d659f9b2e41555d779",
          "url": "https://github.com/timbrehifi/tokio/commit/ae67851f11b7cc1f577de8ce21767ce3e2c7aff9"
        },
        "date": 1606165353844,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6885222,
            "range": "± 2673888",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7087007,
            "range": "± 1541515",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6314236,
            "range": "± 2149826",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 866,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 868,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 868,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 65267,
            "range": "± 12175",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1112,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1190455,
            "range": "± 168771",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 795687,
            "range": "± 151487",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "driftluo@foxmail.com",
            "name": "漂流",
            "username": "driftluo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874fc3320bc000fee20d63b3ad865a1145122640",
          "message": "codec: add read_buffer_mut to FramedRead (#3166)",
          "timestamp": "2020-11-24T09:39:16+01:00",
          "tree_id": "53540b744f6a915cedc1099afe1b0639443b2436",
          "url": "https://github.com/timbrehifi/tokio/commit/874fc3320bc000fee20d63b3ad865a1145122640"
        },
        "date": 1606208517558,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6545540,
            "range": "± 1949363",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6821046,
            "range": "± 1359810",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6211805,
            "range": "± 2544761",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 597,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 596,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 594,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 39180,
            "range": "± 2754",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 812,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1114821,
            "range": "± 53750",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 795875,
            "range": "± 23794",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/timbrehifi/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606222933760,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6823381,
            "range": "± 2126815",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6720296,
            "range": "± 1520006",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6473937,
            "range": "± 1961839",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 665,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 671,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 670,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45416,
            "range": "± 933",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 923,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1122680,
            "range": "± 2009",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 802557,
            "range": "± 2071",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajiv.chauhan@gmail.com",
            "name": "Rajiv Chauhan",
            "username": "chauhraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e406a7a47699d93fa2a77fb72553600cb7abd0f",
          "message": "macros: fix outdated documentation (#3180)\n\n1. Changed 0.2 to 0.3\r\n2. Changed ‘multi’ to ‘single’ to indicate that the behavior is single threaded",
          "timestamp": "2020-11-26T19:46:15+01:00",
          "tree_id": "ac6898684e4b84e4a5d0e781adf42d950bbc9e43",
          "url": "https://github.com/timbrehifi/tokio/commit/5e406a7a47699d93fa2a77fb72553600cb7abd0f"
        },
        "date": 1606422690078,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6497909,
            "range": "± 2063755",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6038059,
            "range": "± 2018647",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6026689,
            "range": "± 1978452",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 791,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 734,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 853,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 63054,
            "range": "± 6736",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 840,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 921402,
            "range": "± 217904",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 648158,
            "range": "± 164073",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niklas.fiekas@backscattering.de",
            "name": "Niklas Fiekas",
            "username": "niklasf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49129434198a96444bc0e9582a14062d3a46e93a",
          "message": "signal: expose CtrlC stream on windows (#3186)\n\n* Make tokio::signal::windows::ctrl_c() public.\r\n* Stop referring to private tokio::signal::windows::Event in module\r\n  documentation.\r\n\r\nCloses #3178",
          "timestamp": "2020-11-27T19:53:17Z",
          "tree_id": "904fb6b1fb539bffe69168c7202ccc3db15321dc",
          "url": "https://github.com/timbrehifi/tokio/commit/49129434198a96444bc0e9582a14062d3a46e93a"
        },
        "date": 1606509074293,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6693605,
            "range": "± 2033606",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6781574,
            "range": "± 1559441",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5954067,
            "range": "± 2350478",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 644,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 637,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 636,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49689,
            "range": "± 1813",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 822,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1112950,
            "range": "± 16470",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 798754,
            "range": "± 9619",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0acd06b42a9d1461302388f2a533e86d391d6040",
          "message": "runtime: fix shutdown_timeout(0) blocking (#3174)",
          "timestamp": "2020-11-28T19:31:13+01:00",
          "tree_id": "c17e5d58e10ee419e492cb831843c3f08e1f66d8",
          "url": "https://github.com/timbrehifi/tokio/commit/0acd06b42a9d1461302388f2a533e86d391d6040"
        },
        "date": 1606595473906,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6806550,
            "range": "± 2242003",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6623869,
            "range": "± 1299238",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6448237,
            "range": "± 2300068",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 537,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 530,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 532,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 38888,
            "range": "± 3043",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 857,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1121790,
            "range": "± 12640",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 812506,
            "range": "± 189652",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/timbrehifi/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606645497010,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6578040,
            "range": "± 1968141",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6749399,
            "range": "± 1606245",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6301733,
            "range": "± 2714811",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 610,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 628,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 613,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 38025,
            "range": "± 3197",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 805,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1053823,
            "range": "± 94015",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 781953,
            "range": "± 117798",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kylekosic@gmail.com",
            "name": "Kyle Kosic",
            "username": "kykosic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a85fdb884d961bb87a2f3d446c548802868e54cb",
          "message": "runtime: test for shutdown_timeout(0) (#3196)",
          "timestamp": "2020-11-29T21:30:19+01:00",
          "tree_id": "c554597c6596dc6eddc98bfafcc512361ddb5f31",
          "url": "https://github.com/timbrehifi/tokio/commit/a85fdb884d961bb87a2f3d446c548802868e54cb"
        },
        "date": 1606692191920,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6777845,
            "range": "± 2007078",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6801541,
            "range": "± 1243876",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5604322,
            "range": "± 2186747",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 895,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 885,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 902,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 66000,
            "range": "± 8159",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1091,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1128750,
            "range": "± 236950",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 787712,
            "range": "± 144163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pickfire@riseup.net",
            "name": "Ivan Tham",
            "username": "pickfire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72d6346c0d43d867002dc0cc5527fbd0b0e23c3f",
          "message": "macros: #[tokio::main] can be used on non-main (#3199)",
          "timestamp": "2020-11-30T17:34:11+01:00",
          "tree_id": "c558d1cb380cc67bfc56ea960a7d9e266259367a",
          "url": "https://github.com/timbrehifi/tokio/commit/72d6346c0d43d867002dc0cc5527fbd0b0e23c3f"
        },
        "date": 1606764135779,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7593391,
            "range": "± 3510030",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7966170,
            "range": "± 2891349",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 7385662,
            "range": "± 4148877",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 760,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 752,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 780,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 41172,
            "range": "± 3040",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 918,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1197571,
            "range": "± 86066",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 857658,
            "range": "± 47857",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "73653352+HK416-is-all-you-need@users.noreply.github.com",
            "name": "HK416-is-all-you-need",
            "username": "HK416-is-all-you-need"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7707ba88efa9b9d78436f1fbdc873d81bfc3f7a5",
          "message": "io: add AsyncFd::with_interest (#3167)\n\nFixes #3072",
          "timestamp": "2020-11-30T11:11:18-08:00",
          "tree_id": "45e9d190af02ab0cdc92c317e3127a1b8227ac3a",
          "url": "https://github.com/timbrehifi/tokio/commit/7707ba88efa9b9d78436f1fbdc873d81bfc3f7a5"
        },
        "date": 1606771106179,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6562013,
            "range": "± 1909356",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6527087,
            "range": "± 1531776",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6011894,
            "range": "± 2343376",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 602,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 578,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 578,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45238,
            "range": "± 7887",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 807,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1081967,
            "range": "± 193844",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 759158,
            "range": "± 76766",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08548583b948a0be04338f1b1462917c001dbf4a",
          "message": "chore: prepare v0.3.5 release (#3201)",
          "timestamp": "2020-11-30T12:57:31-08:00",
          "tree_id": "bc964338ba8d03930d53192a1e2288132330ff97",
          "url": "https://github.com/timbrehifi/tokio/commit/08548583b948a0be04338f1b1462917c001dbf4a"
        },
        "date": 1606778640148,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6467922,
            "range": "± 2067031",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6624844,
            "range": "± 1480942",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6148104,
            "range": "± 2025387",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 786,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 754,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 784,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50634,
            "range": "± 1233",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 850,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1101281,
            "range": "± 91557",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 790777,
            "range": "± 33479",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8e0f0a919663b210627c132d6af3e19a95d8037",
          "message": "example: add back udp-codec example (#3205)",
          "timestamp": "2020-12-01T12:20:20+09:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/timbrehifi/tokio/commit/a8e0f0a919663b210627c132d6af3e19a95d8037"
        },
        "date": 1606800430074,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6792311,
            "range": "± 2083892",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6782405,
            "range": "± 1024829",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6211529,
            "range": "± 2095515",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 683,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 687,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 685,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52116,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 990,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1122664,
            "range": "± 35286",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 801255,
            "range": "± 28243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6051a61ec5c96113f4b543de3ec55431695347a",
          "message": "sync: make add_permits panic with usize::MAX >> 3 permits (#3188)",
          "timestamp": "2020-12-02T22:58:28+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/timbrehifi/tokio/commit/a6051a61ec5c96113f4b543de3ec55431695347a"
        },
        "date": 1606966866635,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5854017,
            "range": "± 1743554",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6384078,
            "range": "± 1392425",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5562061,
            "range": "± 1731583",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 498,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 459,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 546,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 39136,
            "range": "± 4298",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 671,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 896521,
            "range": "± 168678",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 651214,
            "range": "± 95584",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a6051a61ec5c96113f4b543de3ec55431695347a",
          "message": "sync: make add_permits panic with usize::MAX >> 3 permits (#3188)",
          "timestamp": "2020-12-02T22:58:28+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/timbrehifi/tokio/commit/a6051a61ec5c96113f4b543de3ec55431695347a"
        },
        "date": 1606971150571,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5974882,
            "range": "± 2271088",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5891274,
            "range": "± 1068013",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5505586,
            "range": "± 2019868",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 529,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 523,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 523,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 42461,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 704,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 954177,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 686388,
            "range": "± 1330",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "647299866a2262c8a1183adad73673e5803293ed",
          "message": "util: add writev-aware `poll_write_buf` (#3156)\n\n## Motivation\r\n\r\nIn Tokio 0.2, `AsyncRead` and `AsyncWrite` had `poll_write_buf` and\r\n`poll_read_buf` methods for reading and writing to implementers of\r\n`bytes` `Buf` and `BufMut` traits. In 0.3, these were removed, but\r\n`poll_read_buf` was added as a free function in `tokio-util`. However,\r\nthere is currently no `poll_write_buf`.\r\n\r\nNow that `AsyncWrite` has regained support for vectored writes in #3149,\r\nthere's a lot of potential benefit in having a `poll_write_buf` that\r\nuses vectored writes when supported and non-vectored writes when not\r\nsupported, so that users don't have to reimplement this.\r\n\r\n## Solution\r\n\r\nThis PR adds a `poll_write_buf` function to `tokio_util::io`, analogous\r\nto the existing `poll_read_buf` function.\r\n\r\nThis function writes from a `Buf` to an `AsyncWrite`, advancing the\r\n`Buf`'s internal cursor. In addition, when the `AsyncWrite` supports\r\nvectored writes (i.e. its `is_write_vectored` method returns `true`),\r\nit will use vectored IO.\r\n\r\nI copied the documentation for this functions from the docs from Tokio\r\n0.2's `AsyncWrite::poll_write_buf` , with some minor modifications as\r\nappropriate.\r\n\r\nFinally, I fixed a minor issue in the existing docs for `poll_read_buf`\r\nand `read_buf`, and updated `tokio_util::codec` to use `poll_write_buf`.\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T11:19:16-08:00",
          "tree_id": "c92df9ae491f0a444e694879858d032c3f6a5373",
          "url": "https://github.com/timbrehifi/tokio/commit/647299866a2262c8a1183adad73673e5803293ed"
        },
        "date": 1607033459709,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6442437,
            "range": "± 1835207",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6296535,
            "range": "± 1193055",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6120266,
            "range": "± 2502122",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 590,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 590,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 600,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 47568,
            "range": "± 6702",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 793,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1043025,
            "range": "± 92195",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 724127,
            "range": "± 109682",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00500d1b35f00c68117d8f4e7320303e967e92e3",
          "message": "util: prepare v0.5.1 release (#3210)\n\n### Added\r\n\r\n- io: `poll_read_buf` util fn (#2972).\r\n- io: `poll_write_buf` util fn with vectored write support (#3156).\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T15:30:52-08:00",
          "tree_id": "fe18e0f55daa4f26cf53bfe42a713338ac5460d9",
          "url": "https://github.com/timbrehifi/tokio/commit/00500d1b35f00c68117d8f4e7320303e967e92e3"
        },
        "date": 1607055948273,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6487587,
            "range": "± 2403878",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6351359,
            "range": "± 1498508",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6209941,
            "range": "± 2892611",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 828,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 827,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 828,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 56258,
            "range": "± 12111",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1023,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1087366,
            "range": "± 217137",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 760684,
            "range": "± 37724",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "00500d1b35f00c68117d8f4e7320303e967e92e3",
          "message": "util: prepare v0.5.1 release (#3210)\n\n### Added\r\n\r\n- io: `poll_read_buf` util fn (#2972).\r\n- io: `poll_write_buf` util fn with vectored write support (#3156).\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-12-03T15:30:52-08:00",
          "tree_id": "fe18e0f55daa4f26cf53bfe42a713338ac5460d9",
          "url": "https://github.com/timbrehifi/tokio/commit/00500d1b35f00c68117d8f4e7320303e967e92e3"
        },
        "date": 1607056169602,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6269406,
            "range": "± 1717559",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6333423,
            "range": "± 1577467",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5898479,
            "range": "± 1974750",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 557,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 558,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 570,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45475,
            "range": "± 5487",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 786,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 990210,
            "range": "± 134914",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 718076,
            "range": "± 109476",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "udoprog@tedro.se",
            "name": "John-John Tedro",
            "username": "udoprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a125ebd745f31098aa170cb1009ff0fe34508d37",
          "message": "rt: fix panic in task abort when off rt (#3159)\n\nA call to `JoinHandle::abort` releases a task. When called from outside of the runtime,\r\nthis panics due to the current implementation checking for a thread-local worker context.\r\n\r\nThis change makes accessing the thread-local context optional under release, by falling\r\nback to remotely marking a task remotely as dropped. Behaving the same as if the core\r\nwas stolen by another worker.\r\n\r\nFixes #3157",
          "timestamp": "2020-12-03T21:29:59-08:00",
          "tree_id": "8dab5d17383a5f63f7554ec009cf6e1408c46d96",
          "url": "https://github.com/timbrehifi/tokio/commit/a125ebd745f31098aa170cb1009ff0fe34508d37"
        },
        "date": 1607073994050,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7547476,
            "range": "± 3272448",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6831038,
            "range": "± 1902036",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6332379,
            "range": "± 2598230",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 714,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 705,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 573,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 42126,
            "range": "± 2998",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 907,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1189516,
            "range": "± 208090",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 840632,
            "range": "± 163415",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "udoprog@tedro.se",
            "name": "John-John Tedro",
            "username": "udoprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a125ebd745f31098aa170cb1009ff0fe34508d37",
          "message": "rt: fix panic in task abort when off rt (#3159)\n\nA call to `JoinHandle::abort` releases a task. When called from outside of the runtime,\r\nthis panics due to the current implementation checking for a thread-local worker context.\r\n\r\nThis change makes accessing the thread-local context optional under release, by falling\r\nback to remotely marking a task remotely as dropped. Behaving the same as if the core\r\nwas stolen by another worker.\r\n\r\nFixes #3157",
          "timestamp": "2020-12-03T21:29:59-08:00",
          "tree_id": "8dab5d17383a5f63f7554ec009cf6e1408c46d96",
          "url": "https://github.com/timbrehifi/tokio/commit/a125ebd745f31098aa170cb1009ff0fe34508d37"
        },
        "date": 1607076147776,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5463476,
            "range": "± 2327892",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5520200,
            "range": "± 1206734",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5040643,
            "range": "± 2472723",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 686,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 688,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 672,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 55123,
            "range": "± 4909",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 794,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 848115,
            "range": "± 144737",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 588666,
            "range": "± 106578",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/timbrehifi/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607268275317,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 8323151,
            "range": "± 3800395",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7970935,
            "range": "± 2566693",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 7571597,
            "range": "± 3283625",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 884,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 874,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 843,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 76304,
            "range": "± 21862",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1292,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1390813,
            "range": "± 379850",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 967644,
            "range": "± 177901",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62023dffe5396ee1a0380f12c7530bf4ff59fe4a",
          "message": "sync: forward port 0.2 mpsc test (#3225)\n\nForward ports the test included in #3215. The mpsc sempahore has been\r\nreplaced in 0.3 and does not include the bug being fixed.",
          "timestamp": "2020-12-07T11:24:15-08:00",
          "tree_id": "c891a48ce299e6cfd01090a880d1baf16ebe0ad7",
          "url": "https://github.com/timbrehifi/tokio/commit/62023dffe5396ee1a0380f12c7530bf4ff59fe4a"
        },
        "date": 1607388841882,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6661257,
            "range": "± 2043443",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6705337,
            "range": "± 1404312",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6158330,
            "range": "± 2313898",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 613,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 613,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 612,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 41186,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 869,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1109583,
            "range": "± 10479",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 815123,
            "range": "± 2967",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigblas@gmail.com",
            "name": "Blas Rodriguez Irizar",
            "username": "blasrodri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e01391351bcb0715f737cefe94e1bc99f19af226",
          "message": "Add stress test (#3222)\n\nCreated a simple echo TCP server that on two different runtimes that is\r\ncalled from a GitHub action using Valgrind to ensure that there are\r\nno memory leaks.\r\n\r\nFixes: #3022",
          "timestamp": "2020-12-07T21:12:22-08:00",
          "tree_id": "5575f27e36e49b887062119225e1d61335a01b9a",
          "url": "https://github.com/timbrehifi/tokio/commit/e01391351bcb0715f737cefe94e1bc99f19af226"
        },
        "date": 1607408916185,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6129047,
            "range": "± 2403105",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5915384,
            "range": "± 1428615",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5562494,
            "range": "± 2810408",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 705,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 696,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 711,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 55801,
            "range": "± 31204",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 852,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 911887,
            "range": "± 161197",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 656111,
            "range": "± 106320",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bdonlan@gmail.com",
            "name": "bdonlan",
            "username": "bdonlan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9706ca92a8deb69d6e29265f21424042fea966c5",
          "message": "time: Fix race condition in timer drop (#3229)\n\nDropping a timer on the millisecond that it was scheduled for, when it was on\r\nthe pending list, could result in a panic previously, as we did not record the\r\npending-list state in cached_when.\r\n\r\nHopefully fixes: ZcashFoundation/zebra#1452",
          "timestamp": "2020-12-08T16:42:43-08:00",
          "tree_id": "cd77e2148b7cdf03d0fcb38e8e27cf3f7eed1ed9",
          "url": "https://github.com/timbrehifi/tokio/commit/9706ca92a8deb69d6e29265f21424042fea966c5"
        },
        "date": 1607481683006,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6961466,
            "range": "± 2761953",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7149410,
            "range": "± 1710714",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6129346,
            "range": "± 2372568",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 600,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 605,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 606,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 48952,
            "range": "± 3004",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 879,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1114113,
            "range": "± 42493",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 796721,
            "range": "± 26162",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52cd240053b2e1dd5835186539f563c3496dfd7d",
          "message": "task: add missing feature flags for task_local and spawn_blocking (#3237)",
          "timestamp": "2020-12-09T23:49:28+01:00",
          "tree_id": "bbc90b40091bd716d0269b84da2bafb32288b149",
          "url": "https://github.com/timbrehifi/tokio/commit/52cd240053b2e1dd5835186539f563c3496dfd7d"
        },
        "date": 1607564895062,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6690739,
            "range": "± 1846172",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6630779,
            "range": "± 1522985",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6039837,
            "range": "± 1484769",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 537,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 529,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 535,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 48738,
            "range": "± 3127",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 876,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1071643,
            "range": "± 89912",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 771091,
            "range": "± 69268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clemens.koza@gmx.at",
            "name": "Clemens Koza",
            "username": "SillyFreak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9646b4bce342342cc654c4c0834c0bf3627f7aa0",
          "message": "toml: enable test-util feature for the playground (#3224)",
          "timestamp": "2020-12-10T10:39:05+01:00",
          "tree_id": "0c5c06ea6a86a13b9485506cf2066945eaf53189",
          "url": "https://github.com/timbrehifi/tokio/commit/9646b4bce342342cc654c4c0834c0bf3627f7aa0"
        },
        "date": 1607596096847,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5970569,
            "range": "± 1817102",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5888520,
            "range": "± 1204998",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5362364,
            "range": "± 2314605",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 548,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 548,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 546,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 42827,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 685,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 951134,
            "range": "± 2423",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 687146,
            "range": "± 9165",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yusuktan@maguro.dev",
            "name": "Yusuke Tanaka",
            "username": "magurotuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1d76ec8f35052480eb14204d147df658bfdfdd",
          "message": "docs: fix typo in signal module documentation (#3249)",
          "timestamp": "2020-12-10T08:11:45-08:00",
          "tree_id": "46efd6f41cfaf702fb40c62b89800c511309d584",
          "url": "https://github.com/timbrehifi/tokio/commit/4b1d76ec8f35052480eb14204d147df658bfdfdd"
        },
        "date": 1607627450367,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6379974,
            "range": "± 1802321",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6295752,
            "range": "± 1609741",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5480006,
            "range": "± 2019969",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 495,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 490,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 475,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 37783,
            "range": "± 6586",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 770,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 953832,
            "range": "± 177752",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 696360,
            "range": "± 132956",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16c2e0983cc0ab22f9a0b7a1ac37ea32a42b9a6e",
          "message": "net: Pass SocketAddr by value (#3125)",
          "timestamp": "2020-12-10T14:58:27-05:00",
          "tree_id": "d46d58a79f31dba872aa060ef378743fcedea70e",
          "url": "https://github.com/timbrehifi/tokio/commit/16c2e0983cc0ab22f9a0b7a1ac37ea32a42b9a6e"
        },
        "date": 1607648145361,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7315170,
            "range": "± 2717502",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7076440,
            "range": "± 1442332",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6384188,
            "range": "± 2442124",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 819,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 813,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 847,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 65036,
            "range": "± 7303",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1103,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1089023,
            "range": "± 189328",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 784859,
            "range": "± 124027",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/timbrehifi/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607668882889,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5587512,
            "range": "± 1879443",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5844124,
            "range": "± 1687686",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5919533,
            "range": "± 1890678",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 552,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 451,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 487,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 46047,
            "range": "± 4565",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 832,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 954726,
            "range": "± 172670",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 694733,
            "range": "± 118678",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}