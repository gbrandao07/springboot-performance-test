var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "300",
        "ok": "265",
        "ko": "35"
    },
    "minResponseTime": {
        "total": "287",
        "ok": "2620",
        "ko": "287"
    },
    "maxResponseTime": {
        "total": "37004",
        "ok": "37004",
        "ko": "33942"
    },
    "meanResponseTime": {
        "total": "16744",
        "ok": "16717",
        "ko": "16947"
    },
    "standardDeviation": {
        "total": "9830",
        "ok": "9795",
        "ko": "10084"
    },
    "percentiles1": {
        "total": "16710",
        "ok": "16706",
        "ko": "16945"
    },
    "percentiles2": {
        "total": "22886",
        "ok": "22868",
        "ko": "25438"
    },
    "percentiles3": {
        "total": "34982",
        "ok": "34990",
        "ko": "32240"
    },
    "percentiles4": {
        "total": "36995",
        "ok": "36995",
        "ko": "33609"
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
    "count": 265,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 35,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.895",
        "ok": "6.974",
        "ko": "0.921"
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
        "ok": "265",
        "ko": "35"
    },
    "minResponseTime": {
        "total": "287",
        "ok": "2620",
        "ko": "287"
    },
    "maxResponseTime": {
        "total": "37004",
        "ok": "37004",
        "ko": "33942"
    },
    "meanResponseTime": {
        "total": "16744",
        "ok": "16717",
        "ko": "16947"
    },
    "standardDeviation": {
        "total": "9830",
        "ok": "9795",
        "ko": "10084"
    },
    "percentiles1": {
        "total": "16710",
        "ok": "16706",
        "ko": "16945"
    },
    "percentiles2": {
        "total": "22886",
        "ok": "22868",
        "ko": "25438"
    },
    "percentiles3": {
        "total": "34982",
        "ok": "34990",
        "ko": "32240"
    },
    "percentiles4": {
        "total": "36995",
        "ok": "36995",
        "ko": "33609"
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
    "count": 265,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 35,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.895",
        "ok": "6.974",
        "ko": "0.921"
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
