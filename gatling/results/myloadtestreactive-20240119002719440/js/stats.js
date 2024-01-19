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
        "total": "327",
        "ok": "2701",
        "ko": "327"
    },
    "maxResponseTime": {
        "total": "37154",
        "ok": "37154",
        "ko": "34065"
    },
    "meanResponseTime": {
        "total": "17110",
        "ok": "17112",
        "ko": "17090"
    },
    "standardDeviation": {
        "total": "9859",
        "ok": "9829",
        "ko": "10088"
    },
    "percentiles1": {
        "total": "16823",
        "ok": "16821",
        "ko": "17086"
    },
    "percentiles2": {
        "total": "24271",
        "ok": "22957",
        "ko": "25585"
    },
    "percentiles3": {
        "total": "35149",
        "ok": "35151",
        "ko": "32377"
    },
    "percentiles4": {
        "total": "37147",
        "ok": "37148",
        "ko": "33729"
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
        "total": "327",
        "ok": "2701",
        "ko": "327"
    },
    "maxResponseTime": {
        "total": "37154",
        "ok": "37154",
        "ko": "34065"
    },
    "meanResponseTime": {
        "total": "17110",
        "ok": "17112",
        "ko": "17090"
    },
    "standardDeviation": {
        "total": "9859",
        "ok": "9829",
        "ko": "10088"
    },
    "percentiles1": {
        "total": "16823",
        "ok": "16821",
        "ko": "17086"
    },
    "percentiles2": {
        "total": "24271",
        "ok": "22957",
        "ko": "25585"
    },
    "percentiles3": {
        "total": "35149",
        "ok": "35151",
        "ko": "32377"
    },
    "percentiles4": {
        "total": "37147",
        "ok": "37148",
        "ko": "33729"
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
