package com.targetclone.authentication.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import com.targetclone.authentication.filter.JwtRequestFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity

public class SecurityConfig extends com.targetclone.authentication.security.WebSecurityConfigurerAdapter {

    private final JwtRequestFilter jwtRequestFilter;

    public SecurityConfig(JwtRequestFilter jwtRequestFilter) {
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }
}

