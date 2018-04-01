package com.springboot.tutorial;

import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.springboot.tutorial.domain.Task;
import com.springboot.tutorial.service.TaskService;

@SpringBootApplication
public class SpringBootWithAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootWithAngularApplication.class, args);
	}
	
}
