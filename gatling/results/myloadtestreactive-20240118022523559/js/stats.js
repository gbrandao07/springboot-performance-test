var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "150",
        "ok": "115",
        "ko": "35"
    },
    "minResponseTime": {
        "total": "5465",
        "ok": "5465",
        "ko": "30266"
    },
    "maxResponseTime": {
        "total": "35289",
        "ok": "35289",
        "ko": "30342"
    },
    "meanResponseTime": {
        "total": "20858",
        "ok": "17982",
        "ko": "30304"
    },
    "standardDeviation": {
        "total": "9224",
        "ok": "8692",
        "ko": "22"
    },
    "percentiles1": {
        "total": "20620",
        "ok": "15566",
        "ko": "30306"
    },
    "percentiles2": {
        "total": "30303",
        "ok": "25608",
        "ko": "30323"
    },
    "percentiles3": {
        "total": "30625",
        "ok": "30633",
        "ko": "30336"
    },
    "percentiles4": {
        "total": "30653",
        "ok": "30654",
        "ko": "30341"
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
    "count": 115,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 35,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.167",
        "ok": "3.194",
        "ko": "0.972"
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
        "ok": "115",
        "ko": "35"
    },
    "minResponseTime": {
        "total": "5465",
        "ok": "5465",
        "ko": "30266"
    },
    "maxResponseTime": {
        "total": "35289",
        "ok": "35289",
        "ko": "30342"
    },
    "meanResponseTime": {
        "total": "20858",
        "ok": "17982",
        "ko": "30304"
    },
    "standardDeviation": {
        "total": "9224",
        "ok": "8692",
        "ko": "22"
    },
    "percentiles1": {
        "total": "20620",
        "ok": "15566",
        "ko": "30306"
    },
    "percentiles2": {
        "total": "30303",
        "ok": "25608",
        "ko": "30323"
    },
    "percentiles3": {
        "total": "30625",
        "ok": "30633",
        "ko": "30336"
    },
    "percentiles4": {
        "total": "30653",
        "ok": "30654",
        "ko": "30341"
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
    "count": 115,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 35,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.167",
        "ok": "3.194",
        "ko": "0.972"
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
