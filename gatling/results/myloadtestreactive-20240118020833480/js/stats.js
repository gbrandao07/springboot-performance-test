var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "300",
        "ok": "205",
        "ko": "95"
    },
    "minResponseTime": {
        "total": "357",
        "ok": "5502",
        "ko": "357"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "55758",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "31991",
        "ok": "30164",
        "ko": "35934"
    },
    "standardDeviation": {
        "total": "17469",
        "ok": "15947",
        "ko": "19804"
    },
    "percentiles1": {
        "total": "30386",
        "ok": "30665",
        "ko": "30323"
    },
    "percentiles2": {
        "total": "45711",
        "ok": "45613",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55711",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "55740",
        "ko": "60002"
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
    "count": 205,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 95,
    "percentage": 32
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.918",
        "ok": "3.361",
        "ko": "1.557"
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
        "total": "300",
        "ok": "205",
        "ko": "95"
    },
    "minResponseTime": {
        "total": "357",
        "ok": "5502",
        "ko": "357"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "55758",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "31991",
        "ok": "30164",
        "ko": "35934"
    },
    "standardDeviation": {
        "total": "17469",
        "ok": "15947",
        "ko": "19804"
    },
    "percentiles1": {
        "total": "30386",
        "ok": "30665",
        "ko": "30323"
    },
    "percentiles2": {
        "total": "45711",
        "ok": "45613",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55711",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "55740",
        "ko": "60002"
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
    "count": 205,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 95,
    "percentage": 32
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.918",
        "ok": "3.361",
        "ko": "1.557"
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
