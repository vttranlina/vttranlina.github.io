var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "142518",
        "ok": "128735",
        "ko": "13783"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "16426",
        "ok": "16426",
        "ko": "15389"
    },
    "meanResponseTime": {
        "total": "927",
        "ok": "947",
        "ko": "749"
    },
    "standardDeviation": {
        "total": "1658",
        "ok": "1679",
        "ko": "1434"
    },
    "percentiles1": {
        "total": "42",
        "ok": "51",
        "ko": "5"
    },
    "percentiles2": {
        "total": "1259",
        "ok": "1295",
        "ko": "1038"
    },
    "percentiles3": {
        "total": "4393",
        "ok": "4459",
        "ko": "3788"
    },
    "percentiles4": {
        "total": "7635",
        "ok": "7748",
        "ko": "6381"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 88218,
    "percentage": 62
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6923,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 33594,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 13783,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "116.531",
        "ok": "105.262",
        "ko": "11.27"
    }
},
contents: {
"group_initialconnecti-ff2ca": {
          type: "GROUP",
name: "initialConnection",
path: "initialConnection",
pathFormatted: "group_initialconnecti-ff2ca",
stats: {
    "name": "initialConnection",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2306",
        "ko": "694"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles4": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 852,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 85,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1369,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 694,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.453",
        "ok": "1.886",
        "ko": "0.567"
    }
},
contents: {
"req_connect-49ab2": {
        type: "REQUEST",
        name: "Connect",
path: "initialConnection / Connect",
pathFormatted: "req_initialconnecti-8991d",
stats: {
    "name": "Connect",
    "numberOfRequests": {
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "420",
        "ok": "420",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles1": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles2": {
        "total": "27",
        "ok": "27",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "percentiles4": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3000,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.453",
        "ok": "2.453",
        "ko": "-"
    }
}
    },"req_capability-9a06c": {
        type: "REQUEST",
        name: "capability",
path: "initialConnection / capability",
pathFormatted: "req_initialconnecti-cb7e1",
stats: {
    "name": "capability",
    "numberOfRequests": {
        "total": "5624",
        "ok": "5624",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1252",
        "ok": "1252",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5620,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.599",
        "ok": "4.599",
        "ko": "-"
    }
}
    },"req_login-d56b6": {
        type: "REQUEST",
        name: "login",
path: "initialConnection / login",
pathFormatted: "req_initialconnecti-d613e",
stats: {
    "name": "login",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2624",
        "ko": "376"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "6",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "6829",
        "ok": "6829",
        "ko": "737"
    },
    "meanResponseTime": {
        "total": "666",
        "ok": "758",
        "ko": "20"
    },
    "standardDeviation": {
        "total": "913",
        "ok": "940",
        "ko": "78"
    },
    "percentiles1": {
        "total": "421",
        "ok": "611",
        "ko": "8"
    },
    "percentiles2": {
        "total": "947",
        "ok": "1045",
        "ko": "10"
    },
    "percentiles3": {
        "total": "2425",
        "ok": "2555",
        "ko": "16"
    },
    "percentiles4": {
        "total": "4788",
        "ok": "4946",
        "ko": "487"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1635,
    "percentage": 55
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 468,
    "percentage": 16
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 521,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 376,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.453",
        "ok": "2.146",
        "ko": "0.307"
    }
}
    },"req_enableutf8-30a24": {
        type: "REQUEST",
        name: "enableUTF8",
path: "initialConnection / enableUTF8",
pathFormatted: "req_initialconnecti-29bf1",
stats: {
    "name": "enableUTF8",
    "numberOfRequests": {
        "total": "2624",
        "ok": "2624",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "469",
        "ok": "469",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2624,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.146",
        "ok": "2.146",
        "ko": "-"
    }
}
    },"req_namespace-89801": {
        type: "REQUEST",
        name: "namespace",
path: "initialConnection / namespace",
pathFormatted: "req_initialconnecti-8e726",
stats: {
    "name": "namespace",
    "numberOfRequests": {
        "total": "2624",
        "ok": "2624",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2624,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.146",
        "ok": "2.146",
        "ko": "-"
    }
}
    },"req_list-10ae9": {
        type: "REQUEST",
        name: "list",
path: "initialConnection / list",
pathFormatted: "req_initialconnecti-80653",
stats: {
    "name": "list",
    "numberOfRequests": {
        "total": "2624",
        "ok": "2555",
        "ko": "69"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "35",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "6774",
        "ok": "6774",
        "ko": "72"
    },
    "meanResponseTime": {
        "total": "645",
        "ok": "663",
        "ko": "8"
    },
    "standardDeviation": {
        "total": "788",
        "ok": "791",
        "ko": "15"
    },
    "percentiles1": {
        "total": "515",
        "ok": "550",
        "ko": "4"
    },
    "percentiles2": {
        "total": "934",
        "ok": "949",
        "ko": "5"
    },
    "percentiles3": {
        "total": "1883",
        "ok": "1903",
        "ko": "51"
    },
    "percentiles4": {
        "total": "3676",
        "ok": "3738",
        "ko": "68"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1665,
    "percentage": 63
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 491,
    "percentage": 19
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 399,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 69,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.146",
        "ok": "2.089",
        "ko": "0.056"
    }
}
    },"req_lsub-df309": {
        type: "REQUEST",
        name: "lsub",
path: "initialConnection / lsub",
pathFormatted: "req_initialconnecti-f9589",
stats: {
    "name": "lsub",
    "numberOfRequests": {
        "total": "2624",
        "ok": "2568",
        "ko": "56"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "32",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "6765",
        "ok": "6765",
        "ko": "285"
    },
    "meanResponseTime": {
        "total": "658",
        "ok": "672",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "776",
        "ok": "779",
        "ko": "38"
    },
    "percentiles1": {
        "total": "523",
        "ok": "551",
        "ko": "4"
    },
    "percentiles2": {
        "total": "946",
        "ok": "956",
        "ko": "6"
    },
    "percentiles3": {
        "total": "2011",
        "ok": "2033",
        "ko": "13"
    },
    "percentiles4": {
        "total": "3435",
        "ok": "3491",
        "ko": "154"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1646,
    "percentage": 63
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 505,
    "percentage": 19
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 417,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 56,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.146",
        "ok": "2.1",
        "ko": "0.046"
    }
}
    },"req_myrights-a2168": {
        type: "REQUEST",
        name: "myrights",
path: "initialConnection / myrights",
pathFormatted: "req_initialconnecti-fe75b",
stats: {
    "name": "myrights",
    "numberOfRequests": {
        "total": "2624",
        "ok": "2559",
        "ko": "65"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "3",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "6758",
        "ok": "6758",
        "ko": "351"
    },
    "meanResponseTime": {
        "total": "630",
        "ok": "646",
        "ko": "15"
    },
    "standardDeviation": {
        "total": "813",
        "ok": "818",
        "ko": "52"
    },
    "percentiles1": {
        "total": "496",
        "ok": "525",
        "ko": "3"
    },
    "percentiles2": {
        "total": "901",
        "ok": "912",
        "ko": "4"
    },
    "percentiles3": {
        "total": "2099",
        "ok": "2120",
        "ko": "62"
    },
    "percentiles4": {
        "total": "3852",
        "ok": "3865",
        "ko": "256"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1727,
    "percentage": 66
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 451,
    "percentage": 17
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 381,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 65,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.146",
        "ok": "2.092",
        "ko": "0.053"
    }
}
    },"req_select-99938": {
        type: "REQUEST",
        name: "select",
path: "initialConnection / select",
pathFormatted: "req_initialconnecti-887d8",
stats: {
    "name": "select",
    "numberOfRequests": {
        "total": "2624",
        "ok": "2393",
        "ko": "231"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "32",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "16426",
        "ok": "16426",
        "ko": "15389"
    },
    "meanResponseTime": {
        "total": "4110",
        "ok": "4072",
        "ko": "4509"
    },
    "standardDeviation": {
        "total": "3986",
        "ok": "4016",
        "ko": "3638"
    },
    "percentiles1": {
        "total": "3554",
        "ok": "3437",
        "ko": "4403"
    },
    "percentiles2": {
        "total": "7157",
        "ok": "7170",
        "ko": "7087"
    },
    "percentiles3": {
        "total": "11004",
        "ok": "11007",
        "ko": "10930"
    },
    "percentiles4": {
        "total": "12950",
        "ok": "12925",
        "ko": "13608"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 999,
    "percentage": 38
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 59,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1335,
    "percentage": 51
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 231,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.146",
        "ok": "1.957",
        "ko": "0.189"
    }
}
    },"req_flagresync-176a1": {
        type: "REQUEST",
        name: "flagResync",
path: "initialConnection / flagResync",
pathFormatted: "req_initialconnecti-889c7",
stats: {
    "name": "flagResync",
    "numberOfRequests": {
        "total": "2306",
        "ok": "2306",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6846",
        "ok": "6846",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "557",
        "ok": "557",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "794",
        "ok": "794",
        "ko": "-"
    },
    "percentiles1": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles2": {
        "total": "834",
        "ok": "834",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1894",
        "ok": "1894",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3754",
        "ok": "3754",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1682,
    "percentage": 73
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 338,
    "percentage": 15
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 286,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.886",
        "ok": "1.886",
        "ko": "-"
    }
}
    }
}

     },"group_coreactions-ac74d": {
          type: "GROUP",
name: "coreActions",
path: "coreActions",
pathFormatted: "group_coreactions-ac74d",
stats: {
    "name": "coreActions",
    "numberOfRequests": {
        "total": "108694",
        "ok": "95722",
        "ko": "12972"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles4": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 61046,
    "percentage": 56
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4517,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 30159,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 12972,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "88.875",
        "ok": "78.268",
        "ko": "10.607"
    }
},
contents: {
"req_status-9acb4": {
        type: "REQUEST",
        name: "status",
path: "coreActions / status",
pathFormatted: "req_coreactions---s-55afd",
stats: {
    "name": "status",
    "numberOfRequests": {
        "total": "32176",
        "ok": "26748",
        "ko": "5428"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "6",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "9862",
        "ok": "9862",
        "ko": "7676"
    },
    "meanResponseTime": {
        "total": "1356",
        "ok": "1483",
        "ko": "730"
    },
    "standardDeviation": {
        "total": "1657",
        "ok": "1707",
        "ko": "1201"
    },
    "percentiles1": {
        "total": "631",
        "ok": "802",
        "ko": "5"
    },
    "percentiles2": {
        "total": "2400",
        "ok": "2588",
        "ko": "1160"
    },
    "percentiles3": {
        "total": "4555",
        "ok": "4733",
        "ko": "3168"
    },
    "percentiles4": {
        "total": "6966",
        "ok": "7073",
        "ko": "5160"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13367,
    "percentage": 42
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1516,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 11865,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5428,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.309",
        "ok": "21.871",
        "ko": "4.438"
    }
}
    },"req_idle-ec2f9": {
        type: "REQUEST",
        name: "idle",
path: "coreActions / idle",
pathFormatted: "req_coreactions---i-8ed8c",
stats: {
    "name": "idle",
    "numberOfRequests": {
        "total": "16346",
        "ok": "16346",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 16346,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.365",
        "ok": "13.365",
        "ko": "-"
    }
}
    },"req_noop-5483b": {
        type: "REQUEST",
        name: "noop",
path: "coreActions / noop",
pathFormatted: "req_coreactions---n-a06eb",
stats: {
    "name": "noop",
    "numberOfRequests": {
        "total": "8711",
        "ok": "8711",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles4": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8701,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.123",
        "ok": "7.123",
        "ko": "-"
    }
}
    },"req_fetchbody-ea022": {
        type: "REQUEST",
        name: "fetchBody",
path: "coreActions / fetchBody",
pathFormatted: "req_coreactions---f-ad361",
stats: {
    "name": "fetchBody",
    "numberOfRequests": {
        "total": "9755",
        "ok": "8602",
        "ko": "1153"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "19",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "8405",
        "ok": "8405",
        "ko": "6790"
    },
    "meanResponseTime": {
        "total": "1103",
        "ok": "1214",
        "ko": "271"
    },
    "standardDeviation": {
        "total": "1343",
        "ok": "1358",
        "ko": "846"
    },
    "percentiles1": {
        "total": "549",
        "ok": "799",
        "ko": "4"
    },
    "percentiles2": {
        "total": "1782",
        "ok": "1880",
        "ko": "5"
    },
    "percentiles3": {
        "total": "3759",
        "ok": "3883",
        "ko": "1894"
    },
    "percentiles4": {
        "total": "6174",
        "ok": "6315",
        "ko": "4951"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4300,
    "percentage": 44
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 632,
    "percentage": 6
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3670,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1153,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.976",
        "ok": "7.034",
        "ko": "0.943"
    }
}
    },"req_unselect-223f2": {
        type: "REQUEST",
        name: "unselect",
path: "coreActions / unselect",
pathFormatted: "req_coreactions---u-2070f",
stats: {
    "name": "unselect",
    "numberOfRequests": {
        "total": "1050",
        "ok": "1050",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1050",
        "ok": "1050",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles4": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1049,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.859",
        "ok": "0.859",
        "ko": "-"
    }
}
    },"req_select-99938": {
        type: "REQUEST",
        name: "select",
path: "coreActions / select",
pathFormatted: "req_coreactions---s-5dc03",
stats: {
    "name": "select",
    "numberOfRequests": {
        "total": "3254",
        "ok": "2696",
        "ko": "558"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "12",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "16310",
        "ok": "16310",
        "ko": "13036"
    },
    "meanResponseTime": {
        "total": "2516",
        "ok": "2780",
        "ko": "1241"
    },
    "standardDeviation": {
        "total": "3035",
        "ok": "3125",
        "ko": "2136"
    },
    "percentiles1": {
        "total": "992",
        "ok": "1428",
        "ko": "5"
    },
    "percentiles2": {
        "total": "4615",
        "ok": "4947",
        "ko": "1520"
    },
    "percentiles3": {
        "total": "8575",
        "ok": "8802",
        "ko": "6159"
    },
    "percentiles4": {
        "total": "11387",
        "ok": "11500",
        "ko": "8682"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1174,
    "percentage": 36
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 129,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1393,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 558,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.661",
        "ok": "2.204",
        "ko": "0.456"
    }
}
    },"req_append-9516d": {
        type: "REQUEST",
        name: "append",
path: "coreActions / append",
pathFormatted: "req_coreactions---a-5160c",
stats: {
    "name": "append",
    "numberOfRequests": {
        "total": "8740",
        "ok": "7089",
        "ko": "1651"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "76",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "15146",
        "ok": "15146",
        "ko": "7575"
    },
    "meanResponseTime": {
        "total": "2277",
        "ok": "2531",
        "ko": "1190"
    },
    "standardDeviation": {
        "total": "2564",
        "ok": "2672",
        "ko": "1637"
    },
    "percentiles1": {
        "total": "1081",
        "ok": "1304",
        "ko": "33"
    },
    "percentiles2": {
        "total": "4059",
        "ok": "4526",
        "ko": "1912"
    },
    "percentiles3": {
        "total": "7305",
        "ok": "7693",
        "ko": "4861"
    },
    "percentiles4": {
        "total": "10007",
        "ok": "10316",
        "ko": "6427"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3066,
    "percentage": 35
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 386,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3637,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1651,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.146",
        "ok": "5.796",
        "ko": "1.35"
    }
}
    },"req_getquotaroot-a1942": {
        type: "REQUEST",
        name: "getQuotaRoot",
path: "coreActions / getQuotaRoot",
pathFormatted: "req_coreactions---g-d3a26",
stats: {
    "name": "getQuotaRoot",
    "numberOfRequests": {
        "total": "9955",
        "ok": "8092",
        "ko": "1863"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "7",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "8425",
        "ok": "8425",
        "ko": "6781"
    },
    "meanResponseTime": {
        "total": "955",
        "ok": "972",
        "ko": "878"
    },
    "standardDeviation": {
        "total": "1172",
        "ok": "1151",
        "ko": "1255"
    },
    "percentiles1": {
        "total": "518",
        "ok": "571",
        "ko": "7"
    },
    "percentiles2": {
        "total": "1581",
        "ok": "1607",
        "ko": "1344"
    },
    "percentiles3": {
        "total": "3159",
        "ok": "3087",
        "ko": "3470"
    },
    "percentiles4": {
        "total": "5072",
        "ok": "4895",
        "ko": "5256"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4508,
    "percentage": 45
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 619,
    "percentage": 6
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2965,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1863,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.14",
        "ok": "6.617",
        "ko": "1.523"
    }
}
    },"req_fetchheaders-67bc5": {
        type: "REQUEST",
        name: "fetchHeaders",
path: "coreActions / fetchHeaders",
pathFormatted: "req_coreactions---f-f0afd",
stats: {
    "name": "fetchHeaders",
    "numberOfRequests": {
        "total": "9944",
        "ok": "8739",
        "ko": "1205"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "5",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "8431",
        "ok": "8431",
        "ko": "6487"
    },
    "meanResponseTime": {
        "total": "1016",
        "ok": "1122",
        "ko": "249"
    },
    "standardDeviation": {
        "total": "1275",
        "ok": "1297",
        "ko": "738"
    },
    "percentiles1": {
        "total": "484",
        "ok": "719",
        "ko": "4"
    },
    "percentiles2": {
        "total": "1701",
        "ok": "1797",
        "ko": "5"
    },
    "percentiles3": {
        "total": "3509",
        "ok": "3655",
        "ko": "1860"
    },
    "percentiles4": {
        "total": "5838",
        "ok": "5961",
        "ko": "3720"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4517,
    "percentage": 45
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 620,
    "percentage": 6
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3602,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1205,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.131",
        "ok": "7.146",
        "ko": "0.985"
    }
}
    },"req_searchunseen-ab046": {
        type: "REQUEST",
        name: "searchUnseen",
path: "coreActions / searchUnseen",
pathFormatted: "req_coreactions---s-095e1",
stats: {
    "name": "searchUnseen",
    "numberOfRequests": {
        "total": "2223",
        "ok": "1938",
        "ko": "285"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "5",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "7918",
        "ok": "7918",
        "ko": "6490"
    },
    "meanResponseTime": {
        "total": "1013",
        "ok": "1105",
        "ko": "383"
    },
    "standardDeviation": {
        "total": "1289",
        "ok": "1297",
        "ko": "1041"
    },
    "percentiles1": {
        "total": "467",
        "ok": "658",
        "ko": "4"
    },
    "percentiles2": {
        "total": "1690",
        "ok": "1781",
        "ko": "6"
    },
    "percentiles3": {
        "total": "3603",
        "ok": "3712",
        "ko": "2632"
    },
    "percentiles4": {
        "total": "5735",
        "ok": "5753",
        "ko": "5064"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1028,
    "percentage": 46
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 130,
    "percentage": 6
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 780,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 285,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.818",
        "ok": "1.585",
        "ko": "0.233"
    }
}
    },"req_searchdeleted-37283": {
        type: "REQUEST",
        name: "searchDeleted",
path: "coreActions / searchDeleted",
pathFormatted: "req_coreactions---s-bddb2",
stats: {
    "name": "searchDeleted",
    "numberOfRequests": {
        "total": "2097",
        "ok": "1846",
        "ko": "251"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "5",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "8171",
        "ok": "8171",
        "ko": "3902"
    },
    "meanResponseTime": {
        "total": "1044",
        "ok": "1149",
        "ko": "265"
    },
    "standardDeviation": {
        "total": "1317",
        "ok": "1347",
        "ko": "679"
    },
    "percentiles1": {
        "total": "530",
        "ok": "741",
        "ko": "4"
    },
    "percentiles2": {
        "total": "1690",
        "ok": "1779",
        "ko": "6"
    },
    "percentiles3": {
        "total": "3704",
        "ok": "3802",
        "ko": "1950"
    },
    "percentiles4": {
        "total": "6210",
        "ok": "6350",
        "ko": "3153"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 950,
    "percentage": 45
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 148,
    "percentage": 7
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 748,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 251,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.715",
        "ok": "1.509",
        "ko": "0.205"
    }
}
    },"req_check-0ba44": {
        type: "REQUEST",
        name: "check",
path: "coreActions / check",
pathFormatted: "req_coreactions---c-7c9f1",
stats: {
    "name": "check",
    "numberOfRequests": {
        "total": "1097",
        "ok": "1097",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "816",
        "ok": "816",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles4": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1096,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.897",
        "ok": "0.897",
        "ko": "-"
    }
}
    },"req_list-10ae9": {
        type: "REQUEST",
        name: "list",
path: "coreActions / list",
pathFormatted: "req_coreactions---l-6c42a",
stats: {
    "name": "list",
    "numberOfRequests": {
        "total": "1074",
        "ok": "947",
        "ko": "127"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "35",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "6792",
        "ok": "6792",
        "ko": "843"
    },
    "meanResponseTime": {
        "total": "583",
        "ok": "658",
        "ko": "20"
    },
    "standardDeviation": {
        "total": "850",
        "ok": "877",
        "ko": "105"
    },
    "percentiles1": {
        "total": "249",
        "ok": "389",
        "ko": "5"
    },
    "percentiles2": {
        "total": "835",
        "ok": "903",
        "ko": "5"
    },
    "percentiles3": {
        "total": "2030",
        "ok": "2215",
        "ko": "19"
    },
    "percentiles4": {
        "total": "4622",
        "ok": "4883",
        "ko": "673"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 654,
    "percentage": 61
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 150,
    "percentage": 14
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 143,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 127,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.878",
        "ok": "0.774",
        "ko": "0.104"
    }
}
    },"req_expunge-b8edd": {
        type: "REQUEST",
        name: "expunge",
path: "coreActions / expunge",
pathFormatted: "req_coreactions---e-8f385",
stats: {
    "name": "expunge",
    "numberOfRequests": {
        "total": "1149",
        "ok": "1015",
        "ko": "134"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "5",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "7635",
        "ok": "7635",
        "ko": "4928"
    },
    "meanResponseTime": {
        "total": "1039",
        "ok": "1159",
        "ko": "136"
    },
    "standardDeviation": {
        "total": "1337",
        "ok": "1364",
        "ko": "548"
    },
    "percentiles1": {
        "total": "483",
        "ok": "761",
        "ko": "4"
    },
    "percentiles2": {
        "total": "1723",
        "ok": "1846",
        "ko": "5"
    },
    "percentiles3": {
        "total": "3590",
        "ok": "3679",
        "ko": "1062"
    },
    "percentiles4": {
        "total": "6319",
        "ok": "6645",
        "ko": "1954"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 514,
    "percentage": 45
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 89,
    "percentage": 8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 412,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 134,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.939",
        "ok": "0.83",
        "ko": "0.11"
    }
}
    },"req_store-8cd89": {
        type: "REQUEST",
        name: "store",
path: "coreActions / store",
pathFormatted: "req_coreactions---s-743bf",
stats: {
    "name": "store",
    "numberOfRequests": {
        "total": "2173",
        "ok": "1856",
        "ko": "317"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "10",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "13080",
        "ok": "13080",
        "ko": "9324"
    },
    "meanResponseTime": {
        "total": "1849",
        "ok": "2056",
        "ko": "637"
    },
    "standardDeviation": {
        "total": "2182",
        "ok": "2208",
        "ko": "1542"
    },
    "percentiles1": {
        "total": "800",
        "ok": "1246",
        "ko": "4"
    },
    "percentiles2": {
        "total": "3349",
        "ok": "3519",
        "ko": "11"
    },
    "percentiles3": {
        "total": "6171",
        "ok": "6290",
        "ko": "3881"
    },
    "percentiles4": {
        "total": "8577",
        "ok": "8697",
        "ko": "7088"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 826,
    "percentage": 38
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 89,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 941,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 317,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.777",
        "ok": "1.518",
        "ko": "0.259"
    }
}
    }
}

     },"group_closeconnection-b7d0a": {
          type: "GROUP",
name: "closeConnection",
path: "closeConnection",
pathFormatted: "group_closeconnection-b7d0a",
stats: {
    "name": "closeConnection",
    "numberOfRequests": {
        "total": "1550",
        "ok": "1536",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles4": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1353,
    "percentage": 87
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 85,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 98,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 14,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.267",
        "ok": "1.256",
        "ko": "0.011"
    }
},
contents: {
"req_close-716f6": {
        type: "REQUEST",
        name: "close",
path: "closeConnection / close",
pathFormatted: "req_closeconnection-0eed1",
stats: {
    "name": "close",
    "numberOfRequests": {
        "total": "1550",
        "ok": "1536",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "4",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "3922",
        "ok": "3922",
        "ko": "2784"
    },
    "meanResponseTime": {
        "total": "282",
        "ok": "278",
        "ko": "712"
    },
    "standardDeviation": {
        "total": "533",
        "ok": "528",
        "ko": "874"
    },
    "percentiles1": {
        "total": "14",
        "ok": "14",
        "ko": "384"
    },
    "percentiles2": {
        "total": "348",
        "ok": "341",
        "ko": "823"
    },
    "percentiles3": {
        "total": "1322",
        "ok": "1310",
        "ko": "2693"
    },
    "percentiles4": {
        "total": "2908",
        "ok": "2933",
        "ko": "2766"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1353,
    "percentage": 87
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 86,
    "percentage": 6
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 97,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 14,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.267",
        "ok": "1.256",
        "ko": "0.011"
    }
}
    },"req_logout-4236a": {
        type: "REQUEST",
        name: "logout",
path: "closeConnection / logout",
pathFormatted: "req_closeconnection-485db",
stats: {
    "name": "logout",
    "numberOfRequests": {
        "total": "1550",
        "ok": "1550",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "855",
        "ok": "855",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1547,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.267",
        "ok": "1.267",
        "ko": "-"
    }
}
    }
}

     }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
