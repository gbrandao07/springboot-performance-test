var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "13515",
        "ok": "13185",
        "ko": "330"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "3",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "10004",
        "ok": "9053",
        "ko": "10004"
    },
    "meanResponseTime": {
        "total": "680",
        "ok": "458",
        "ko": "9557"
    },
    "standardDeviation": {
        "total": "1777",
        "ok": "1059",
        "ko": "1941"
    },
    "percentiles1": {
        "total": "10",
        "ok": "9",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "650",
        "ok": "583",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "3204",
        "ok": "1971",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "10002",
        "ok": "5839",
        "ko": "10004"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10616,
    "percentage": 79
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1049,
    "percentage": 8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1520,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 330,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150.167",
        "ok": "146.5",
        "ko": "3.667"
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
        "ok": "13185",
        "ko": "330"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "3",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "10004",
        "ok": "9053",
        "ko": "10004"
    },
    "meanResponseTime": {
        "total": "680",
        "ok": "458",
        "ko": "9557"
    },
    "standardDeviation": {
        "total": "1777",
        "ok": "1059",
        "ko": "1941"
    },
    "percentiles1": {
        "total": "10",
        "ok": "9",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "650",
        "ok": "583",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "3204",
        "ok": "1971",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "10002",
        "ok": "5839",
        "ko": "10004"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10616,
    "percentage": 79
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1049,
    "percentage": 8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1520,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 330,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150.167",
        "ok": "146.5",
        "ko": "3.667"
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
