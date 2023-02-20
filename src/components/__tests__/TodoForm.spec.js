import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import TodoForm from '@/components/TodoForm.vue';

describe('TodoForm', () => {
  describe('New Todo', () => {
    const wrapper = mount(TodoForm);
    const input = wrapper.find('input');
    it('should render empty form', () => {
      expect(input.element.value).toBeFalsy();
    });
    it('should emit a new todo', async() => {
      const value = 'test todo';
      await input.setValue(value);
      await wrapper.find('form').trigger('submit.prevent');
      const emit = wrapper.emitted('submit');
      expect(emit[0][0]).toHaveProperty('id');
      expect(emit[0][0]).toHaveProperty('todo', value);
      expect(emit[0][0]).toHaveProperty('done');
      expect(emit[0][0]).toHaveProperty('userId');
    });
  });
  describe('Edit todo', () => {
    const wrapper = mount(TodoForm, {
      props: {
        todo: mockTodo
      }
    });
    const input = wrapper.find('input');
    it('should render todo to be edited', () => {
      expect(input.element.value).toBe('test todo');
    });
    it('should emit edited todo', async() => {
      const newValue = 'edited todo';
      await input.setValue(newValue);
      await wrapper.find('form').trigger('submit.prevent');
      const emit = wrapper.emitted('submit');
      expect(emit[0][0]).toHaveProperty('id', mockTodo.id);
      expect(emit[0][0]).toHaveProperty('todo', newValue);
      expect(emit[0][0]).toHaveProperty('done', mockTodo.done);
      expect(emit[0][0]).toHaveProperty('userId', mockTodo.userId);
    });
  });
});

const mockTodo = {
  id: '1',
  todo: 'test todo',
  done: false,
  userId: '1'
};