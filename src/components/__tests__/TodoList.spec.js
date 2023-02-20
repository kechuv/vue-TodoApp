import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import TodoList from '@/components/TodoList.vue';

describe('TodoList', () => {
  const wrapper = mount(TodoList, {
    props: {
      todos: mockTodoList
    }
  });

  it('should render todos', () => {
    const todos = wrapper.findAll('.todo-row');
    expect(todos.length).toEqual(3);
  });
});

const mockTodoList = [
  {
    id: '1',
    todo: 'test todo',
    done: false,
    userId: '1'
  },
  {
    id: '2',
    todo: 'test todo 2',
    done: false,
    userId: '2'
  },
  {
    id: '3',
    todo: 'test todo 3',
    done: false,
    userId: '3'
  }
];
