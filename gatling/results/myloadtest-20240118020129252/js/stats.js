var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "300",
        "ok": "132",
        "ko": "168"
    },
    "minResponseTime": {
        "total": "5138",
        "ok": "5138",
        "ko": "6713"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "55332",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "35204",
        "ok": "30235",
        "ko": "39109"
    },
    "standardDeviation": {
        "total": "20765",
        "ok": "15860",
        "ko": "23188"
    },
    "percentiles1": {
        "total": "35244",
        "ok": "30243",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "45270",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55312",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "55322",
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
    "count": 132,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 168,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.918",
        "ok": "2.164",
        "ko": "2.754"
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
        "ok": "132",
        "ko": "168"
    },
    "minResponseTime": {
        "total": "5138",
        "ok": "5138",
        "ko": "6713"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "55332",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "35204",
        "ok": "30235",
        "ko": "39109"
    },
    "standardDeviation": {
        "total": "20765",
        "ok": "15860",
        "ko": "23188"
    },
    "percentiles1": {
        "total": "35244",
        "ok": "30243",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "45270",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55312",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "55322",
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
    "count": 132,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 168,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.918",
        "ok": "2.164",
        "ko": "2.754"
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
