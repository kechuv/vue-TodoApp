import { describe, it, expect, beforeEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';

import TodoRow from '@/components/TodoRow.vue';
import TodoForm from '@/components/TodoForm.vue';

describe('TodoRow', () => {
  const wrapper = mount(TodoRow, {
    props: {
      todo: mockTodo
    },
    global: {
      components: {
        TodoForm
      }
    }
  });
  it('should render todo', () => {
    expect(wrapper.find('.text').exists()).toBe(true);
    expect(wrapper.find('.text').text()).toBe(mockTodo.todo);
    expect(wrapper.find('input[type=checkbox]').element.checked).toBe(true);
    const editForm = wrapper.find('form');
    expect(editForm.exists()).toBe(false);
  });
  it('should render edited text', async() => {
    const newText = 'new text';
    const newTodo = { ...mockTodo };
    newTodo.todo = newText;
    await wrapper.setProps({ todo: newTodo });
    expect(wrapper.find('.text').text()).toBe(newText);
  });
  it('should emit toggled status', async() => {
    await wrapper.find('input[type=checkbox]').setValue(false);
    expect(wrapper.emitted('update')[0][0].done).toBe(false);
    await wrapper.find('input[type=checkbox]').setValue(true);
    expect(wrapper.emitted('update')[0][0].done).toBe(true);
  });
  it('should render edit form', async() => {
    await wrapper.find('.edit').trigger('click');
    await flushPromises();
    expect(wrapper.find('.text').exists()).toBe(false);
    expect(wrapper.find('form').exists()).toBe(true);
  });
  describe('should render back todo text', () => {
    beforeEach(async() => {
      if (!wrapper.find('form').exists()) {
        await wrapper.find('.edit').trigger('click');
      }
    });
    it('on cancel', async() => {
      const cancelButton = wrapper.find('.cancel');
      await cancelButton.trigger('click');
      expect(wrapper.find('.text').exists()).toBe(true);
      expect(wrapper.find('form').exists()).toBe(false);
    });
    it('on submit', async() => {
      const submitButton = wrapper.find('.submit');
      await submitButton.trigger('submit.prevent');
      expect(wrapper.find('.text').exists()).toBe(true);
      expect(wrapper.find('form').exists()).toBe(false);
    });
  });
});

const mockTodo = {
  id: '1',
  todo: 'test todo',
  done: true,
  userId: '1'
};