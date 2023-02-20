import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTodoStore } from '../todoStore';

describe('Todo store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should get all todos', async() => {
    const todoStore = useTodoStore();
    expect(todoStore.todos.length).toBe(0);
    await todoStore.getAll(getTodos);
    expect(todoStore.todos.length).toBe(5);
  });
  it('should add a todo', () => {
    const todoStore = useTodoStore();
    expect(todoStore.todos.length).toBe(0);
    const todo = getTodos()[0];
    todoStore.add(todo);
    expect(todoStore.todos.length).toBe(1);
  });
  it('should update a todo', () => {
    const todoStore = useTodoStore();
    const todo = getTodos()[0];
    todoStore.add(todo);
    expect(todoStore.todos[0]).toEqual(todo);
    const newDone = !todo.done;
    const newTodo = 'this is an updated todo';
    todo.done = newDone;
    todo.todo = newTodo;
    todoStore.update(todo);
    expect(todoStore.todos[0].done).toBe(newDone);
    expect(todoStore.todos[0].todo).toBe(newTodo);
  });
  it('should delete a todo', async() => {
    const todoStore = useTodoStore();
    await todoStore.getAll(getTodos);
    expect(todoStore.todos.length).toBe(5);
    const selectedTodo = todoStore.todos.at(1);
    todoStore.remove(selectedTodo.id);
    expect(todoStore.todos.length).toBe(4);
    expect(todoStore.todos.find((todo) => todo.id === selectedTodo.id)).toBeUndefined();
  });
});

function getTodos() {
  return ([
    {
      id: '0',
      todo: 'Do something 0',
      done: false,
      userId: '0'
    },
    {
      id: '1',
      todo: 'Do something 1',
      done: true,
      userId: '0'
    },
    {
      id: '2',
      todo: 'Do something 2',
      done: false,
      userId: '0'
    },
    {
      id: '3',
      todo: 'Do something 3',
      done: true,
      userId: '0'
    },
    {
      id: '4',
      todo: 'Do something 4',
      done: false,
      userId: '0'
    }
  ]);
}
