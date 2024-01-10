package com.brandao.performance.dataprovider.openfeign;

import com.brandao.performance.dataprovider.model.WeatherClientResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "weather-api", url = "${feign.client.config.weather.api.baseurl}")
public interface ExternalWeatherApiClient {

    @GetMapping("/weather")
    WeatherClientResponse getWeather(@RequestParam String cityCode);
}
