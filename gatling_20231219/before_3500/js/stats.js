var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "273718",
        "ok": "243466",
        "ko": "30252"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59430",
        "ok": "59430",
        "ko": "38529"
    },
    "meanResponseTime": {
        "total": "1060",
        "ok": "671",
        "ko": "4197"
    },
    "standardDeviation": {
        "total": "2375",
        "ok": "2108",
        "ko": "2050"
    },
    "percentiles1": {
        "total": "17",
        "ok": "8",
        "ko": "4146"
    },
    "percentiles2": {
        "total": "614",
        "ok": "62",
        "ko": "5178"
    },
    "percentiles3": {
        "total": "5460",
        "ok": "4494",
        "ko": "7431"
    },
    "percentiles4": {
        "total": "9038",
        "ok": "8455",
        "ko": "9323"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 205881,
    "percentage": 75
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2381,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 35204,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 30252,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "113.482",
        "ok": "100.939",
        "ko": "12.542"
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
        "total": "3500",
        "ok": "2319",
        "ko": "1181"
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
    "count": 1964,
    "percentage": 56
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 344,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1181,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.451",
        "ok": "0.961",
        "ko": "0.49"
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
        "total": "3500",
        "ok": "3500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5022",
        "ok": "5022",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "percentiles1": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles2": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "percentiles3": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1083",
        "ok": "1083",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3458,
    "percentage": 99
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 10,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 32,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.451",
        "ok": "1.451",
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
        "total": "6218",
        "ok": "6218",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9436",
        "ok": "9436",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1187",
        "ok": "1187",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1990",
        "ok": "1990",
        "ko": "-"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1987",
        "ok": "1987",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5399",
        "ok": "5399",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7373",
        "ok": "7373",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4243,
    "percentage": 68
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 82,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1893,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.578",
        "ok": "2.578",
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
        "total": "3500",
        "ok": "2718",
        "ko": "782"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "264"
    },
    "maxResponseTime": {
        "total": "37242",
        "ok": "37242",
        "ko": "9496"
    },
    "meanResponseTime": {
        "total": "1765",
        "ok": "1028",
        "ko": "4325"
    },
    "standardDeviation": {
        "total": "2957",
        "ok": "2826",
        "ko": "1713"
    },
    "percentiles1": {
        "total": "26",
        "ok": "6",
        "ko": "4260"
    },
    "percentiles2": {
        "total": "3208",
        "ok": "317",
        "ko": "5242"
    },
    "percentiles3": {
        "total": "7073",
        "ok": "5372",
        "ko": "7314"
    },
    "percentiles4": {
        "total": "12026",
        "ok": "14056",
        "ko": "8689"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2110,
    "percentage": 60
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 29,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 579,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 782,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.451",
        "ok": "1.127",
        "ko": "0.324"
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
        "total": "2718",
        "ok": "2718",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8621",
        "ok": "8621",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1307",
        "ok": "1307",
        "ko": "-"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles2": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3670",
        "ok": "3670",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6306",
        "ok": "6306",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2197,
    "percentage": 81
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 39,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 482,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.127",
        "ok": "1.127",
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
        "total": "2718",
        "ok": "2718",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7586",
        "ok": "7586",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "548",
        "ok": "548",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1312",
        "ok": "1312",
        "ko": "-"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles2": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4029",
        "ok": "4029",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5921",
        "ok": "5921",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2230,
    "percentage": 82
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 52,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 436,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.127",
        "ok": "1.127",
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
        "total": "2718",
        "ok": "2469",
        "ko": "249"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "4",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "29292",
        "ok": "29292",
        "ko": "8912"
    },
    "meanResponseTime": {
        "total": "665",
        "ok": "378",
        "ko": "3507"
    },
    "standardDeviation": {
        "total": "1830",
        "ok": "1534",
        "ko": "2078"
    },
    "percentiles1": {
        "total": "6",
        "ok": "5",
        "ko": "3489"
    },
    "percentiles2": {
        "total": "140",
        "ok": "20",
        "ko": "4810"
    },
    "percentiles3": {
        "total": "4061",
        "ok": "2229",
        "ko": "7192"
    },
    "percentiles4": {
        "total": "7192",
        "ok": "5833",
        "ko": "8873"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2228,
    "percentage": 82
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 230,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 249,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.127",
        "ok": "1.024",
        "ko": "0.103"
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
        "total": "2718",
        "ok": "2463",
        "ko": "255"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "15560",
        "ok": "15560",
        "ko": "9432"
    },
    "meanResponseTime": {
        "total": "646",
        "ok": "343",
        "ko": "3571"
    },
    "standardDeviation": {
        "total": "1693",
        "ok": "1343",
        "ko": "1925"
    },
    "percentiles1": {
        "total": "1",
        "ok": "1",
        "ko": "3411"
    },
    "percentiles2": {
        "total": "127",
        "ok": "16",
        "ko": "4894"
    },
    "percentiles3": {
        "total": "4531",
        "ok": "2033",
        "ko": "7195"
    },
    "percentiles4": {
        "total": "7841",
        "ok": "7351",
        "ko": "8244"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2250,
    "percentage": 83
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 10,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 203,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 255,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.127",
        "ok": "1.021",
        "ko": "0.106"
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
        "total": "2718",
        "ok": "2434",
        "ko": "284"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "24753",
        "ok": "24753",
        "ko": "9145"
    },
    "meanResponseTime": {
        "total": "595",
        "ok": "231",
        "ko": "3711"
    },
    "standardDeviation": {
        "total": "1564",
        "ok": "1010",
        "ko": "1953"
    },
    "percentiles1": {
        "total": "1",
        "ok": "1",
        "ko": "3949"
    },
    "percentiles2": {
        "total": "104",
        "ok": "28",
        "ko": "4997"
    },
    "percentiles3": {
        "total": "4356",
        "ok": "1468",
        "ko": "7167"
    },
    "percentiles4": {
        "total": "6622",
        "ok": "4756",
        "ko": "8828"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2282,
    "percentage": 84
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 145,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 284,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.127",
        "ok": "1.009",
        "ko": "0.118"
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
        "total": "2718",
        "ok": "2458",
        "ko": "260"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "40010",
        "ok": "40010",
        "ko": "9163"
    },
    "meanResponseTime": {
        "total": "841",
        "ok": "550",
        "ko": "3592"
    },
    "standardDeviation": {
        "total": "2434",
        "ok": "2276",
        "ko": "2140"
    },
    "percentiles1": {
        "total": "5",
        "ok": "3",
        "ko": "3884"
    },
    "percentiles2": {
        "total": "313",
        "ok": "98",
        "ko": "4985"
    },
    "percentiles3": {
        "total": "5196",
        "ok": "2853",
        "ko": "7275"
    },
    "percentiles4": {
        "total": "8635",
        "ok": "8456",
        "ko": "8663"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2194,
    "percentage": 81
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 58,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 206,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 260,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.127",
        "ok": "1.019",
        "ko": "0.108"
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
        "total": "2319",
        "ok": "2319",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5417",
        "ok": "5417",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "439",
        "ok": "439",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles3": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2760",
        "ok": "2760",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2259,
    "percentage": 97
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 54,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.961",
        "ok": "0.961",
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
        "total": "238751",
        "ok": "210351",
        "ko": "28400"
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
    "count": 177947,
    "percentage": 75
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2033,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 30371,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 28400,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.985",
        "ok": "87.21",
        "ko": "11.774"
    }
},
contents: {
"req_idle-ec2f9": {
        type: "REQUEST",
        name: "idle",
path: "coreActions / idle",
pathFormatted: "req_coreactions---i-8ed8c",
stats: {
    "name": "idle",
    "numberOfRequests": {
        "total": "11924",
        "ok": "11924",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3929",
        "ok": "3929",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles2": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 11911,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.944",
        "ok": "4.944",
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
        "total": "21467",
        "ok": "18529",
        "ko": "2938"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "33895",
        "ok": "33895",
        "ko": "12871"
    },
    "meanResponseTime": {
        "total": "1095",
        "ok": "613",
        "ko": "4138"
    },
    "standardDeviation": {
        "total": "2221",
        "ok": "1863",
        "ko": "1846"
    },
    "percentiles1": {
        "total": "16",
        "ok": "8",
        "ko": "4132"
    },
    "percentiles2": {
        "total": "1166",
        "ok": "50",
        "ko": "5152"
    },
    "percentiles3": {
        "total": "5525",
        "ok": "4387",
        "ko": "7379"
    },
    "percentiles4": {
        "total": "8355",
        "ok": "7371",
        "ko": "9145"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 15805,
    "percentage": 74
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 149,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2575,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2938,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.9",
        "ok": "7.682",
        "ko": "1.218"
    }
}
    },"req_status-9acb4": {
        type: "REQUEST",
        name: "status",
path: "coreActions / status",
pathFormatted: "req_coreactions---s-55afd",
stats: {
    "name": "status",
    "numberOfRequests": {
        "total": "47747",
        "ok": "41281",
        "ko": "6466"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "39539",
        "ok": "39539",
        "ko": "26402"
    },
    "meanResponseTime": {
        "total": "1164",
        "ok": "688",
        "ko": "4205"
    },
    "standardDeviation": {
        "total": "2473",
        "ok": "2186",
        "ko": "1992"
    },
    "percentiles1": {
        "total": "18",
        "ok": "7",
        "ko": "4155"
    },
    "percentiles2": {
        "total": "1208",
        "ok": "58",
        "ko": "5176"
    },
    "percentiles3": {
        "total": "5720",
        "ok": "4594",
        "ko": "7434"
    },
    "percentiles4": {
        "total": "9939",
        "ok": "10419",
        "ko": "9348"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 35026,
    "percentage": 73
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 425,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5830,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6466,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.796",
        "ok": "17.115",
        "ko": "2.681"
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
        "total": "21585",
        "ok": "18600",
        "ko": "2985"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38901",
        "ok": "38901",
        "ko": "10774"
    },
    "meanResponseTime": {
        "total": "1030",
        "ok": "532",
        "ko": "4136"
    },
    "standardDeviation": {
        "total": "2080",
        "ok": "1646",
        "ko": "1792"
    },
    "percentiles1": {
        "total": "8",
        "ok": "3",
        "ko": "4144"
    },
    "percentiles2": {
        "total": "1070",
        "ok": "33",
        "ko": "5115"
    },
    "percentiles3": {
        "total": "5332",
        "ok": "3889",
        "ko": "7305"
    },
    "percentiles4": {
        "total": "7687",
        "ok": "6749",
        "ko": "9106"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 15935,
    "percentage": 74
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 185,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2480,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2985,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.949",
        "ok": "7.711",
        "ko": "1.238"
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
        "total": "19395",
        "ok": "19395",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10438",
        "ok": "10438",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "965",
        "ok": "965",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1853",
        "ok": "1853",
        "ko": "-"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1105",
        "ok": "1105",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5223",
        "ok": "5223",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7245",
        "ok": "7245",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 14357,
    "percentage": 74
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 269,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4769,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.041",
        "ok": "8.041",
        "ko": "-"
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
        "total": "21489",
        "ok": "18541",
        "ko": "2948"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "39252",
        "ok": "39252",
        "ko": "21916"
    },
    "meanResponseTime": {
        "total": "1080",
        "ok": "585",
        "ko": "4189"
    },
    "standardDeviation": {
        "total": "2238",
        "ok": "1846",
        "ko": "1971"
    },
    "percentiles1": {
        "total": "14",
        "ok": "5",
        "ko": "4156"
    },
    "percentiles2": {
        "total": "1059",
        "ok": "44",
        "ko": "5169"
    },
    "percentiles3": {
        "total": "5517",
        "ok": "4244",
        "ko": "7368"
    },
    "percentiles4": {
        "total": "8391",
        "ok": "7518",
        "ko": "9178"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 15898,
    "percentage": 74
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 159,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2484,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2948,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.909",
        "ok": "7.687",
        "ko": "1.222"
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
        "total": "18792",
        "ok": "16209",
        "ko": "2583"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "12",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "59430",
        "ok": "59430",
        "ko": "19688"
    },
    "meanResponseTime": {
        "total": "1424",
        "ok": "970",
        "ko": "4274"
    },
    "standardDeviation": {
        "total": "3258",
        "ok": "3190",
        "ko": "1983"
    },
    "percentiles1": {
        "total": "49",
        "ok": "35",
        "ko": "4198"
    },
    "percentiles2": {
        "total": "1728",
        "ok": "131",
        "ko": "5240"
    },
    "percentiles3": {
        "total": "6583",
        "ok": "5437",
        "ko": "7499"
    },
    "percentiles4": {
        "total": "16153",
        "ok": "16781",
        "ko": "9306"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13458,
    "percentage": 72
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 173,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2578,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2583,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.791",
        "ok": "6.72",
        "ko": "1.071"
    }
}
    },"req_singleflagsremo-141fd": {
        type: "REQUEST",
        name: "singleFlagsRemove",
path: "coreActions / singleFlagsRemove",
pathFormatted: "req_coreactions---s-1c510",
stats: {
    "name": "singleFlagsRemove",
    "numberOfRequests": {
        "total": "14373",
        "ok": "12369",
        "ko": "2004"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "45393",
        "ok": "45393",
        "ko": "32536"
    },
    "meanResponseTime": {
        "total": "1258",
        "ok": "765",
        "ko": "4299"
    },
    "standardDeviation": {
        "total": "2771",
        "ok": "2511",
        "ko": "2327"
    },
    "percentiles1": {
        "total": "21",
        "ok": "9",
        "ko": "4148"
    },
    "percentiles2": {
        "total": "1364",
        "ok": "72",
        "ko": "5180"
    },
    "percentiles3": {
        "total": "6048",
        "ok": "4874",
        "ko": "7611"
    },
    "percentiles4": {
        "total": "12065",
        "ok": "12132",
        "ko": "9796"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10468,
    "percentage": 73
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 144,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1757,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2004,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.959",
        "ok": "5.128",
        "ko": "0.831"
    }
}
    },"req_singleflagsadd-56d74": {
        type: "REQUEST",
        name: "singleFlagsAdd",
path: "coreActions / singleFlagsAdd",
pathFormatted: "req_coreactions---s-2a671",
stats: {
    "name": "singleFlagsAdd",
    "numberOfRequests": {
        "total": "14326",
        "ok": "12343",
        "ko": "1983"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "41209",
        "ok": "41209",
        "ko": "30693"
    },
    "meanResponseTime": {
        "total": "1253",
        "ok": "765",
        "ko": "4291"
    },
    "standardDeviation": {
        "total": "2710",
        "ok": "2453",
        "ko": "2207"
    },
    "percentiles1": {
        "total": "22",
        "ok": "9",
        "ko": "4190"
    },
    "percentiles2": {
        "total": "1461",
        "ok": "77",
        "ko": "5243"
    },
    "percentiles3": {
        "total": "6040",
        "ok": "4804",
        "ko": "7603"
    },
    "percentiles4": {
        "total": "11789",
        "ok": "12189",
        "ko": "9475"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10414,
    "percentage": 73
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 126,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1803,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1983,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.939",
        "ok": "5.117",
        "ko": "0.822"
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
        "total": "4751",
        "ok": "4092",
        "ko": "659"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "41442",
        "ok": "41442",
        "ko": "24496"
    },
    "meanResponseTime": {
        "total": "1215",
        "ok": "755",
        "ko": "4073"
    },
    "standardDeviation": {
        "total": "2627",
        "ok": "2416",
        "ko": "2009"
    },
    "percentiles1": {
        "total": "25",
        "ok": "11",
        "ko": "4075"
    },
    "percentiles2": {
        "total": "1342",
        "ok": "88",
        "ko": "5051"
    },
    "percentiles3": {
        "total": "5828",
        "ok": "4858",
        "ko": "7214"
    },
    "percentiles4": {
        "total": "10730",
        "ok": "11233",
        "ko": "9138"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3456,
    "percentage": 73
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 47,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 589,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 659,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.97",
        "ok": "1.697",
        "ko": "0.273"
    }
}
    },"req_rangeflagsremov-460ae": {
        type: "REQUEST",
        name: "rangeFlagsRemove",
path: "coreActions / rangeFlagsRemove",
pathFormatted: "req_coreactions---r-5b47f",
stats: {
    "name": "rangeFlagsRemove",
    "numberOfRequests": {
        "total": "9555",
        "ok": "8116",
        "ko": "1439"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "4",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "43170",
        "ok": "43170",
        "ko": "36712"
    },
    "meanResponseTime": {
        "total": "1303",
        "ok": "780",
        "ko": "4251"
    },
    "standardDeviation": {
        "total": "2763",
        "ok": "2475",
        "ko": "2429"
    },
    "percentiles1": {
        "total": "59",
        "ok": "49",
        "ko": "4091"
    },
    "percentiles2": {
        "total": "1528",
        "ok": "103",
        "ko": "5190"
    },
    "percentiles3": {
        "total": "6035",
        "ok": "4833",
        "ko": "7633"
    },
    "percentiles4": {
        "total": "11559",
        "ok": "11845",
        "ko": "10787"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6901,
    "percentage": 72
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 81,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1134,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1439,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.961",
        "ok": "3.365",
        "ko": "0.597"
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
        "total": "4817",
        "ok": "4158",
        "ko": "659"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "33582",
        "ok": "33582",
        "ko": "9377"
    },
    "meanResponseTime": {
        "total": "1003",
        "ok": "540",
        "ko": "3926"
    },
    "standardDeviation": {
        "total": "2060",
        "ok": "1680",
        "ko": "1820"
    },
    "percentiles1": {
        "total": "11",
        "ok": "5",
        "ko": "4088"
    },
    "percentiles2": {
        "total": "897",
        "ok": "35",
        "ko": "4930"
    },
    "percentiles3": {
        "total": "5249",
        "ok": "3924",
        "ko": "7229"
    },
    "percentiles4": {
        "total": "7684",
        "ok": "6770",
        "ko": "8959"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3570,
    "percentage": 74
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 27,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 561,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 659,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.997",
        "ok": "1.724",
        "ko": "0.273"
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
        "total": "4791",
        "ok": "4080",
        "ko": "711"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "26797",
        "ok": "26797",
        "ko": "9839"
    },
    "meanResponseTime": {
        "total": "1069",
        "ok": "546",
        "ko": "4067"
    },
    "standardDeviation": {
        "total": "2046",
        "ok": "1589",
        "ko": "1781"
    },
    "percentiles1": {
        "total": "11",
        "ok": "5",
        "ko": "4054"
    },
    "percentiles2": {
        "total": "1466",
        "ok": "40",
        "ko": "5057"
    },
    "percentiles3": {
        "total": "5413",
        "ok": "3938",
        "ko": "7307"
    },
    "percentiles4": {
        "total": "7514",
        "ok": "6809",
        "ko": "8591"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3458,
    "percentage": 72
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 36,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 586,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 711,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.986",
        "ok": "1.692",
        "ko": "0.295"
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
        "total": "2343",
        "ok": "2031",
        "ko": "312"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "393"
    },
    "maxResponseTime": {
        "total": "39143",
        "ok": "39143",
        "ko": "9441"
    },
    "meanResponseTime": {
        "total": "1115",
        "ok": "620",
        "ko": "4334"
    },
    "standardDeviation": {
        "total": "2356",
        "ok": "2027",
        "ko": "1728"
    },
    "percentiles1": {
        "total": "12",
        "ok": "4",
        "ko": "4245"
    },
    "percentiles2": {
        "total": "1065",
        "ok": "45",
        "ko": "5266"
    },
    "percentiles3": {
        "total": "5656",
        "ok": "4564",
        "ko": "7398"
    },
    "percentiles4": {
        "total": "8243",
        "ok": "7751",
        "ko": "9150"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1737,
    "percentage": 74
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 18,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 276,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 312,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.971",
        "ok": "0.842",
        "ko": "0.129"
    }
}
    },"req_rangeflagsadd-2ff42": {
        type: "REQUEST",
        name: "rangeFlagsAdd",
path: "coreActions / rangeFlagsAdd",
pathFormatted: "req_coreactions---r-0c843",
stats: {
    "name": "rangeFlagsAdd",
    "numberOfRequests": {
        "total": "9520",
        "ok": "8156",
        "ko": "1364"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "44343",
        "ok": "44343",
        "ko": "23697"
    },
    "meanResponseTime": {
        "total": "1315",
        "ok": "807",
        "ko": "4350"
    },
    "standardDeviation": {
        "total": "2838",
        "ok": "2600",
        "ko": "2245"
    },
    "percentiles1": {
        "total": "60",
        "ok": "50",
        "ko": "4223"
    },
    "percentiles2": {
        "total": "1565",
        "ok": "111",
        "ko": "5269"
    },
    "percentiles3": {
        "total": "6088",
        "ok": "4964",
        "ko": "7669"
    },
    "percentiles4": {
        "total": "12046",
        "ok": "11846",
        "ko": "12598"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6887,
    "percentage": 72
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 78,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1191,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1364,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.947",
        "ok": "3.381",
        "ko": "0.566"
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
        "total": "2359",
        "ok": "2359",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9291",
        "ok": "9291",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "916",
        "ok": "916",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1785",
        "ok": "1785",
        "ko": "-"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles2": {
        "total": "889",
        "ok": "889",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5147",
        "ok": "5147",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6932",
        "ok": "6932",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1764,
    "percentage": 75
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 33,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 562,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.978",
        "ok": "0.978",
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
        "total": "7232",
        "ok": "6184",
        "ko": "1048"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "45589",
        "ok": "45589",
        "ko": "38529"
    },
    "meanResponseTime": {
        "total": "1307",
        "ok": "772",
        "ko": "4462"
    },
    "standardDeviation": {
        "total": "2999",
        "ok": "2691",
        "ko": "2770"
    },
    "percentiles1": {
        "total": "28",
        "ok": "12",
        "ko": "4191"
    },
    "percentiles2": {
        "total": "1577",
        "ok": "106",
        "ko": "5260"
    },
    "percentiles3": {
        "total": "5961",
        "ok": "4545",
        "ko": "7587"
    },
    "percentiles4": {
        "total": "12446",
        "ok": "12182",
        "ko": "15148"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5231,
    "percentage": 72
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 63,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 890,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1048,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.998",
        "ok": "2.564",
        "ko": "0.434"
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
        "total": "2284",
        "ok": "1983",
        "ko": "301"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "119"
    },
    "maxResponseTime": {
        "total": "29273",
        "ok": "29273",
        "ko": "10097"
    },
    "meanResponseTime": {
        "total": "1083",
        "ok": "604",
        "ko": "4236"
    },
    "standardDeviation": {
        "total": "2203",
        "ok": "1830",
        "ko": "1822"
    },
    "percentiles1": {
        "total": "13",
        "ok": "7",
        "ko": "4192"
    },
    "percentiles2": {
        "total": "1169",
        "ok": "41",
        "ko": "5166"
    },
    "percentiles3": {
        "total": "5450",
        "ok": "4131",
        "ko": "7440"
    },
    "percentiles4": {
        "total": "8447",
        "ok": "7599",
        "ko": "9233"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1683,
    "percentage": 74
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 18,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 282,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 301,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.947",
        "ok": "0.822",
        "ko": "0.125"
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
        "total": "2391",
        "ok": "2391",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9349",
        "ok": "9349",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "859",
        "ok": "859",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1746",
        "ok": "1746",
        "ko": "-"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles2": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5029",
        "ok": "5029",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7023",
        "ok": "7023",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1830,
    "percentage": 77
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 31,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 530,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.991",
        "ok": "0.991",
        "ko": "-"
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
        "total": "366",
        "ok": "344",
        "ko": "22"
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
    "count": 312,
    "percentage": 85
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 30,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 22,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.152",
        "ok": "0.143",
        "ko": "0.009"
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
        "total": "366",
        "ok": "344",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "574"
    },
    "maxResponseTime": {
        "total": "6891",
        "ok": "6891",
        "ko": "6439"
    },
    "meanResponseTime": {
        "total": "489",
        "ok": "270",
        "ko": "3923"
    },
    "standardDeviation": {
        "total": "1313",
        "ok": "923",
        "ko": "1684"
    },
    "percentiles1": {
        "total": "1",
        "ok": "1",
        "ko": "4572"
    },
    "percentiles2": {
        "total": "31",
        "ok": "22",
        "ko": "5136"
    },
    "percentiles3": {
        "total": "4023",
        "ok": "2500",
        "ko": "6097"
    },
    "percentiles4": {
        "total": "5573",
        "ok": "4816",
        "ko": "6372"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 314,
    "percentage": 86
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 28,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 22,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.152",
        "ok": "0.143",
        "ko": "0.009"
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
        "total": "366",
        "ok": "366",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6098",
        "ok": "6098",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "826",
        "ok": "826",
        "ko": "-"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1892",
        "ok": "1892",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4361",
        "ok": "4361",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 327,
    "percentage": 89
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 30,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.152",
        "ok": "0.152",
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
