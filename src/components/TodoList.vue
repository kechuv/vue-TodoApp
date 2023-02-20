<template>
  <ul class="todo-list">
    <li
      v-for="(todo, todoIndex) in todos"
      :key="todoIndex"
      class="todo-row"
    >
      <TodoRow
        :todo="todo"
        @update="$emit('update', $event)"
        @remove="$emit('remove', todo)"
      />
    </li>
  </ul>
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
defineEmits(['update', 'remove']);

/** @typedef {import('@/stores/todoStore').Todo} Todo */
/** @type {import('vue').Ref<Todo[]>} */
const todos = toRef(props, 'todos');
</script>
