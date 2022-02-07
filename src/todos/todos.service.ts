import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: '1',
      title: 'Finish the project',
      description: 'This is the most important thing to do for today.',
    },
    {
      id: '2',
      title: 'Clean house',
      description:
        'For you to function properly, we need a comfortable environment.',
    },
    {
      id: '3',
      title: 'Groceries',
      description: 'We need food. Simple.',
    },
  ];

  getAllTodos(): Todo[] {
    console.log(
      'getAllTodos -- id of last arr element',
      this.todos[this.todos.length - 1].id,
    );
    console.log(
      'getAllTodos -- index of last arr element',
      this.todos.indexOf(this.todos[this.todos.length - 1]),
    );
    return this.todos;
  }

  findTodo(id: string): Todo {
    return this.todos.find((todo) => (todo.id === id ? todo : null));
  }

  addTodo(newTodo: Todo): Todo[] {
    if (!newTodo.id) {
      this.todos.filter((todo) => {
        Number(todo.id) == this.todos.length + 1
          ? (newTodo.id = todo.id + 1)
          : (newTodo.id = String(this.todos.length + 1));
      });
    }
    this.todos.push(newTodo);
    console.log('addTodo -- index of new todo', this.todos.indexOf(newTodo));
    return this.todos;
  }

  deleteTodo(id: string): void {
    const selectedTodo = this.findTodo(id);
    console.log('deleteTodo', { selectedTodo });
    console.log('deleteTodo', this.todos.indexOf(selectedTodo));
    if (selectedTodo !== undefined)
      this.todos.splice(this.todos.indexOf(selectedTodo), 1);
  }

  updateTodo(id: string, updatedTodo: Todo): Todo[] {
    const todoToUpdate = this.findTodo(id);
    console.log('updateTodo', { todoToUpdate });
    console.log('updateTodo', { updatedTodo });
    return this.todos.splice(this.todos.indexOf(todoToUpdate), 1, updatedTodo);
  }
}
