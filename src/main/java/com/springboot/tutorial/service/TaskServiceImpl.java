package com.springboot.tutorial.service;

import org.springframework.stereotype.Service;

import com.springboot.tutorial.domain.Task;
import com.springboot.tutorial.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {
	
	private TaskRepository taskRepository;
	
	public TaskServiceImpl(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}

	@Override
	public Iterable<Task> getTasks() {
		return this.taskRepository.findAll();
	}

	@Override
	public Task save(Task task) {
		return this.taskRepository.save(task);
	}
	
	@Override
	public void delete(long taskId) {
		 this.taskRepository.deleteById(taskId);
	}

}
