var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "45015",
        "ok": "3518",
        "ko": "41497"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60774",
        "ok": "53954",
        "ko": "60774"
    },
    "meanResponseTime": {
        "total": "16465",
        "ok": "1965",
        "ko": "17695"
    },
    "standardDeviation": {
        "total": "11791",
        "ok": "5735",
        "ko": "11345"
    },
    "percentiles1": {
        "total": "18784",
        "ok": "776",
        "ko": "20213"
    },
    "percentiles2": {
        "total": "26386",
        "ok": "1494",
        "ko": "26833"
    },
    "percentiles3": {
        "total": "32700",
        "ok": "3468",
        "ko": "32873"
    },
    "percentiles4": {
        "total": "36710",
        "ok": "37979",
        "ko": "36684"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1785,
    "percentage": 4
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 490,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1243,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 41497,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "432.837",
        "ok": "33.827",
        "ko": "399.01"
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
        "ok": "3518",
        "ko": "41497"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60774",
        "ok": "53954",
        "ko": "60774"
    },
    "meanResponseTime": {
        "total": "16465",
        "ok": "1965",
        "ko": "17695"
    },
    "standardDeviation": {
        "total": "11791",
        "ok": "5735",
        "ko": "11345"
    },
    "percentiles1": {
        "total": "18794",
        "ok": "775",
        "ko": "20213"
    },
    "percentiles2": {
        "total": "26387",
        "ok": "1494",
        "ko": "26833"
    },
    "percentiles3": {
        "total": "32700",
        "ok": "3468",
        "ko": "32873"
    },
    "percentiles4": {
        "total": "36710",
        "ok": "37979",
        "ko": "36684"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1785,
    "percentage": 4
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 490,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1243,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 41497,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "432.837",
        "ok": "33.827",
        "ko": "399.01"
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
