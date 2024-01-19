var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "45015",
        "ok": "3423",
        "ko": "41592"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "64214",
        "ok": "64214",
        "ko": "48355"
    },
    "meanResponseTime": {
        "total": "17924",
        "ok": "2564",
        "ko": "19188"
    },
    "standardDeviation": {
        "total": "13518",
        "ok": "7978",
        "ko": "13097"
    },
    "percentiles1": {
        "total": "18734",
        "ok": "1183",
        "ko": "20060"
    },
    "percentiles2": {
        "total": "28455",
        "ok": "1904",
        "ko": "29309"
    },
    "percentiles3": {
        "total": "40628",
        "ok": "3557",
        "ko": "40790"
    },
    "percentiles4": {
        "total": "46188",
        "ok": "53010",
        "ko": "45680"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1276,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 452,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1695,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 41592,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "401.92",
        "ok": "30.562",
        "ko": "371.357"
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
        "total": "45015",
        "ok": "3423",
        "ko": "41592"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "64214",
        "ok": "64214",
        "ko": "48355"
    },
    "meanResponseTime": {
        "total": "17924",
        "ok": "2564",
        "ko": "19188"
    },
    "standardDeviation": {
        "total": "13518",
        "ok": "7978",
        "ko": "13097"
    },
    "percentiles1": {
        "total": "18748",
        "ok": "1183",
        "ko": "20045"
    },
    "percentiles2": {
        "total": "28455",
        "ok": "1904",
        "ko": "29300"
    },
    "percentiles3": {
        "total": "40628",
        "ok": "3557",
        "ko": "40792"
    },
    "percentiles4": {
        "total": "46188",
        "ok": "53010",
        "ko": "45680"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1276,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 452,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1695,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 41592,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "401.92",
        "ok": "30.562",
        "ko": "371.357"
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
