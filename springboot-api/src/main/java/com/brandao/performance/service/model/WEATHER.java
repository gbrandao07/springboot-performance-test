package com.brandao.performance.service.model;

public enum WEATHER {
    SUNNY,
    RAINY,
    CLOUDED;

    public static WEATHER fromString(String weather) {
        return switch (weather) {
            case "Sunny" -> SUNNY;
            case "Rainy" -> RAINY;
            case "Clouded" -> CLOUDED;
            default -> SUNNY;
        };
    }
}

