<template>
  <div class="todo">
    <input
      type="checkbox"
      :checked="todo.done"
      @change="$emit('toggleStatus')"
    />
    <template
      v-if="!edit"
    >
      <p>{{ todo.todo }}</p>
      <button
        type="button"
        @click="edit = true"
      >
        Edit
      </button>
    </template>
    <TodoForm
      v-else
      :todo="todo"
      @submit="handleEdit"
      @cancel="edit = false"
    />
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

function handleEdit($event) {
  emit('update', $event);
  edit.value = false;
}
</script>
