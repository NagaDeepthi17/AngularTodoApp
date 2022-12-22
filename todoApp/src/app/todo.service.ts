import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId=2;

  constructor() { }
  todoList=[
    {
      id:1,'task':"Task1"
    }
  ]
  addTodo(taskName:string){
    this.todoList.push({"id":this.taskId++,'task':taskName})
  }
  deleteTodo(index:any){
    this.todoList.splice(index,1);
  }
  
}
