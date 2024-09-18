package com.in28minutes.rest.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
//public class SpringSecurityConfigurationBasicAuth  extends WebSecurityConfigurerAdapter{
	public class SpringSecurityConfigurationBasicAuth {
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//		.csrf().disable()
//		.authorizeRequests()
//		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
//			.anyRequest().authenticated()
//			.and()
//			.httpBasic();
//		
//	}
	
//	   @Bean
//	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//	        http
//	            .csrf().disable()  // Disable CSRF protection for stateless APIs
//	            .authorizeHttpRequests((authz) -> authz
//	                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()  // Allow preflight OPTIONS requests
//	                .anyRequest().authenticated()  // All other requests require authentication
//	            )
//	            .httpBasic();  // Enable basic authentication
//
//	        return http.build();
//	    }
}
