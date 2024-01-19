var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "150",
        "ok": "132",
        "ko": "18"
    },
    "minResponseTime": {
        "total": "5455",
        "ok": "5455",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "55819",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "34145",
        "ok": "30619",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "17711",
        "ok": "15901",
        "ko": "0"
    },
    "percentiles1": {
        "total": "35618",
        "ok": "30642",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "50744",
        "ok": "45633",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55773",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "55816",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 132,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 18,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.459",
        "ok": "2.164",
        "ko": "0.295"
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
        "total": "150",
        "ok": "132",
        "ko": "18"
    },
    "minResponseTime": {
        "total": "5455",
        "ok": "5455",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "55819",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "34145",
        "ok": "30619",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "17711",
        "ok": "15901",
        "ko": "0"
    },
    "percentiles1": {
        "total": "35618",
        "ok": "30642",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "50744",
        "ok": "45633",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55773",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "55816",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 132,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 18,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.459",
        "ok": "2.164",
        "ko": "0.295"
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
