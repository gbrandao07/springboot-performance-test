package com.brandao.performance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.web.reactive.config.EnableWebFlux;

@SpringBootApplication
@EnableFeignClients
@EnableWebFlux
public class PerformanceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PerformanceApplication.class, args);
	}

}
