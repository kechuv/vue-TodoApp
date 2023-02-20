<template>
  <form
    class="todo-form"
    @submit.prevent="saveTodo(todoRef)"
  >
    <input
      v-model.trim="todoRef.todo"
      type="text"
      name="todo"
      @keyup.esc="resetTodo(todo)"
    />
    <button
      v-if="todoRef.id"
      type="button"
      class="cancel"
      @click="resetTodo(todo)"
    >
      Cancel
    </button>
    <button
      type="submit"
      class="submit"
    >
      Save
    </button>
  </form>
</template>

<script setup>
import { ref, toRef, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

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
const emit = defineEmits(['submit', 'cancel']);

/** @type {import('vue').Ref<Todo>} */
const todoRef = ref(getTodo());
watch(
  todo,
  (newTodo) => {
    if (!newTodo) return;
    todoRef.value = getTodo(newTodo);
  },
  { immediate: true }
);

/**
 * @function resetTodo
 * @param {Todo} todo 
 */
function resetTodo(todo) {
  todoRef.value = getTodo(todo);
  emit('cancel');
}

/**
 * @function saveTodo
 * @param {Todo} todo 
 */
function saveTodo(todo) {
  if (!todo.todo) return; 
  if (!todo.id) todo.id = uuidv4();
  emit('submit', todo);
  resetTodo();
}

/**
 * @function getTodo
 * @param {Todo} overrides 
 * @returns {Todo}
 */
function getTodo(overrides = {}) {
  return ({
    id: '',
    todo: '',
    done: false,
    userId: '',
    ...overrides
  });
}
</script>
