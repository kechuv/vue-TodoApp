<template>
  <main>
    <TodoForm
      @submit="todoStore.add($event)"
    />
    <TodoList
      :todos="todoStore.todos"
      @update="todoStore.update($event)"
      @remove="todoStore.remove($event.id)"
    />
  </main>
</template>

<script setup>
import { useTodoStore } from '@/stores';
import { getStorage, setStorage } from '@/utils/localStorage';
import { defineAsyncComponent } from 'vue';

const TodoForm = defineAsyncComponent(() => import('@/components/TodoForm.vue'));
const TodoList = defineAsyncComponent(() => import('@/components/TodoList.vue'));

const todoStore = useTodoStore();
todoStore.getAll(() => getStorage('todos') || []);

todoStore.$subscribe(
  (_mutation, state) => {
    setStorage('todos', state.todos);
  },
  { detached: true }
);
</script>
