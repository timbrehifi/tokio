window.BENCHMARK_DATA = {
  "lastUpdate": 1605330139262,
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
      }
    ]
  }
}