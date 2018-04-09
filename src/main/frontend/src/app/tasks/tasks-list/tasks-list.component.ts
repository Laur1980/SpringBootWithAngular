import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Http } from '@angular/http';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  private taskList: Task [];
  
  constructor(private taskService:TaskService) {
    this.taskList =[];
    console.log('TaskList: ',this.taskList);
  }
  
  public onChangeTask(event, task:Task){
    console.log('Inside onChangeTask, event: ',event);
    let index: number = this.taskList.indexOf(task);
    let completed:boolean = !task.IsCompleted;
    task.setIsCompleted(completed);
    this.taskList[index]=task;
    console.log('taskList: ', this.taskList);
  }
  
  public getDueDateLabel(task:Task){
    return task.IsCompleted?'label-succes':'label-primary';
  }
  
  public getTaskList(){
    return this.taskList;
  }
  
  public addTask(task: Task){
    this.taskList.push(task);
  }
  
  public removeTask(i:number):boolean{
     console.log('INSIDE removeTask index: '+i);
     let task = this.taskList[i];
    this.taskList.splice(i,1);
    console.log('Removing task : '+' id: '+task.Id +" name: "+task.Name);
    return task !== undefined;
     
  }
  
  public onRemove(i:number){
    console.log('INSIDE onRemove');
    this.removeTask(i);
  }
  
  ngOnInit() {
    console.log('INSIDE ngOnInit');
    this.taskService.getTasks()
                    .subscribe((tasks: any[]) => {
                      this.taskList = tasks
                    },
                    (error) => console.log(error)
                  );
    /*
    this.taskList.push(new Task(1,'something something',new Date(),true));
    this.taskList.push(new Task(2,'bla bla',new Date(),false));
    this.taskList.push(new Task(3,'iada iada iada',new Date(),false));
    this.taskList.push(new Task(4,'ntz ntz ntz ntz',new Date(),true));
    this.taskList.push(new Task(5,'goint to the bathroom',new Date(),true));
    this.taskList.push(new Task(6,'learning Angulas 2.x',new Date(),true));
    this.taskList.forEach(task => {console.log('id: '+task.Id+' name: '+task.Name) });
     */
  }

}
