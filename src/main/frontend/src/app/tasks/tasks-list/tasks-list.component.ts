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
  }
  
  public onChangeTask(event, task:Task){
    let index: number = this.taskList.indexOf(task);
    let completed:boolean = event.target.checked;
    task.setIsCompleted(completed);
    this.taskList[index]=task;
    this.taskService.saveTask(task).subscribe();
  }
  
  public getDueDateLabel(task:Task){
    return task.getIsCompleted()?'label-succes':'label-primary';
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
    this.taskService.deleteTask(task.getId()).subscribe(
            response => {
                console.log(response.json());
            },error => {
                console.log(error.json());
            }
    );
    console.log('Removing task : '+' id: '+task.getId() +" name: "+task.getName());
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
                        tasks.forEach((e) => {
                            console.log(e);
                            this.taskList.push(new Task(e.id,e.name,e.dueDate,e.isCompleted));
                        });
                      
                    },
                    (error) => console.log(error)
                  );
     console.log('ngOnInit tasks list: ', this.taskList);
   
  }

}
