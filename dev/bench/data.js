window.BENCHMARK_DATA = {
  "lastUpdate": 1606800404162,
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
      }
    ]
  }
}