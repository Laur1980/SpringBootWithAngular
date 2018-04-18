import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service'; 

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {
    
    
   private addTaskValue:string = null;
      
  constructor(private taskService: TaskService) { }
  
  public onAddTask(event){
    let cotent:string = event.target.value;
      if(cotent !== undefined && cotent.trim().length>0){
            let task:Task = new Task(event.target.value,this.getTodayAsString(),false);
            console.log('\n\n "+task.getName() +"\n\n');
            this.taskService.saveTask(task).subscribe(
                    (newTask:Task) => {
                        this.addTaskValue = ' ';
                        this.taskService.getOnTaskAdded().emit(newTask);
                    }
            );
      }
  }
  
  getTodayAsString(){
      let today = new Date();
      let dd:any = today.getDate();
      let mm:any = today.getMonth()+1;
      let yyyy = today.getFullYear();
      
      dd = dd<10?'0'+dd:dd;
      mm = mm<10?'0'+mm:mm;
      
      return yyyy+'/'+mm+'/'+dd;
  }
  
  ngOnInit() {
  }

}
