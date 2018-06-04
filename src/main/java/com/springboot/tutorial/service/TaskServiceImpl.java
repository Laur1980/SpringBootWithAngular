package com.springboot.tutorial.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.springboot.tutorial.domain.Task;
import com.springboot.tutorial.exceptions.TaskNotFoundException;
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
	public void delete(long taskId)throws TaskNotFoundException {
		 checkAndGetTask(taskId);
		 this.taskRepository.deleteById(taskId);
	}

	@Override
	public Task getTask(long taskId)throws TaskNotFoundException {
		return checkAndGetTask(taskId);
	}
	
	//it gets the actual task if one exists or it throws an exception
	private Task checkAndGetTask(long taskId) {
		Optional<Task> opt = this.taskRepository.findById(taskId);
		if(!opt.isPresent())
			throw new TaskNotFoundException("No task for id "+taskId+" was found!");
		return opt.get();
	}

}
