package com.brandao.performance.entrypoint;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthApiRestController {


    @GetMapping("/healthz")
    public String healthz() {
        return "UP";
    }
}
