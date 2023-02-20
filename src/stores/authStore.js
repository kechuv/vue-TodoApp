import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  /**
   * @function state
   * @returns {State}
   */
  state: () => ({
    user: null
  }),
  getters: {},
  actions: {}
});

/**
 * @typedef {Object} State
 * @prop {User} user
 */

/**
 * @typedef {Object} User
 * @prop {string} id
 */