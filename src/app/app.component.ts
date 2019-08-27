import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular';
  newTodo = new FormControl('');
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
  this.todos.push({ id: 1, name: "Finish chores", done: true });
  this.todos.push({ id: 2, name: "Cook dinner", done: false })    
  this.todos.push({ id: 3, name: "Go to sleep", done: false })       
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.done);
  }

  notComplete(): number {
    return this.todos.filter(todo => !todo.done).length
  }

  toggleDone(task: Todo): void {
    let todo: Todo = this.todos.find(todo => todo === task);
    todo.done = !todo.done;
  }

  createTodo(): void {
    if(this.newTodo.value){
      this.todos.push({id: this.todos.length + 1, name: this.newTodo.value, done: false});
      this.newTodo.reset();
    }
  }
}
