package com.brandao.performance.dataprovider.openfeign;

import com.brandao.performance.dataprovider.model.WeatherExternalApiResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "weather-api", url = "${weather.api.baseurl}")
public interface ExternalWeatherOpenFeignClient {

    @GetMapping("/weather")
    List<WeatherExternalApiResponse> getWeather(@RequestParam String cityCode);
}

