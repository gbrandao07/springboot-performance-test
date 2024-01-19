var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "21015",
        "ok": "18907",
        "ko": "2108"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10101",
        "ok": "9433",
        "ko": "10101"
    },
    "meanResponseTime": {
        "total": "1998",
        "ok": "1200",
        "ko": "9158"
    },
    "standardDeviation": {
        "total": "2804",
        "ok": "1295",
        "ko": "2518"
    },
    "percentiles1": {
        "total": "953",
        "ok": "808",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "1887",
        "ok": "1531",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "10002",
        "ok": "3677",
        "ko": "10005"
    },
    "percentiles4": {
        "total": "10003",
        "ok": "6682",
        "ko": "10060"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9384,
    "percentage": 45
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2750,
    "percentage": 13
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 6773,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2108,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "225.968",
        "ok": "203.301",
        "ko": "22.667"
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
        "total": "21015",
        "ok": "18907",
        "ko": "2108"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10101",
        "ok": "9433",
        "ko": "10101"
    },
    "meanResponseTime": {
        "total": "1998",
        "ok": "1200",
        "ko": "9158"
    },
    "standardDeviation": {
        "total": "2804",
        "ok": "1295",
        "ko": "2518"
    },
    "percentiles1": {
        "total": "953",
        "ok": "808",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "1887",
        "ok": "1531",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "10002",
        "ok": "3677",
        "ko": "10005"
    },
    "percentiles4": {
        "total": "10003",
        "ok": "6682",
        "ko": "10060"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9384,
    "percentage": 45
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2750,
    "percentage": 13
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 6773,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2108,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "225.968",
        "ok": "203.301",
        "ko": "22.667"
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
