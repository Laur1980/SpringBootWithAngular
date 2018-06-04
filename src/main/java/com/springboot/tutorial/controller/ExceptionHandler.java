package com.springboot.tutorial.controller;

import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

import com.springboot.tutorial.exceptions.TaskNotFoundException;

@ControllerAdvice
public class ExceptionHandler {
	/*
	@ExceptionHandler(TaskNotFoundException.class)
	public ResponseEntity<TaskErrorResponse> handleException(TaskNotFoundException e){
		
		TaskErrorResponse error = new TaskErrorResponse();		
		error.setStatus(HttpStatus.NOT_FOUND.value());
		error.setMessage(e.getMessage());
		error.setTimestamp(System.currentTimeMillis());
		return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
				
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<TaskErrorResponse> handleException(Exception e){
		
		TaskErrorResponse error = new TaskErrorResponse();
		error.setStatus(HttpStatus.BAD_REQUEST.value());
		error.setMessage(e.getMessage());
		error.setTimestamp(System.currentTimeMillis());
		return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
				
	}
*/
}
