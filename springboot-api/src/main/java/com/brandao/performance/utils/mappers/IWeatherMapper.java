package com.brandao.performance.utils.mappers;

import com.brandao.performance.dataprovider.model.WeatherClientResponse;
import com.brandao.performance.entrypoint.dto.WeatherResponse;
import com.brandao.performance.service.model.WEATHER;
import com.brandao.performance.service.model.WeatherDomain;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface IWeatherMapper {

    WeatherResponse weatherDomainToWeatherResponse(WeatherDomain weatherDomain);

    default WeatherDomain weatherClientResponseToWeatherDomain(WeatherClientResponse weatherClientResponse) {
        StringBuilder temperatureSb = new StringBuilder();
        temperatureSb.append(weatherClientResponse.temperature());
        temperatureSb.append("º ");
        temperatureSb.append(weatherClientResponse.unit());
        return new WeatherDomain(WEATHER.fromString(weatherClientResponse.weather()), temperatureSb.toString());
    }
}
