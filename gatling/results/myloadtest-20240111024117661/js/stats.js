var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "13515",
        "ok": "13288",
        "ko": "227"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "3",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "10003",
        "ok": "8861",
        "ko": "10003"
    },
    "meanResponseTime": {
        "total": "552",
        "ok": "398",
        "ko": "9538"
    },
    "standardDeviation": {
        "total": "1601",
        "ok": "1065",
        "ko": "1998"
    },
    "percentiles1": {
        "total": "6",
        "ok": "6",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "202",
        "ok": "144",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "2421",
        "ok": "1872",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "10002",
        "ok": "6236",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 11202,
    "percentage": 83
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 541,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1545,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 227,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150.167",
        "ok": "147.644",
        "ko": "2.522"
    }
},
contents: {
"req_getrequest--168949127": {
        type: "REQUEST",
        name: "GetRequest",
path: "GetRequest",
pathFormatted: "req_getrequest--168949127",
stats: {
    "name": "GetRequest",
    "numberOfRequests": {
        "total": "13515",
        "ok": "13288",
        "ko": "227"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "3",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "10003",
        "ok": "8861",
        "ko": "10003"
    },
    "meanResponseTime": {
        "total": "552",
        "ok": "398",
        "ko": "9538"
    },
    "standardDeviation": {
        "total": "1601",
        "ok": "1065",
        "ko": "1998"
    },
    "percentiles1": {
        "total": "6",
        "ok": "6",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "202",
        "ok": "144",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "2421",
        "ok": "1873",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "10002",
        "ok": "6236",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 11202,
    "percentage": 83
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 541,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1545,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 227,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150.167",
        "ok": "147.644",
        "ko": "2.522"
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
