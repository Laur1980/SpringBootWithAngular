package com.springboot.tutorial.service;

import com.springboot.tutorial.domain.Task;

public interface TaskService {
	
	public Iterable<Task> getTasks();
	
	Task save(Task task);
	
	void delete(long taskId);
	
}
