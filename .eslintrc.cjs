/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'indent': ['warn', 2],
    'semi': ['warn', 'always'],
    'eqeqeq': 'error',
    'max-depth': ['error', 3],
    'max-params': ['error', 3],
    'complexity': ['error', 5],
    'object-property-newline': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
          '&&': 'before',
          '||': 'before'
        }
      }
    ],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 1,
      'multiline': 1
    }],
    "vue/eqeqeq": "error"
  }
};
