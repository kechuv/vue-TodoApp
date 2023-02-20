<template>
  <div class="todo">
    <input
      type="checkbox"
      :checked="todo.done"
      @change="toggleStatus(todo)"
    />
    <template
      v-if="!edit"
    >
      <p class="text">{{ todo.todo }}</p>
      <button
        class="edit"
        type="button"
        @click="edit = true"
      >
        Edit
      </button>
    </template>
    <template
      v-else
    >
      <span></span>
      <TodoForm
        :todo="todo"
        @submit="handleEdit"
        @cancel="edit = false"
      />
    </template>
    <button
      type="button"
      @click="$emit('remove')"
    >
      delete
    </button>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, toRef } from 'vue';
// import TodoForm from './TodoForm.vue';

const TodoForm = defineAsyncComponent(() => import('./TodoForm.vue'));

const props = defineProps({
  todo: {
    type: Object,
    required: false,
    default: undefined
  }
});
/** @typedef {import('@/stores/todoStore').Todo} Todo */
/** @type {import('vue').Ref<Todo>} */
const todo = toRef(props, 'todo');

const emit = defineEmits(['update', 'remove', 'toggleStatus']);

const edit = ref(false);

/**
 * @function handleEdit
 * @param {Todo} $event 
 */
function handleEdit($event) {
  emit('update', $event);
  edit.value = false;
}

/**
 * @function toggleStatus
 * @param {Todo} todo 
 */
function toggleStatus(todo) {
  todo.done = !todo.done;
  handleEdit(todo);
}
</script>
