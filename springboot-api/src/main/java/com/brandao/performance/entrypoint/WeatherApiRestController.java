package com.brandao.performance.entrypoint;

import com.brandao.performance.entrypoint.dto.WeatherResponse;
import com.brandao.performance.service.WeatherService;
import com.brandao.performance.utils.mappers.IWeatherMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class WeatherApiRestController {

    private final WeatherService service;
    private final IWeatherMapper mapper;

    public WeatherApiRestController(WeatherService service, IWeatherMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @GetMapping("/weather")
    public Mono<WeatherResponse> getWeather(@RequestParam String cityCode) {
        WeatherResponse response = mapper.weatherDomainToWeatherResponse(service.getWeather(cityCode));
        return Mono.just(response);
    }
}
