function dynamicResponse(request) {
    var responses = [
        {"weather": "City1_Weather", "temperature": "32", "unit": "celsius"},
        {"weather": "City2_Weather", "temperature": "28", "unit": "celsius"},
        {"weather": "City3_Weather", "temperature": "25", "unit": "celsius"},
        {"weather": "City4_Weather", "temperature": "30", "unit": "celsius"}
    ];

    var currentIndex = 0;

    return function() {
        if (currentIndex < responses.length) {
            return responses[currentIndex++];
        } else {
            return null;
        }
    };
}

