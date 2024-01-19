package com.brandao.performance.service;

import com.brandao.performance.dataprovider.model.WeatherDTOResponse;
import com.brandao.performance.dataprovider.openfeign.ExternalWeatherOpenFeignClient;
import com.brandao.performance.dataprovider.webclient.ExternalWeatherWebClient;
import com.brandao.performance.service.model.WeatherDomain;
import com.brandao.performance.utils.IMapper;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
public class WeatherService {

    private final ExternalWeatherOpenFeignClient openFeignClient;
    private final ExternalWeatherWebClient webClient;

    private final IMapper mapper;

    public WeatherService(ExternalWeatherOpenFeignClient openFeignClient, ExternalWeatherWebClient webClient, IMapper mapper) {
        this.openFeignClient = openFeignClient;
        this.webClient = webClient;
        this.mapper = mapper;
    }

    public List<WeatherDomain> getWeather(String cityCode) {
        return mapper.weatherExternalApiResponseToWeatherDomain(openFeignClient.getWeather(cityCode));
    }

    public Flux<WeatherDomain> getWeatherReactive(String cityCode) {
        return mapper.weatherExternalApiResponseFluxToWeatherDomainFlux(webClient.getWeather(cityCode));
    }
}
