/**
 * New typescript file
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Task } from './task.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  
  constructor(private http:Http){}
  
  public getTasks(){
    return this.http.get('/api/tasks')
                    .map(response => response.json());
  }
  
  public saveTask(task:Task){
      return this.http.post("/api/tasks/save",task)
          .map(
                  (response) => {
                      return response.json();
                  }
          );
  }
  
  public deleteTask(taskId: number){
      return this.http.delete("/api/tasks/delete"+"/"+taskId)
          .map(
                  (response) => {
                      return response.json();
                  }
          );
  }
  
}