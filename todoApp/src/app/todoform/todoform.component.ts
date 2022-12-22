import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {
  todoInput="";
  constructor(private ts:TodoService,
    private router:Router){}

  addTask(){
    this.ts.addTodo(this.todoInput);
    this.todoInput="";
  }
  resetTask(){
    this.todoInput="";
  }

}
