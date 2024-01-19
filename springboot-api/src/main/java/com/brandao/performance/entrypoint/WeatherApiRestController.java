package com.brandao.performance.entrypoint;

import com.brandao.performance.dataprovider.model.WeatherDTOResponse;
import com.brandao.performance.service.WeatherService;
import com.brandao.performance.utils.IMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.util.List;

@RestController
public class WeatherApiRestController {

    private final WeatherService service;

    private final IMapper mapper;

    public WeatherApiRestController(WeatherService service, IMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @GetMapping("/weather")
    public List<WeatherDTOResponse> getWeather(@RequestParam String cityCode) {
        return mapper.weatherResponseDomainToWeatherDTOResponse(service.getWeather(cityCode));
    }

    @GetMapping("/weather-reactive")
    public Flux<WeatherDTOResponse> getWeatherReactive(@RequestParam String cityCode) {
        return mapper.weatherDomainFluxToWeatherDTOResponseFlux(service.getWeatherReactive(cityCode));
    }
}
