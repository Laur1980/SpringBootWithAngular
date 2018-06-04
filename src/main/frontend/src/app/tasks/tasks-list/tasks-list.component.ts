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

  constructor(private taskService:TaskService) {}

  public onChangeTask(event, task:Task){
    let index: number = this.taskList.indexOf(task);
    let completed:boolean = event.target.checked;
    task.isCompleted = completed ;
    this.taskList[index]=task;
    this.taskService.saveTask(task,completed).subscribe();
  }

  public getDueDateLabel(task:Task){
    return task.isCompleted?'label-succes':'label-primary';
  }

  public getTaskList(){
    return this.taskList;
  }

  public removeTask(i:number):boolean{
     console.log('INSIDE removeTask index: '+i);
     let task = this.taskList[i];
    this.taskList.splice(i,1);
    this.taskService.deleteTask(task.id).subscribe(
            response => {
                console.log(response.json());
            },error => {
                console.log(error.json());
            }
    );
    console.log('Removing task : '+' id: '+task.id +" name: "+task.name);
    return task !== undefined;

  }

  public onRemove(i:number){
    console.log('INSIDE onRemove');
    this.removeTask(i);
  }

  ngOnInit() {
    console.log('INSIDE ngOnInit');
    this.taskService.getTasks()
                    .subscribe(
                            (tasks: any[]) => {
                           this.taskList = tasks;

                        },
                        (error) => console.log(error)
                      );
    this.taskService.getOnTaskAdded().subscribe(
            (task: Task) => this.taskList.push(task)
    );

  }

}
