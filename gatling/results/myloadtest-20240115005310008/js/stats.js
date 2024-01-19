var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "94",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "8014",
        "ok": "8014",
        "ko": "31642"
    },
    "maxResponseTime": {
        "total": "31664",
        "ok": "27862",
        "ko": "31664"
    },
    "meanResponseTime": {
        "total": "18395",
        "ok": "17549",
        "ko": "31654"
    },
    "standardDeviation": {
        "total": "7586",
        "ok": "7020",
        "ko": "7"
    },
    "percentiles1": {
        "total": "17759",
        "ok": "17721",
        "ko": "31655"
    },
    "percentiles2": {
        "total": "22838",
        "ok": "22798",
        "ko": "31658"
    },
    "percentiles3": {
        "total": "31642",
        "ok": "27826",
        "ko": "31663"
    },
    "percentiles4": {
        "total": "31658",
        "ok": "27854",
        "ko": "31664"
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
    "count": 94,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.125",
        "ok": "2.938",
        "ko": "0.188"
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
        "total": "100",
        "ok": "94",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "8014",
        "ok": "8014",
        "ko": "31642"
    },
    "maxResponseTime": {
        "total": "31664",
        "ok": "27862",
        "ko": "31664"
    },
    "meanResponseTime": {
        "total": "18395",
        "ok": "17549",
        "ko": "31654"
    },
    "standardDeviation": {
        "total": "7586",
        "ok": "7020",
        "ko": "7"
    },
    "percentiles1": {
        "total": "17759",
        "ok": "17721",
        "ko": "31655"
    },
    "percentiles2": {
        "total": "22838",
        "ok": "22798",
        "ko": "31658"
    },
    "percentiles3": {
        "total": "31642",
        "ok": "27826",
        "ko": "31663"
    },
    "percentiles4": {
        "total": "31658",
        "ok": "27854",
        "ko": "31664"
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
    "count": 94,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.125",
        "ok": "2.938",
        "ko": "0.188"
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
