<template>
  <div>
    <TodoRow
      v-for="(todo, todoIndex) in todos"
      :key="todoIndex"
      :todo="todo"
      @update="$emit('update', $event)"
      @toggle-status="toggleStatus(todo)"
      @remove="$emit('remove', todo)"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent, toRef } from 'vue';

const TodoRow = defineAsyncComponent(() => import('./TodoRow.vue'));
const props = defineProps({
  todos: {
    type: Array,
    required: false,
    default: () => ([])
  }
});
const emit = defineEmits(['update', 'remove']);
/** @typedef {import('@/stores/todoStore').Todo} Todo */
/** @type {import('vue').Ref<Todo[]>} */
const todos = toRef(props, 'todos');

/**
 * @function toggleStatus
 * @param {Todo} todo 
 */
function toggleStatus(todo) {
  todo.done = !todo.done;
  emit('update', todo);
}
</script>
