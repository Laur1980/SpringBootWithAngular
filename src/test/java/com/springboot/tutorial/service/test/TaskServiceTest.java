package com.springboot.tutorial.service.test;

import org.junit.After;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.springboot.tutorial.service.TaskService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskServiceTest {
	
	@Mock
	private TaskService taskService;
	
	@Before
	public void setUp(){
		
	}
	
	@After
	public void tearDown(){
		
	}
	
}
