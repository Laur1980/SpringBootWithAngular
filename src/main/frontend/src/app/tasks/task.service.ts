/**
 * New typescript file
 */
import { Injectable,EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Task } from './task.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

    private onTaskAdded:EventEmitter<Task>;

  constructor(private http:Http){
      this.onTaskAdded = new EventEmitter<Task>();
  }

  public getOnTaskAdded(){
      return this.onTaskAdded;
  }

  public getTasks(){
    return this.http.get('/api/tasks')
                    .map( response => response.json() );
  }

  public saveTask(task:Task, checked:boolean){
      task.isCompleted = checked;
      return this.http.post("/api/tasks/save",task)
          .map(response => response.json());
  }

  public deleteTask(taskId: number){
      return this.http.delete("/api/tasks/delete"+"/"+taskId)
          .map(response => response.json());
  }

}
