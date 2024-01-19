package com.brandao.performance.utils;

import com.brandao.performance.dataprovider.model.WeatherDTOResponse;
import com.brandao.performance.dataprovider.model.WeatherExternalApiResponse;
import com.brandao.performance.service.model.WeatherDomain;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import reactor.core.publisher.Flux;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface IMapper {

    List<WeatherDTOResponse> weatherResponseDomainToWeatherDTOResponse(List<WeatherDomain> weather);

    default Flux<WeatherDTOResponse> weatherDomainFluxToWeatherDTOResponseFlux(Flux<WeatherDomain> weatherDomainFlux) {
        return weatherDomainFlux.map(weatherDomain ->
                new WeatherDTOResponse(weatherDomain.weather(), weatherDomain.temperature(), weatherDomain.unit())
        );
    }

    List<WeatherDomain> weatherExternalApiResponseToWeatherDomain(List<WeatherExternalApiResponse> weather);

    default Flux<WeatherDomain> weatherExternalApiResponseFluxToWeatherDomainFlux(Flux<WeatherExternalApiResponse> weatherExternalApiResponseFLux) {
        return weatherExternalApiResponseFLux.map(weatherExternalApiResponse ->
                new WeatherDomain(weatherExternalApiResponse.weather(), weatherExternalApiResponse.temperature(), weatherExternalApiResponse.unit()));
    }
}
