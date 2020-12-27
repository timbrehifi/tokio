window.BENCHMARK_DATA = {
  "lastUpdate": 1609104670451,
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
        "date": 1607720895166,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13156,
            "range": "± 2219",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 907,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 537,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13932,
            "range": "± 3405",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 908,
            "range": "± 8",
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
          "id": "c1ec469ad2af883b001d54e81dad426c01f918cd",
          "message": "util: add constructors to TokioContext (#3221)",
          "timestamp": "2020-12-11T20:41:22-08:00",
          "tree_id": "cdb1273c1a4eea6c7175578bc8a13f417c3daf00",
          "url": "https://github.com/timbrehifi/tokio/commit/c1ec469ad2af883b001d54e81dad426c01f918cd"
        },
        "date": 1607752068784,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13908,
            "range": "± 2721",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 908,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 542,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13297,
            "range": "± 2822",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 908,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sunjay@users.noreply.github.com",
            "name": "Sunjay Varma",
            "username": "sunjay"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df20c162ae1308c07073b6a67c8ba4202f52d208",
          "message": "sync: add blocking_recv method to UnboundedReceiver, similar to Receiver::blocking_recv (#3262)",
          "timestamp": "2020-12-12T08:47:35-08:00",
          "tree_id": "94fe5abd9735b0c4985d5b38a8d96c51953b0f0b",
          "url": "https://github.com/timbrehifi/tokio/commit/df20c162ae1308c07073b6a67c8ba4202f52d208"
        },
        "date": 1607793680066,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15046,
            "range": "± 4121",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1073,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 584,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15705,
            "range": "± 5706",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1004,
            "range": "± 178",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6172808+skerkour@users.noreply.github.com",
            "name": "Sylvain Kerkour",
            "username": "skerkour"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9149d7bfae251289cd21aa9ee109b4e2a190d0fa",
          "message": "docs: mention blocking thread timeout in src/lib.rs (#3253)",
          "timestamp": "2020-12-13T16:24:16+01:00",
          "tree_id": "38b69f17cc4644ac6ca081aa1d88d5cfe35825fa",
          "url": "https://github.com/timbrehifi/tokio/commit/9149d7bfae251289cd21aa9ee109b4e2a190d0fa"
        },
        "date": 1607876884585,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 21555,
            "range": "± 16032",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1116,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 701,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 22728,
            "range": "± 16674",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1144,
            "range": "± 719",
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
          "id": "3f29212cb7743462451293b65d4bb8b5b4973fc5",
          "message": "fs: use cfgs on fns instead of OS ext traits (#3264)\n\nInstead of using OS specific extension traits, OS specific methods are\r\nmoved onto the structs themselves and guarded with `cfg`. The API\r\ndocumentation should highlight the function is platform specific.\r\n\r\nCloses #2925",
          "timestamp": "2020-12-14T09:29:10-08:00",
          "tree_id": "a09b2ea3cce14487af2ace8030dd2ba6a3687cb5",
          "url": "https://github.com/timbrehifi/tokio/commit/3f29212cb7743462451293b65d4bb8b5b4973fc5"
        },
        "date": 1607971307484,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15603,
            "range": "± 5785",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1083,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 646,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15620,
            "range": "± 5174",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1084,
            "range": "± 54",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efa62013b551d5130791c3a79ce8ab5cb0b5abf",
          "message": "Move stream items into `tokio-stream` (#3277)\n\nThis change removes all references to `Stream` from\r\nwithin the `tokio` crate and moves them into a new\r\n`tokio-stream` crate. Most types have had their\r\n`impl Stream` removed as well in-favor of their\r\ninherent methods.\r\n\r\nCloses #2870",
          "timestamp": "2020-12-15T20:24:38-08:00",
          "tree_id": "6da8c41c8e1808bea98fd2d23ee1ec03a1cc7e80",
          "url": "https://github.com/timbrehifi/tokio/commit/8efa62013b551d5130791c3a79ce8ab5cb0b5abf"
        },
        "date": 1608105657693,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14478,
            "range": "± 4261",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1081,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 627,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14421,
            "range": "± 5564",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1081,
            "range": "± 208",
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
          "id": "d74d17307dd53215061c4a8a1f20a0e30461e296",
          "message": "time: remove `Box` from `Sleep` (#3278)\n\nRemoves the box from `Sleep`, taking advantage of intrusive wakers. The\r\n`Sleep` future is now `!Unpin`.\r\n\r\nCloses #3267",
          "timestamp": "2020-12-16T21:51:34-08:00",
          "tree_id": "0cdbf57e4a9b38302ddae0078eb5a1b9a4977aa2",
          "url": "https://github.com/timbrehifi/tokio/commit/d74d17307dd53215061c4a8a1f20a0e30461e296"
        },
        "date": 1608204704067,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13852,
            "range": "± 5434",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 968,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 497,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13482,
            "range": "± 4223",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 830,
            "range": "± 141",
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
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/timbrehifi/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608260553803,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13967,
            "range": "± 3441",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 905,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 572,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13978,
            "range": "± 3519",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 907,
            "range": "± 137",
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
          "distinct": false,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/timbrehifi/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608263062414,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15796,
            "range": "± 2653",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1101,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 646,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16014,
            "range": "± 4442",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1095,
            "range": "± 11",
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
          "id": "d948ccedfce534953a18acf46c8c6572103567c7",
          "message": "chore: fix stress test (#3297)",
          "timestamp": "2020-12-19T12:11:10+01:00",
          "tree_id": "3c417da4134a45bfff1f2d85b9b8cf410dfd9bf9",
          "url": "https://github.com/timbrehifi/tokio/commit/d948ccedfce534953a18acf46c8c6572103567c7"
        },
        "date": 1608384626762,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13255,
            "range": "± 2820",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 915,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 540,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13138,
            "range": "± 2238",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 917,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b99b00eb302ae6ff19ca97d32b1e594143f43a60",
          "message": "rt: change `max_threads` to `max_blocking_threads` (#3287)\n\nFixes #2802",
          "timestamp": "2020-12-19T08:04:04-08:00",
          "tree_id": "458d7fb55f921184a1056e766b6d0101fb763579",
          "url": "https://github.com/timbrehifi/tokio/commit/b99b00eb302ae6ff19ca97d32b1e594143f43a60"
        },
        "date": 1608395043438,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14790,
            "range": "± 3189",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1045,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 620,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14991,
            "range": "± 4559",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1047,
            "range": "± 153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flo.huebsch@pm.me",
            "name": "Florian Hübsch",
            "username": "fl9"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e41e6cddbba0cf13403924937ffe02aae6639e28",
          "message": "docs: tokio::main macro is also supported on rt (#3243)\n\nFixes: #3144\r\nRefs: #2225",
          "timestamp": "2020-12-19T19:12:08+01:00",
          "tree_id": "ee1af0c8a3b2ab9c9eaae05f2dca96ff966f42f9",
          "url": "https://github.com/timbrehifi/tokio/commit/e41e6cddbba0cf13403924937ffe02aae6639e28"
        },
        "date": 1608405446882,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14857,
            "range": "± 5087",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 922,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 527,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15536,
            "range": "± 5452",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 880,
            "range": "± 130",
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
          "id": "28933599888a88e601acbb11fa824b0ee9f98c6e",
          "message": "chore: update to `bytes` 1.0 git branch (#3301)\n\nUpdates the code base to track the `bytes` git branch. This is in\r\npreparation for the 1.0 release.\r\n\r\nCloses #3058",
          "timestamp": "2020-12-19T15:57:16-08:00",
          "tree_id": "2021ef3acf9407fcfa39032e0a493a81f1eb74cc",
          "url": "https://github.com/timbrehifi/tokio/commit/28933599888a88e601acbb11fa824b0ee9f98c6e"
        },
        "date": 1608426262837,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18154,
            "range": "± 5256",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1137,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 668,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17029,
            "range": "± 3528",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1133,
            "range": "± 95",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eee3ca65d6e5b4537915571f663f94184e616e6c",
          "message": "deps: update rand to 0.8, loom to 0.4 (#3307)",
          "timestamp": "2020-12-22T10:28:35+01:00",
          "tree_id": "2f534ebe6cb319f30f72e7a9b2b389825500f051",
          "url": "https://github.com/timbrehifi/tokio/commit/eee3ca65d6e5b4537915571f663f94184e616e6c"
        },
        "date": 1608636424805,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15911,
            "range": "± 5257",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1075,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 646,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16593,
            "range": "± 6782",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1083,
            "range": "± 58",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be9fdb697dd62e00ad3a9e492778c1b5af7cbf0b",
          "message": "time: make Interval::poll_tick() public (#3316)",
          "timestamp": "2020-12-22T12:31:14-08:00",
          "tree_id": "c06c2c6a1618d8dd177cd844f8f816f06e6033b8",
          "url": "https://github.com/timbrehifi/tokio/commit/be9fdb697dd62e00ad3a9e492778c1b5af7cbf0b"
        },
        "date": 1608677565576,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15624,
            "range": "± 3751",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1090,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 646,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15786,
            "range": "± 4368",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1098,
            "range": "± 21",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luke.steensen@gmail.com",
            "name": "Luke Steensen",
            "username": "lukesteensen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8dda19da4e94acd45f34b5eb359b4cffafa833f",
          "message": "chore: update to released `bytes` 1.0 (#3317)",
          "timestamp": "2020-12-22T17:09:26-08:00",
          "tree_id": "c177db0f9bced11086bcb13be4ac2348e6c94469",
          "url": "https://github.com/timbrehifi/tokio/commit/a8dda19da4e94acd45f34b5eb359b4cffafa833f"
        },
        "date": 1608687275827,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13170,
            "range": "± 2111",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 923,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 537,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13788,
            "range": "± 1910",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 814,
            "range": "± 4",
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
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/timbrehifi/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608708097680,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18214,
            "range": "± 9461",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1015,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 645,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 18803,
            "range": "± 7288",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1028,
            "range": "± 143",
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
          "id": "a66017f04985f5e7b7cb981e370e78a7291a5537",
          "message": "chore: prepare Tokio 1.0 release (#3319)",
          "timestamp": "2020-12-23T09:26:14-08:00",
          "tree_id": "a874909774c2fcbed6073262e4b2b789fbcb1b60",
          "url": "https://github.com/timbrehifi/tokio/commit/a66017f04985f5e7b7cb981e370e78a7291a5537"
        },
        "date": 1608749714666,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15770,
            "range": "± 5337",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1099,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 634,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15243,
            "range": "± 3842",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1042,
            "range": "± 101",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lnicola@users.noreply.github.com",
            "name": "Laurențiu Nicola",
            "username": "lnicola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eefbc250ad49d9086bdb2b8be4404bd445f63fb",
          "message": "docs: remove stream feature from docs (#3335)",
          "timestamp": "2020-12-24T23:17:18+09:00",
          "tree_id": "f3657463c2d44548e4d71f8454ce672ffeb0b45f",
          "url": "https://github.com/timbrehifi/tokio/commit/1eefbc250ad49d9086bdb2b8be4404bd445f63fb"
        },
        "date": 1608822499232,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15782,
            "range": "± 5488",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1091,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 644,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15963,
            "range": "± 6600",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1093,
            "range": "± 186",
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
          "id": "2330edc875ed8b873b6ffc4686feef1534658f79",
          "message": "chore: prepare tokio 1.0.1 release (#3347)",
          "timestamp": "2020-12-25T22:20:05+01:00",
          "tree_id": "9666ca615c4f2bf81a5c7a311ce0e3b3e7e30047",
          "url": "https://github.com/timbrehifi/tokio/commit/2330edc875ed8b873b6ffc4686feef1534658f79"
        },
        "date": 1608936889496,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16226,
            "range": "± 4769",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1091,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 646,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16585,
            "range": "± 5065",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1089,
            "range": "± 59",
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
          "id": "4d7b73f5b3aaf6ce305f4cdc9fdb087242636f75",
          "message": "chore: create stream_ext module (#3342)",
          "timestamp": "2020-12-26T17:05:51+01:00",
          "tree_id": "e3c07a0526d49a41be65cc756c2bb96667a56667",
          "url": "https://github.com/timbrehifi/tokio/commit/4d7b73f5b3aaf6ce305f4cdc9fdb087242636f75"
        },
        "date": 1609010371002,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15748,
            "range": "± 5018",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1100,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 650,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15844,
            "range": "± 3770",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1097,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "770044caa70465fbe5d2851a8d9a0bc0e5e7429a",
          "message": "chore: replace deprecated compare_and_swap with compare_exchange (#3331)",
          "timestamp": "2020-12-27T10:44:21+01:00",
          "tree_id": "369bb6894ddb442e95e915a873daac756c79a81f",
          "url": "https://github.com/timbrehifi/tokio/commit/770044caa70465fbe5d2851a8d9a0bc0e5e7429a"
        },
        "date": 1609072910636,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15560,
            "range": "± 4825",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1100,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 647,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15487,
            "range": "± 3981",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1094,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arniu2006@163.com",
            "name": "Arniu Tseng",
            "username": "arniu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbd4f4472e307186ac7bdf2a8f0ddb9b00a4a47c",
          "message": "docs: update CHANGELOG.md (#3336)",
          "timestamp": "2020-12-27T16:36:36+01:00",
          "tree_id": "7757ceeb4ded53ab5045248937bf1cec28335619",
          "url": "https://github.com/timbrehifi/tokio/commit/cbd4f4472e307186ac7bdf2a8f0ddb9b00a4a47c"
        },
        "date": 1609104634032,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 27889,
            "range": "± 24480",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1107,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 657,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 29260,
            "range": "± 22801",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1142,
            "range": "± 342",
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
        "date": 1607720893592,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 158398,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 607954,
            "range": "± 23175",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4521509,
            "range": "± 644908",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18650236,
            "range": "± 2525074",
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
          "id": "c1ec469ad2af883b001d54e81dad426c01f918cd",
          "message": "util: add constructors to TokioContext (#3221)",
          "timestamp": "2020-12-11T20:41:22-08:00",
          "tree_id": "cdb1273c1a4eea6c7175578bc8a13f417c3daf00",
          "url": "https://github.com/timbrehifi/tokio/commit/c1ec469ad2af883b001d54e81dad426c01f918cd"
        },
        "date": 1607752087269,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 157717,
            "range": "± 3108",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 621166,
            "range": "± 28003",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5025147,
            "range": "± 1023409",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18909808,
            "range": "± 2725182",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sunjay@users.noreply.github.com",
            "name": "Sunjay Varma",
            "username": "sunjay"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df20c162ae1308c07073b6a67c8ba4202f52d208",
          "message": "sync: add blocking_recv method to UnboundedReceiver, similar to Receiver::blocking_recv (#3262)",
          "timestamp": "2020-12-12T08:47:35-08:00",
          "tree_id": "94fe5abd9735b0c4985d5b38a8d96c51953b0f0b",
          "url": "https://github.com/timbrehifi/tokio/commit/df20c162ae1308c07073b6a67c8ba4202f52d208"
        },
        "date": 1607793657712,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 156794,
            "range": "± 34070",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 610276,
            "range": "± 91952",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4584315,
            "range": "± 908378",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17310668,
            "range": "± 2570129",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6172808+skerkour@users.noreply.github.com",
            "name": "Sylvain Kerkour",
            "username": "skerkour"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9149d7bfae251289cd21aa9ee109b4e2a190d0fa",
          "message": "docs: mention blocking thread timeout in src/lib.rs (#3253)",
          "timestamp": "2020-12-13T16:24:16+01:00",
          "tree_id": "38b69f17cc4644ac6ca081aa1d88d5cfe35825fa",
          "url": "https://github.com/timbrehifi/tokio/commit/9149d7bfae251289cd21aa9ee109b4e2a190d0fa"
        },
        "date": 1607876887874,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 183209,
            "range": "± 30652",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 733484,
            "range": "± 235534",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4921969,
            "range": "± 1183661",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19270987,
            "range": "± 2865353",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efa62013b551d5130791c3a79ce8ab5cb0b5abf",
          "message": "Move stream items into `tokio-stream` (#3277)\n\nThis change removes all references to `Stream` from\r\nwithin the `tokio` crate and moves them into a new\r\n`tokio-stream` crate. Most types have had their\r\n`impl Stream` removed as well in-favor of their\r\ninherent methods.\r\n\r\nCloses #2870",
          "timestamp": "2020-12-15T20:24:38-08:00",
          "tree_id": "6da8c41c8e1808bea98fd2d23ee1ec03a1cc7e80",
          "url": "https://github.com/timbrehifi/tokio/commit/8efa62013b551d5130791c3a79ce8ab5cb0b5abf"
        },
        "date": 1608105673195,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 174576,
            "range": "± 37270",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 675188,
            "range": "± 100589",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4771849,
            "range": "± 1296364",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19155031,
            "range": "± 2573866",
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
          "id": "d74d17307dd53215061c4a8a1f20a0e30461e296",
          "message": "time: remove `Box` from `Sleep` (#3278)\n\nRemoves the box from `Sleep`, taking advantage of intrusive wakers. The\r\n`Sleep` future is now `!Unpin`.\r\n\r\nCloses #3267",
          "timestamp": "2020-12-16T21:51:34-08:00",
          "tree_id": "0cdbf57e4a9b38302ddae0078eb5a1b9a4977aa2",
          "url": "https://github.com/timbrehifi/tokio/commit/d74d17307dd53215061c4a8a1f20a0e30461e296"
        },
        "date": 1608204741642,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 193750,
            "range": "± 45650",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 697685,
            "range": "± 51050",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5332827,
            "range": "± 495656",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20114738,
            "range": "± 3377812",
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
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/timbrehifi/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608260563410,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 159363,
            "range": "± 6752",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 619259,
            "range": "± 26378",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4492843,
            "range": "± 734857",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18240403,
            "range": "± 2328470",
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
          "distinct": false,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/timbrehifi/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608263063718,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 159739,
            "range": "± 5243",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 620072,
            "range": "± 41021",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4704254,
            "range": "± 814895",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17756880,
            "range": "± 2258006",
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
          "id": "d948ccedfce534953a18acf46c8c6572103567c7",
          "message": "chore: fix stress test (#3297)",
          "timestamp": "2020-12-19T12:11:10+01:00",
          "tree_id": "3c417da4134a45bfff1f2d85b9b8cf410dfd9bf9",
          "url": "https://github.com/timbrehifi/tokio/commit/d948ccedfce534953a18acf46c8c6572103567c7"
        },
        "date": 1608384658453,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 177429,
            "range": "± 14005",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 682142,
            "range": "± 44872",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5188141,
            "range": "± 498979",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20093285,
            "range": "± 4431997",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b99b00eb302ae6ff19ca97d32b1e594143f43a60",
          "message": "rt: change `max_threads` to `max_blocking_threads` (#3287)\n\nFixes #2802",
          "timestamp": "2020-12-19T08:04:04-08:00",
          "tree_id": "458d7fb55f921184a1056e766b6d0101fb763579",
          "url": "https://github.com/timbrehifi/tokio/commit/b99b00eb302ae6ff19ca97d32b1e594143f43a60"
        },
        "date": 1608395061118,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 203740,
            "range": "± 68038",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 724054,
            "range": "± 119002",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4990383,
            "range": "± 1609285",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20741465,
            "range": "± 3159819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flo.huebsch@pm.me",
            "name": "Florian Hübsch",
            "username": "fl9"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e41e6cddbba0cf13403924937ffe02aae6639e28",
          "message": "docs: tokio::main macro is also supported on rt (#3243)\n\nFixes: #3144\r\nRefs: #2225",
          "timestamp": "2020-12-19T19:12:08+01:00",
          "tree_id": "ee1af0c8a3b2ab9c9eaae05f2dca96ff966f42f9",
          "url": "https://github.com/timbrehifi/tokio/commit/e41e6cddbba0cf13403924937ffe02aae6639e28"
        },
        "date": 1608405450556,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 192788,
            "range": "± 26651",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 717293,
            "range": "± 37712",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5495273,
            "range": "± 982061",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21188035,
            "range": "± 2641521",
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
          "id": "28933599888a88e601acbb11fa824b0ee9f98c6e",
          "message": "chore: update to `bytes` 1.0 git branch (#3301)\n\nUpdates the code base to track the `bytes` git branch. This is in\r\npreparation for the 1.0 release.\r\n\r\nCloses #3058",
          "timestamp": "2020-12-19T15:57:16-08:00",
          "tree_id": "2021ef3acf9407fcfa39032e0a493a81f1eb74cc",
          "url": "https://github.com/timbrehifi/tokio/commit/28933599888a88e601acbb11fa824b0ee9f98c6e"
        },
        "date": 1608426245517,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 175750,
            "range": "± 21185",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 673811,
            "range": "± 80450",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5240472,
            "range": "± 504608",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19478280,
            "range": "± 3096057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eee3ca65d6e5b4537915571f663f94184e616e6c",
          "message": "deps: update rand to 0.8, loom to 0.4 (#3307)",
          "timestamp": "2020-12-22T10:28:35+01:00",
          "tree_id": "2f534ebe6cb319f30f72e7a9b2b389825500f051",
          "url": "https://github.com/timbrehifi/tokio/commit/eee3ca65d6e5b4537915571f663f94184e616e6c"
        },
        "date": 1608636429200,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 184051,
            "range": "± 19745",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 685922,
            "range": "± 46923",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5241773,
            "range": "± 309337",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20014944,
            "range": "± 2997707",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be9fdb697dd62e00ad3a9e492778c1b5af7cbf0b",
          "message": "time: make Interval::poll_tick() public (#3316)",
          "timestamp": "2020-12-22T12:31:14-08:00",
          "tree_id": "c06c2c6a1618d8dd177cd844f8f816f06e6033b8",
          "url": "https://github.com/timbrehifi/tokio/commit/be9fdb697dd62e00ad3a9e492778c1b5af7cbf0b"
        },
        "date": 1608677577045,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182694,
            "range": "± 18857",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 705496,
            "range": "± 43482",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5174989,
            "range": "± 615554",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20173171,
            "range": "± 2766687",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luke.steensen@gmail.com",
            "name": "Luke Steensen",
            "username": "lukesteensen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8dda19da4e94acd45f34b5eb359b4cffafa833f",
          "message": "chore: update to released `bytes` 1.0 (#3317)",
          "timestamp": "2020-12-22T17:09:26-08:00",
          "tree_id": "c177db0f9bced11086bcb13be4ac2348e6c94469",
          "url": "https://github.com/timbrehifi/tokio/commit/a8dda19da4e94acd45f34b5eb359b4cffafa833f"
        },
        "date": 1608687296617,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199068,
            "range": "± 29275",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 736309,
            "range": "± 109271",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5905118,
            "range": "± 1059667",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20926561,
            "range": "± 3168513",
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
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/timbrehifi/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608708096021,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199035,
            "range": "± 118527",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 741321,
            "range": "± 200416",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5786043,
            "range": "± 1686606",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20820906,
            "range": "± 2393672",
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
          "id": "a66017f04985f5e7b7cb981e370e78a7291a5537",
          "message": "chore: prepare Tokio 1.0 release (#3319)",
          "timestamp": "2020-12-23T09:26:14-08:00",
          "tree_id": "a874909774c2fcbed6073262e4b2b789fbcb1b60",
          "url": "https://github.com/timbrehifi/tokio/commit/a66017f04985f5e7b7cb981e370e78a7291a5537"
        },
        "date": 1608749715362,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 156220,
            "range": "± 7861",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 620308,
            "range": "± 14576",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4529133,
            "range": "± 358147",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18044006,
            "range": "± 2472639",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lnicola@users.noreply.github.com",
            "name": "Laurențiu Nicola",
            "username": "lnicola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eefbc250ad49d9086bdb2b8be4404bd445f63fb",
          "message": "docs: remove stream feature from docs (#3335)",
          "timestamp": "2020-12-24T23:17:18+09:00",
          "tree_id": "f3657463c2d44548e4d71f8454ce672ffeb0b45f",
          "url": "https://github.com/timbrehifi/tokio/commit/1eefbc250ad49d9086bdb2b8be4404bd445f63fb"
        },
        "date": 1608822482897,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 186888,
            "range": "± 7062",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 722291,
            "range": "± 34901",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5361390,
            "range": "± 600972",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21195859,
            "range": "± 2784934",
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
          "id": "2330edc875ed8b873b6ffc4686feef1534658f79",
          "message": "chore: prepare tokio 1.0.1 release (#3347)",
          "timestamp": "2020-12-25T22:20:05+01:00",
          "tree_id": "9666ca615c4f2bf81a5c7a311ce0e3b3e7e30047",
          "url": "https://github.com/timbrehifi/tokio/commit/2330edc875ed8b873b6ffc4686feef1534658f79"
        },
        "date": 1608936892101,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 200710,
            "range": "± 34691",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 765611,
            "range": "± 148362",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5443961,
            "range": "± 436450",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21882171,
            "range": "± 2735245",
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
          "id": "4d7b73f5b3aaf6ce305f4cdc9fdb087242636f75",
          "message": "chore: create stream_ext module (#3342)",
          "timestamp": "2020-12-26T17:05:51+01:00",
          "tree_id": "e3c07a0526d49a41be65cc756c2bb96667a56667",
          "url": "https://github.com/timbrehifi/tokio/commit/4d7b73f5b3aaf6ce305f4cdc9fdb087242636f75"
        },
        "date": 1609010374122,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 156288,
            "range": "± 3768",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 598030,
            "range": "± 17974",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4596289,
            "range": "± 498808",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18738653,
            "range": "± 2123029",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "770044caa70465fbe5d2851a8d9a0bc0e5e7429a",
          "message": "chore: replace deprecated compare_and_swap with compare_exchange (#3331)",
          "timestamp": "2020-12-27T10:44:21+01:00",
          "tree_id": "369bb6894ddb442e95e915a873daac756c79a81f",
          "url": "https://github.com/timbrehifi/tokio/commit/770044caa70465fbe5d2851a8d9a0bc0e5e7429a"
        },
        "date": 1609072976192,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199031,
            "range": "± 50362",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 745953,
            "range": "± 142380",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5377342,
            "range": "± 836224",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21413179,
            "range": "± 2957673",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arniu2006@163.com",
            "name": "Arniu Tseng",
            "username": "arniu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbd4f4472e307186ac7bdf2a8f0ddb9b00a4a47c",
          "message": "docs: update CHANGELOG.md (#3336)",
          "timestamp": "2020-12-27T16:36:36+01:00",
          "tree_id": "7757ceeb4ded53ab5045248937bf1cec28335619",
          "url": "https://github.com/timbrehifi/tokio/commit/cbd4f4472e307186ac7bdf2a8f0ddb9b00a4a47c"
        },
        "date": 1609104641022,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 173773,
            "range": "± 44764",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 663590,
            "range": "± 80380",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4909976,
            "range": "± 1166589",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18384707,
            "range": "± 2299599",
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
          "id": "c1ec469ad2af883b001d54e81dad426c01f918cd",
          "message": "util: add constructors to TokioContext (#3221)",
          "timestamp": "2020-12-11T20:41:22-08:00",
          "tree_id": "cdb1273c1a4eea6c7175578bc8a13f417c3daf00",
          "url": "https://github.com/timbrehifi/tokio/commit/c1ec469ad2af883b001d54e81dad426c01f918cd"
        },
        "date": 1607752066144,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 841,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12937,
            "range": "± 2616",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 866,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13289,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 492,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sunjay@users.noreply.github.com",
            "name": "Sunjay Varma",
            "username": "sunjay"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df20c162ae1308c07073b6a67c8ba4202f52d208",
          "message": "sync: add blocking_recv method to UnboundedReceiver, similar to Receiver::blocking_recv (#3262)",
          "timestamp": "2020-12-12T08:47:35-08:00",
          "tree_id": "94fe5abd9735b0c4985d5b38a8d96c51953b0f0b",
          "url": "https://github.com/timbrehifi/tokio/commit/df20c162ae1308c07073b6a67c8ba4202f52d208"
        },
        "date": 1607793683096,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 988,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14110,
            "range": "± 3858",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1040,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13747,
            "range": "± 3197",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 590,
            "range": "± 45",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6172808+skerkour@users.noreply.github.com",
            "name": "Sylvain Kerkour",
            "username": "skerkour"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9149d7bfae251289cd21aa9ee109b4e2a190d0fa",
          "message": "docs: mention blocking thread timeout in src/lib.rs (#3253)",
          "timestamp": "2020-12-13T16:24:16+01:00",
          "tree_id": "38b69f17cc4644ac6ca081aa1d88d5cfe35825fa",
          "url": "https://github.com/timbrehifi/tokio/commit/9149d7bfae251289cd21aa9ee109b4e2a190d0fa"
        },
        "date": 1607876881760,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 982,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15736,
            "range": "± 5250",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1038,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15309,
            "range": "± 5377",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 623,
            "range": "± 61",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efa62013b551d5130791c3a79ce8ab5cb0b5abf",
          "message": "Move stream items into `tokio-stream` (#3277)\n\nThis change removes all references to `Stream` from\r\nwithin the `tokio` crate and moves them into a new\r\n`tokio-stream` crate. Most types have had their\r\n`impl Stream` removed as well in-favor of their\r\ninherent methods.\r\n\r\nCloses #2870",
          "timestamp": "2020-12-15T20:24:38-08:00",
          "tree_id": "6da8c41c8e1808bea98fd2d23ee1ec03a1cc7e80",
          "url": "https://github.com/timbrehifi/tokio/commit/8efa62013b551d5130791c3a79ce8ab5cb0b5abf"
        },
        "date": 1608105679772,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1015,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14176,
            "range": "± 2847",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1060,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14295,
            "range": "± 4023",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 586,
            "range": "± 14",
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
          "id": "d74d17307dd53215061c4a8a1f20a0e30461e296",
          "message": "time: remove `Box` from `Sleep` (#3278)\n\nRemoves the box from `Sleep`, taking advantage of intrusive wakers. The\r\n`Sleep` future is now `!Unpin`.\r\n\r\nCloses #3267",
          "timestamp": "2020-12-16T21:51:34-08:00",
          "tree_id": "0cdbf57e4a9b38302ddae0078eb5a1b9a4977aa2",
          "url": "https://github.com/timbrehifi/tokio/commit/d74d17307dd53215061c4a8a1f20a0e30461e296"
        },
        "date": 1608204704897,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1027,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15663,
            "range": "± 4186",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1050,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17335,
            "range": "± 5892",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 598,
            "range": "± 226",
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
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/timbrehifi/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608260540676,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1020,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14876,
            "range": "± 5103",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1046,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14873,
            "range": "± 3862",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 592,
            "range": "± 19",
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
          "distinct": false,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/timbrehifi/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608263055947,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 933,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14669,
            "range": "± 4721",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 969,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14802,
            "range": "± 3828",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 551,
            "range": "± 72",
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
          "id": "d948ccedfce534953a18acf46c8c6572103567c7",
          "message": "chore: fix stress test (#3297)",
          "timestamp": "2020-12-19T12:11:10+01:00",
          "tree_id": "3c417da4134a45bfff1f2d85b9b8cf410dfd9bf9",
          "url": "https://github.com/timbrehifi/tokio/commit/d948ccedfce534953a18acf46c8c6572103567c7"
        },
        "date": 1608384631076,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 779,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13877,
            "range": "± 5130",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 799,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13875,
            "range": "± 3618",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 478,
            "range": "± 98",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b99b00eb302ae6ff19ca97d32b1e594143f43a60",
          "message": "rt: change `max_threads` to `max_blocking_threads` (#3287)\n\nFixes #2802",
          "timestamp": "2020-12-19T08:04:04-08:00",
          "tree_id": "458d7fb55f921184a1056e766b6d0101fb763579",
          "url": "https://github.com/timbrehifi/tokio/commit/b99b00eb302ae6ff19ca97d32b1e594143f43a60"
        },
        "date": 1608395058153,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1064,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15278,
            "range": "± 3794",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1039,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16119,
            "range": "± 4867",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 598,
            "range": "± 142",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flo.huebsch@pm.me",
            "name": "Florian Hübsch",
            "username": "fl9"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e41e6cddbba0cf13403924937ffe02aae6639e28",
          "message": "docs: tokio::main macro is also supported on rt (#3243)\n\nFixes: #3144\r\nRefs: #2225",
          "timestamp": "2020-12-19T19:12:08+01:00",
          "tree_id": "ee1af0c8a3b2ab9c9eaae05f2dca96ff966f42f9",
          "url": "https://github.com/timbrehifi/tokio/commit/e41e6cddbba0cf13403924937ffe02aae6639e28"
        },
        "date": 1608405454105,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 983,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14541,
            "range": "± 4766",
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
            "value": 14552,
            "range": "± 2836",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 577,
            "range": "± 35",
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
          "id": "28933599888a88e601acbb11fa824b0ee9f98c6e",
          "message": "chore: update to `bytes` 1.0 git branch (#3301)\n\nUpdates the code base to track the `bytes` git branch. This is in\r\npreparation for the 1.0 release.\r\n\r\nCloses #3058",
          "timestamp": "2020-12-19T15:57:16-08:00",
          "tree_id": "2021ef3acf9407fcfa39032e0a493a81f1eb74cc",
          "url": "https://github.com/timbrehifi/tokio/commit/28933599888a88e601acbb11fa824b0ee9f98c6e"
        },
        "date": 1608426237893,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1039,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15894,
            "range": "± 3988",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1087,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16422,
            "range": "± 12564",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 591,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eee3ca65d6e5b4537915571f663f94184e616e6c",
          "message": "deps: update rand to 0.8, loom to 0.4 (#3307)",
          "timestamp": "2020-12-22T10:28:35+01:00",
          "tree_id": "2f534ebe6cb319f30f72e7a9b2b389825500f051",
          "url": "https://github.com/timbrehifi/tokio/commit/eee3ca65d6e5b4537915571f663f94184e616e6c"
        },
        "date": 1608636418830,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1008,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15015,
            "range": "± 4384",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1044,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14518,
            "range": "± 3921",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 594,
            "range": "± 126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be9fdb697dd62e00ad3a9e492778c1b5af7cbf0b",
          "message": "time: make Interval::poll_tick() public (#3316)",
          "timestamp": "2020-12-22T12:31:14-08:00",
          "tree_id": "c06c2c6a1618d8dd177cd844f8f816f06e6033b8",
          "url": "https://github.com/timbrehifi/tokio/commit/be9fdb697dd62e00ad3a9e492778c1b5af7cbf0b"
        },
        "date": 1608677558537,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 842,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13266,
            "range": "± 3351",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 868,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13262,
            "range": "± 2386",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 492,
            "range": "± 14",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luke.steensen@gmail.com",
            "name": "Luke Steensen",
            "username": "lukesteensen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8dda19da4e94acd45f34b5eb359b4cffafa833f",
          "message": "chore: update to released `bytes` 1.0 (#3317)",
          "timestamp": "2020-12-22T17:09:26-08:00",
          "tree_id": "c177db0f9bced11086bcb13be4ac2348e6c94469",
          "url": "https://github.com/timbrehifi/tokio/commit/a8dda19da4e94acd45f34b5eb359b4cffafa833f"
        },
        "date": 1608687304665,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 839,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12857,
            "range": "± 3146",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 865,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13125,
            "range": "± 1884",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 496,
            "range": "± 17",
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
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/timbrehifi/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608708093141,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1052,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 19914,
            "range": "± 11478",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1083,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 20777,
            "range": "± 11809",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 615,
            "range": "± 6",
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
          "id": "a66017f04985f5e7b7cb981e370e78a7291a5537",
          "message": "chore: prepare Tokio 1.0 release (#3319)",
          "timestamp": "2020-12-23T09:26:14-08:00",
          "tree_id": "a874909774c2fcbed6073262e4b2b789fbcb1b60",
          "url": "https://github.com/timbrehifi/tokio/commit/a66017f04985f5e7b7cb981e370e78a7291a5537"
        },
        "date": 1608749714793,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1011,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15171,
            "range": "± 3882",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1042,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14924,
            "range": "± 3993",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 33",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lnicola@users.noreply.github.com",
            "name": "Laurențiu Nicola",
            "username": "lnicola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eefbc250ad49d9086bdb2b8be4404bd445f63fb",
          "message": "docs: remove stream feature from docs (#3335)",
          "timestamp": "2020-12-24T23:17:18+09:00",
          "tree_id": "f3657463c2d44548e4d71f8454ce672ffeb0b45f",
          "url": "https://github.com/timbrehifi/tokio/commit/1eefbc250ad49d9086bdb2b8be4404bd445f63fb"
        },
        "date": 1608822492630,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1008,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16093,
            "range": "± 4991",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1022,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15007,
            "range": "± 5132",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 560,
            "range": "± 90",
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
          "id": "2330edc875ed8b873b6ffc4686feef1534658f79",
          "message": "chore: prepare tokio 1.0.1 release (#3347)",
          "timestamp": "2020-12-25T22:20:05+01:00",
          "tree_id": "9666ca615c4f2bf81a5c7a311ce0e3b3e7e30047",
          "url": "https://github.com/timbrehifi/tokio/commit/2330edc875ed8b873b6ffc4686feef1534658f79"
        },
        "date": 1608936882921,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1014,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16244,
            "range": "± 5487",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1059,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15918,
            "range": "± 4886",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 599,
            "range": "± 93",
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
          "id": "4d7b73f5b3aaf6ce305f4cdc9fdb087242636f75",
          "message": "chore: create stream_ext module (#3342)",
          "timestamp": "2020-12-26T17:05:51+01:00",
          "tree_id": "e3c07a0526d49a41be65cc756c2bb96667a56667",
          "url": "https://github.com/timbrehifi/tokio/commit/4d7b73f5b3aaf6ce305f4cdc9fdb087242636f75"
        },
        "date": 1609010379679,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 946,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17020,
            "range": "± 5014",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1060,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16906,
            "range": "± 5451",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 552,
            "range": "± 94",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "770044caa70465fbe5d2851a8d9a0bc0e5e7429a",
          "message": "chore: replace deprecated compare_and_swap with compare_exchange (#3331)",
          "timestamp": "2020-12-27T10:44:21+01:00",
          "tree_id": "369bb6894ddb442e95e915a873daac756c79a81f",
          "url": "https://github.com/timbrehifi/tokio/commit/770044caa70465fbe5d2851a8d9a0bc0e5e7429a"
        },
        "date": 1609072919760,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1022,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15732,
            "range": "± 4842",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1040,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15764,
            "range": "± 8022",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 572,
            "range": "± 84",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arniu2006@163.com",
            "name": "Arniu Tseng",
            "username": "arniu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbd4f4472e307186ac7bdf2a8f0ddb9b00a4a47c",
          "message": "docs: update CHANGELOG.md (#3336)",
          "timestamp": "2020-12-27T16:36:36+01:00",
          "tree_id": "7757ceeb4ded53ab5045248937bf1cec28335619",
          "url": "https://github.com/timbrehifi/tokio/commit/cbd4f4472e307186ac7bdf2a8f0ddb9b00a4a47c"
        },
        "date": 1609104646336,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 983,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15715,
            "range": "± 4970",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1013,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16010,
            "range": "± 7555",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 570,
            "range": "± 59",
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
        "date": 1607720899253,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6321041,
            "range": "± 3302174",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5976163,
            "range": "± 1456621",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5559341,
            "range": "± 1667355",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 463,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 436,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 435,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 42783,
            "range": "± 11062",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 731,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 949979,
            "range": "± 2350",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 687405,
            "range": "± 1954",
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
          "id": "c1ec469ad2af883b001d54e81dad426c01f918cd",
          "message": "util: add constructors to TokioContext (#3221)",
          "timestamp": "2020-12-11T20:41:22-08:00",
          "tree_id": "cdb1273c1a4eea6c7175578bc8a13f417c3daf00",
          "url": "https://github.com/timbrehifi/tokio/commit/c1ec469ad2af883b001d54e81dad426c01f918cd"
        },
        "date": 1607752099042,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5927306,
            "range": "± 1905298",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5690105,
            "range": "± 1242855",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5368989,
            "range": "± 2126763",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 514,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 507,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 507,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45615,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 732,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 964221,
            "range": "± 1890",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 681220,
            "range": "± 1400",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sunjay@users.noreply.github.com",
            "name": "Sunjay Varma",
            "username": "sunjay"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df20c162ae1308c07073b6a67c8ba4202f52d208",
          "message": "sync: add blocking_recv method to UnboundedReceiver, similar to Receiver::blocking_recv (#3262)",
          "timestamp": "2020-12-12T08:47:35-08:00",
          "tree_id": "94fe5abd9735b0c4985d5b38a8d96c51953b0f0b",
          "url": "https://github.com/timbrehifi/tokio/commit/df20c162ae1308c07073b6a67c8ba4202f52d208"
        },
        "date": 1607793691638,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6881409,
            "range": "± 1974801",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6946012,
            "range": "± 1252480",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6374130,
            "range": "± 2359127",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 676,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 683,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 686,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52501,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 974,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1130061,
            "range": "± 200817",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 810835,
            "range": "± 11799",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6172808+skerkour@users.noreply.github.com",
            "name": "Sylvain Kerkour",
            "username": "skerkour"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9149d7bfae251289cd21aa9ee109b4e2a190d0fa",
          "message": "docs: mention blocking thread timeout in src/lib.rs (#3253)",
          "timestamp": "2020-12-13T16:24:16+01:00",
          "tree_id": "38b69f17cc4644ac6ca081aa1d88d5cfe35825fa",
          "url": "https://github.com/timbrehifi/tokio/commit/9149d7bfae251289cd21aa9ee109b4e2a190d0fa"
        },
        "date": 1607876895601,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6596532,
            "range": "± 1861124",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6608391,
            "range": "± 1533393",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6244584,
            "range": "± 2036099",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 647,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 653,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 654,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 40351,
            "range": "± 3257",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 868,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1092964,
            "range": "± 52034",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 808552,
            "range": "± 30476",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efa62013b551d5130791c3a79ce8ab5cb0b5abf",
          "message": "Move stream items into `tokio-stream` (#3277)\n\nThis change removes all references to `Stream` from\r\nwithin the `tokio` crate and moves them into a new\r\n`tokio-stream` crate. Most types have had their\r\n`impl Stream` removed as well in-favor of their\r\ninherent methods.\r\n\r\nCloses #2870",
          "timestamp": "2020-12-15T20:24:38-08:00",
          "tree_id": "6da8c41c8e1808bea98fd2d23ee1ec03a1cc7e80",
          "url": "https://github.com/timbrehifi/tokio/commit/8efa62013b551d5130791c3a79ce8ab5cb0b5abf"
        },
        "date": 1608105689647,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7204740,
            "range": "± 2165018",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7146302,
            "range": "± 1543952",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6662745,
            "range": "± 2380735",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 772,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 753,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 752,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85860,
            "range": "± 4218",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1501,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1190096,
            "range": "± 7935",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 860980,
            "range": "± 9250",
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
          "id": "d74d17307dd53215061c4a8a1f20a0e30461e296",
          "message": "time: remove `Box` from `Sleep` (#3278)\n\nRemoves the box from `Sleep`, taking advantage of intrusive wakers. The\r\n`Sleep` future is now `!Unpin`.\r\n\r\nCloses #3267",
          "timestamp": "2020-12-16T21:51:34-08:00",
          "tree_id": "0cdbf57e4a9b38302ddae0078eb5a1b9a4977aa2",
          "url": "https://github.com/timbrehifi/tokio/commit/d74d17307dd53215061c4a8a1f20a0e30461e296"
        },
        "date": 1608204764020,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7077747,
            "range": "± 2767613",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7083207,
            "range": "± 2661976",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6495216,
            "range": "± 3272605",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 824,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 865,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 854,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 146091,
            "range": "± 15140",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1593,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1110170,
            "range": "± 139919",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 775854,
            "range": "± 115050",
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
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/timbrehifi/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608260585207,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6827605,
            "range": "± 2297181",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6831669,
            "range": "± 1578553",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6505315,
            "range": "± 2138275",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 555,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 562,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 573,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85096,
            "range": "± 12417",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1455,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1055933,
            "range": "± 97818",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 784318,
            "range": "± 120864",
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
          "distinct": false,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/timbrehifi/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608263063279,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5660554,
            "range": "± 2020930",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5777471,
            "range": "± 1463606",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5259237,
            "range": "± 1981017",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 516,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 515,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 515,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 70908,
            "range": "± 4373",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1088,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 838725,
            "range": "± 5680",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 689223,
            "range": "± 27875",
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
          "id": "d948ccedfce534953a18acf46c8c6572103567c7",
          "message": "chore: fix stress test (#3297)",
          "timestamp": "2020-12-19T12:11:10+01:00",
          "tree_id": "3c417da4134a45bfff1f2d85b9b8cf410dfd9bf9",
          "url": "https://github.com/timbrehifi/tokio/commit/d948ccedfce534953a18acf46c8c6572103567c7"
        },
        "date": 1608384688450,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7150456,
            "range": "± 3175365",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6932132,
            "range": "± 2817613",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6802926,
            "range": "± 3337791",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 909,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 898,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 905,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 148557,
            "range": "± 15576",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 2006,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1162392,
            "range": "± 105269",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 810279,
            "range": "± 91396",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b99b00eb302ae6ff19ca97d32b1e594143f43a60",
          "message": "rt: change `max_threads` to `max_blocking_threads` (#3287)\n\nFixes #2802",
          "timestamp": "2020-12-19T08:04:04-08:00",
          "tree_id": "458d7fb55f921184a1056e766b6d0101fb763579",
          "url": "https://github.com/timbrehifi/tokio/commit/b99b00eb302ae6ff19ca97d32b1e594143f43a60"
        },
        "date": 1608395078343,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7173738,
            "range": "± 2596456",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6750089,
            "range": "± 1534867",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6465487,
            "range": "± 2213166",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 577,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 574,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 571,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 81044,
            "range": "± 4839",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1413,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1138859,
            "range": "± 30249",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 824804,
            "range": "± 38728",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flo.huebsch@pm.me",
            "name": "Florian Hübsch",
            "username": "fl9"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e41e6cddbba0cf13403924937ffe02aae6639e28",
          "message": "docs: tokio::main macro is also supported on rt (#3243)\n\nFixes: #3144\r\nRefs: #2225",
          "timestamp": "2020-12-19T19:12:08+01:00",
          "tree_id": "ee1af0c8a3b2ab9c9eaae05f2dca96ff966f42f9",
          "url": "https://github.com/timbrehifi/tokio/commit/e41e6cddbba0cf13403924937ffe02aae6639e28"
        },
        "date": 1608405460407,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6346577,
            "range": "± 2367813",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6518878,
            "range": "± 2714183",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6235361,
            "range": "± 2477772",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 636,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 628,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 655,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 79718,
            "range": "± 5554",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1336,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1100970,
            "range": "± 101711",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 778226,
            "range": "± 83570",
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
          "id": "28933599888a88e601acbb11fa824b0ee9f98c6e",
          "message": "chore: update to `bytes` 1.0 git branch (#3301)\n\nUpdates the code base to track the `bytes` git branch. This is in\r\npreparation for the 1.0 release.\r\n\r\nCloses #3058",
          "timestamp": "2020-12-19T15:57:16-08:00",
          "tree_id": "2021ef3acf9407fcfa39032e0a493a81f1eb74cc",
          "url": "https://github.com/timbrehifi/tokio/commit/28933599888a88e601acbb11fa824b0ee9f98c6e"
        },
        "date": 1608426272532,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7067157,
            "range": "± 2511190",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7222589,
            "range": "± 2042191",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6940362,
            "range": "± 2404148",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 749,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 743,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 734,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85683,
            "range": "± 14050",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1494,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1157351,
            "range": "± 125106",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 826175,
            "range": "± 227272",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eee3ca65d6e5b4537915571f663f94184e616e6c",
          "message": "deps: update rand to 0.8, loom to 0.4 (#3307)",
          "timestamp": "2020-12-22T10:28:35+01:00",
          "tree_id": "2f534ebe6cb319f30f72e7a9b2b389825500f051",
          "url": "https://github.com/timbrehifi/tokio/commit/eee3ca65d6e5b4537915571f663f94184e616e6c"
        },
        "date": 1608636449650,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6521961,
            "range": "± 2346510",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6256002,
            "range": "± 1670387",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5986419,
            "range": "± 2368302",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 616,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 622,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 618,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 72424,
            "range": "± 9429",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1289,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 959981,
            "range": "± 85541",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 691311,
            "range": "± 116112",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be9fdb697dd62e00ad3a9e492778c1b5af7cbf0b",
          "message": "time: make Interval::poll_tick() public (#3316)",
          "timestamp": "2020-12-22T12:31:14-08:00",
          "tree_id": "c06c2c6a1618d8dd177cd844f8f816f06e6033b8",
          "url": "https://github.com/timbrehifi/tokio/commit/be9fdb697dd62e00ad3a9e492778c1b5af7cbf0b"
        },
        "date": 1608677574212,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5995882,
            "range": "± 2511280",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5744604,
            "range": "± 1969602",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5535689,
            "range": "± 2055932",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 564,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 561,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 563,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 73580,
            "range": "± 4575",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1276,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 935014,
            "range": "± 1900",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 681205,
            "range": "± 11585",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luke.steensen@gmail.com",
            "name": "Luke Steensen",
            "username": "lukesteensen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8dda19da4e94acd45f34b5eb359b4cffafa833f",
          "message": "chore: update to released `bytes` 1.0 (#3317)",
          "timestamp": "2020-12-22T17:09:26-08:00",
          "tree_id": "c177db0f9bced11086bcb13be4ac2348e6c94469",
          "url": "https://github.com/timbrehifi/tokio/commit/a8dda19da4e94acd45f34b5eb359b4cffafa833f"
        },
        "date": 1608687313198,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6848322,
            "range": "± 2086695",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6826026,
            "range": "± 1495998",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6368341,
            "range": "± 2541918",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 615,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 590,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 610,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 82825,
            "range": "± 4641",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1447,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1145841,
            "range": "± 55282",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 823780,
            "range": "± 2189",
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
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/timbrehifi/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608708107828,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7064735,
            "range": "± 3238512",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6445545,
            "range": "± 1964447",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6044511,
            "range": "± 3779325",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 801,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 802,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 801,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 126784,
            "range": "± 10421",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1743,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1118910,
            "range": "± 129439",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 761152,
            "range": "± 124355",
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
          "id": "a66017f04985f5e7b7cb981e370e78a7291a5537",
          "message": "chore: prepare Tokio 1.0 release (#3319)",
          "timestamp": "2020-12-23T09:26:14-08:00",
          "tree_id": "a874909774c2fcbed6073262e4b2b789fbcb1b60",
          "url": "https://github.com/timbrehifi/tokio/commit/a66017f04985f5e7b7cb981e370e78a7291a5537"
        },
        "date": 1608749741865,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7716192,
            "range": "± 3391801",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7282053,
            "range": "± 1791796",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6827274,
            "range": "± 3456159",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 623,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 637,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 652,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85849,
            "range": "± 16529",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1495,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1177660,
            "range": "± 128549",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 837006,
            "range": "± 125098",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lnicola@users.noreply.github.com",
            "name": "Laurențiu Nicola",
            "username": "lnicola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eefbc250ad49d9086bdb2b8be4404bd445f63fb",
          "message": "docs: remove stream feature from docs (#3335)",
          "timestamp": "2020-12-24T23:17:18+09:00",
          "tree_id": "f3657463c2d44548e4d71f8454ce672ffeb0b45f",
          "url": "https://github.com/timbrehifi/tokio/commit/1eefbc250ad49d9086bdb2b8be4404bd445f63fb"
        },
        "date": 1608822529987,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6470128,
            "range": "± 2408959",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6479673,
            "range": "± 1298336",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6185612,
            "range": "± 1899916",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 625,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 608,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 616,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 78883,
            "range": "± 6918",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1300,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1045781,
            "range": "± 102455",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 769745,
            "range": "± 62926",
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
          "id": "2330edc875ed8b873b6ffc4686feef1534658f79",
          "message": "chore: prepare tokio 1.0.1 release (#3347)",
          "timestamp": "2020-12-25T22:20:05+01:00",
          "tree_id": "9666ca615c4f2bf81a5c7a311ce0e3b3e7e30047",
          "url": "https://github.com/timbrehifi/tokio/commit/2330edc875ed8b873b6ffc4686feef1534658f79"
        },
        "date": 1608936951636,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6789576,
            "range": "± 2508946",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6583306,
            "range": "± 1810444",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6360244,
            "range": "± 2620736",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 657,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 636,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 628,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 82131,
            "range": "± 13119",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1347,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1074377,
            "range": "± 52558",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 779990,
            "range": "± 71775",
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
          "id": "4d7b73f5b3aaf6ce305f4cdc9fdb087242636f75",
          "message": "chore: create stream_ext module (#3342)",
          "timestamp": "2020-12-26T17:05:51+01:00",
          "tree_id": "e3c07a0526d49a41be65cc756c2bb96667a56667",
          "url": "https://github.com/timbrehifi/tokio/commit/4d7b73f5b3aaf6ce305f4cdc9fdb087242636f75"
        },
        "date": 1609010387796,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5963359,
            "range": "± 2362083",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5894597,
            "range": "± 1770840",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5497047,
            "range": "± 2387934",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 566,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 477,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 489,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 75060,
            "range": "± 8222",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1175,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 916278,
            "range": "± 128595",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 665704,
            "range": "± 94952",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "770044caa70465fbe5d2851a8d9a0bc0e5e7429a",
          "message": "chore: replace deprecated compare_and_swap with compare_exchange (#3331)",
          "timestamp": "2020-12-27T10:44:21+01:00",
          "tree_id": "369bb6894ddb442e95e915a873daac756c79a81f",
          "url": "https://github.com/timbrehifi/tokio/commit/770044caa70465fbe5d2851a8d9a0bc0e5e7429a"
        },
        "date": 1609072906683,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5955637,
            "range": "± 1967593",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5771121,
            "range": "± 1303054",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5637145,
            "range": "± 1876410",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 517,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 518,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 518,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 73485,
            "range": "± 4930",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1287,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 955748,
            "range": "± 4557",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 688635,
            "range": "± 1544",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arniu2006@163.com",
            "name": "Arniu Tseng",
            "username": "arniu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbd4f4472e307186ac7bdf2a8f0ddb9b00a4a47c",
          "message": "docs: update CHANGELOG.md (#3336)",
          "timestamp": "2020-12-27T16:36:36+01:00",
          "tree_id": "7757ceeb4ded53ab5045248937bf1cec28335619",
          "url": "https://github.com/timbrehifi/tokio/commit/cbd4f4472e307186ac7bdf2a8f0ddb9b00a4a47c"
        },
        "date": 1609104668914,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7130972,
            "range": "± 2051062",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6678788,
            "range": "± 1650007",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5992127,
            "range": "± 2840803",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 713,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 713,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 711,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 84137,
            "range": "± 4132",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1500,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1134286,
            "range": "± 3058",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 828673,
            "range": "± 111213",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}