package com.brandao.performance.service;

import com.brandao.performance.dataprovider.model.WeatherClientResponse;
import com.brandao.performance.dataprovider.openfeign.ExternalWeatherApiClient;
import com.brandao.performance.service.model.WEATHER;
import com.brandao.performance.service.model.WeatherDomain;
import com.brandao.performance.utils.mappers.IWeatherMapper;
import org.springframework.stereotype.Service;

@Service
public class WeatherService {

    private final ExternalWeatherApiClient apiClient;

    private final IWeatherMapper mapper;

    public WeatherService(ExternalWeatherApiClient apiClient, IWeatherMapper mapper) {
        this.apiClient = apiClient;
        this.mapper = mapper;
    }

    public WeatherDomain getWeather(String cityCode) {
        WeatherClientResponse response = apiClient.getWeather(cityCode);
        return mapper.weatherClientResponseToWeatherDomain(response);
    }
}
