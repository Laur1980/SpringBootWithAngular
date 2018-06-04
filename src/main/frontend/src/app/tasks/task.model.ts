/**
 * Task Model
 */
export class Task{
     
    public id:number;

  constructor(public name:string,
              public dueDate:string,
              public isCompleted:boolean){}

}
