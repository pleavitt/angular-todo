export class Todo {
    id: number;
    name: string;
    done: boolean;
  }

export class TodoList {
    name: string;
    todos: Todo[];
}