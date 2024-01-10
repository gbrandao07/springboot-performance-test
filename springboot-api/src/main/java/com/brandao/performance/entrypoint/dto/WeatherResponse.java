package com.brandao.performance.entrypoint.dto;

import com.brandao.performance.service.model.WEATHER;

public record WeatherResponse (WEATHER weather, String temperature) {

}
