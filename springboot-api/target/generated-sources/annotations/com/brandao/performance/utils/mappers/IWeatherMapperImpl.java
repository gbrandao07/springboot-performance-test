package com.brandao.performance.utils.mappers;

import com.brandao.performance.entrypoint.dto.WeatherResponse;
import com.brandao.performance.service.model.WEATHER;
import com.brandao.performance.service.model.WeatherDomain;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-10T20:30:12-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.7 (Oracle Corporation)"
)
@Component
public class IWeatherMapperImpl implements IWeatherMapper {

    @Override
    public WeatherResponse weatherDomainToWeatherResponse(WeatherDomain weatherDomain) {
        if ( weatherDomain == null ) {
            return null;
        }

        WEATHER weather = null;
        String temperature = null;

        weather = weatherDomain.weather();
        temperature = weatherDomain.temperature();

        WeatherResponse weatherResponse = new WeatherResponse( weather, temperature );

        return weatherResponse;
    }
}
