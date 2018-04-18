/**
 * Task Model
 */
export class Task{
  
  private id:number;
    
  constructor(private name:string,private dueDate:string,private isCompleted:boolean){}
  
  public getId():number {
    return this.id;
  } 
  
  public getName():string{
    return this.name;
  }
  
  public getDueDate():string{
    return this.dueDate;
  }
  
  public getIsCompleted():boolean{
    return this.isCompleted;
  }
  
  public setId(id:number){
    this.id = id;
  }
  
  public setName(name:string){
    this.name = name;
  }
  
  public setDueDate(date:string){
    this.dueDate = date;
  }
  
  public setIsCompleted(isCompleted:boolean){
    this.isCompleted = isCompleted;
  }
  
}