/**
 * New typescript file
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
  
  constructor(private http:Http){}
  
  public getTasks(){
    return this.http.get('/api/tasks')
                    .map(response => response.json());
  }
  
}