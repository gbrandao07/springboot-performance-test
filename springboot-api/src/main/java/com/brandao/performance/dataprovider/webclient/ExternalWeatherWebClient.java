package com.brandao.performance.dataprovider.webclient;

import com.brandao.performance.dataprovider.model.WeatherExternalApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Flux;
import reactor.core.scheduler.Schedulers;

@Component
public class ExternalWeatherWebClient {

    private final WebClient client;

    public ExternalWeatherWebClient(WebClient.Builder builder, @Value("${weather.api.baseurl}") String baseUrl) {
        this.client = builder.baseUrl(baseUrl).build();
    }

    public Flux<WeatherExternalApiResponse> getWeather(String cityCode) {

        String url = UriComponentsBuilder.fromUriString("/weather")
                .queryParam("cityCode", cityCode)
                .build()
                .toUriString();

        return client.get()
                .uri(url)
                .retrieve()
                .bodyToFlux(WeatherExternalApiResponse.class)
                .subscribeOn(Schedulers.boundedElastic());
    }
}
