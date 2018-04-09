/**
 * New typescript file
 */
export class Task{
  
  constructor(private id:number,private name:string,private date:Date,private isCompleted:boolean){
    console.log('Task '+this.id+' created!');
  }
  
  public get Id():number {
    return this.id;
  } 
  
  public get Name(){
    return this.name;
  }
  
  public get Date(){
    return this.date;
  }
  
  public get IsCompleted(){
    return this.isCompleted;
  }
  
  public set Id(id:number){
    this.id = id;
  }
  
  public set Name(name:string){
    this.name = name;
  }
  
  public set Date(date:Date){
    this.date = date;
  }
  
  public setIsCompleted(isCompleted:boolean){
    this.isCompleted = isCompleted;
  }
  
}