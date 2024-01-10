package com.brandao.performance.service.model;

public enum WEATHER {
    SUNNY,
    RAINY,
    CLOUDED;

    public static WEATHER fromString(String weather) {
        switch (weather) {
            case "Sunny": return SUNNY;
            case "Rainy": return RAINY;
            case "Clouded": return CLOUDED;
            default: return SUNNY;
        }
    }
}

