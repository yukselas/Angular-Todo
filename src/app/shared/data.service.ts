import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('this is a text',true),
    new Todo(' Build a complete application using Angular! In this in-depth tutorial we will implement a modern User Interface and cover many other interesting topics such as component interaction, Angular Forms and displaying modal dialogs', false)
  ]

  constructor() { }

  getallTodos(){
    return this.todos
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo:Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index:number){
    this.todos.splice(index,1)
  }
}
