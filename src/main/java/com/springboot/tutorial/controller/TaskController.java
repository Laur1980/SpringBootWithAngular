package com.springboot.tutorial.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.tutorial.domain.Task;
import com.springboot.tutorial.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
	
	private TaskService taskService;
		
	@Autowired
	public TaskController(TaskService taskService) {
		this.taskService = taskService;
	}

	@GetMapping(value = {"","/"})
	public Iterable<Task> getTasks(){
		return this.taskService.getTasks();
	}
	
	@PostMapping("/save")
	public Task saveTask(@RequestBody Task task){
		return this.taskService.save(task);
	}
	
	@DeleteMapping("/delete/{taskId}")
	public void deleteTask(@PathVariable String taskId) {
		long id = Long.parseLong(taskId);
		 this.taskService.delete(id);
	}
	
	@GetMapping(value="/{taskId}")
	public Task getTask(@PathVariable String taskId) {
		long id = Long.parseLong(taskId);
		return taskService.getTask(id);
	}
	
}
