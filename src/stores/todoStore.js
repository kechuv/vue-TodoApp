import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  /** @type {import('vue').Ref<Todo[]>} */
  const todos = ref([]);

  /**
   * @async
   * @function getAll
   * @param {GetAll} cb 
   */
  async function getAll(cb) {
    const resp = await cb();
    todos.value = resp;
  }

  /**
   * @function add
   * @param {Todo} todo 
   */
  function add(todo) {
    todos.value.push(todo);
  }

  /**
   * @function update
   * @param {Todo} updatedTodo 
   */
  function update(updatedTodo) {
    const todoIndex = todos.value.findIndex((todo) => todo.id === updatedTodo.id);
    if (todoIndex < 0) return;
    todos.value[todoIndex] = updatedTodo;
  }

  /**
   * @function remove
   * @param {string} todoId
   */
  function remove(todoId) {
    todos.value = todos.value.filter((todo) => todo.id !== todoId);
  }

  return {
    todos,
    getAll,
    add,
    update,
    remove
  };
});

/**
 * @typedef {Object} Todo
 * @prop {string} id
 * @prop {string} todo
 * @prop {boolean} done
 * @prop {string} userId
 */

/**
 * @callback GetAll
 * @returns {Promise<Todo[]>|Todo[]}
 */