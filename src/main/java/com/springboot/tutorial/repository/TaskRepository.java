package com.springboot.tutorial.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springboot.tutorial.domain.Task;


public interface TaskRepository extends CrudRepository<Task,Long>{}
