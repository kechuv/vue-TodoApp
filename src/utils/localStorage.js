/**
 * @function getStorage
 * @param {string} key 
 */
export function getStorage(key) {
  const value = localStorage.getItem(key);
  if (!value) return;
  return JSON.parse(value);
}

/**
 * @function setStorage
 * @param {string} key
 * @param {*} value
 */
export function setStorage(key, value) {
  if (!value) return;
  localStorage.setItem(key, JSON.stringify(value));
}