var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "300",
        "ok": "232",
        "ko": "68"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "2402",
        "ko": "16"
    },
    "maxResponseTime": {
        "total": "40798",
        "ok": "40798",
        "ko": "10054"
    },
    "meanResponseTime": {
        "total": "17718",
        "ok": "20941",
        "ko": "6722"
    },
    "standardDeviation": {
        "total": "11749",
        "ok": "11254",
        "ko": "4538"
    },
    "percentiles1": {
        "total": "14582",
        "ok": "20600",
        "ko": "10023"
    },
    "percentiles2": {
        "total": "28593",
        "ok": "30698",
        "ko": "10033"
    },
    "percentiles3": {
        "total": "38652",
        "ok": "38667",
        "ko": "10043"
    },
    "percentiles4": {
        "total": "40659",
        "ok": "40674",
        "ko": "10049"
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
    "count": 232,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 68,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.317",
        "ok": "5.659",
        "ko": "1.659"
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
        "ok": "232",
        "ko": "68"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "2402",
        "ko": "16"
    },
    "maxResponseTime": {
        "total": "40798",
        "ok": "40798",
        "ko": "10054"
    },
    "meanResponseTime": {
        "total": "17718",
        "ok": "20941",
        "ko": "6722"
    },
    "standardDeviation": {
        "total": "11749",
        "ok": "11254",
        "ko": "4538"
    },
    "percentiles1": {
        "total": "14582",
        "ok": "20600",
        "ko": "10023"
    },
    "percentiles2": {
        "total": "28593",
        "ok": "30698",
        "ko": "10033"
    },
    "percentiles3": {
        "total": "38652",
        "ok": "38667",
        "ko": "10043"
    },
    "percentiles4": {
        "total": "40659",
        "ok": "40674",
        "ko": "10049"
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
    "count": 232,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 68,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.317",
        "ok": "5.659",
        "ko": "1.659"
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
