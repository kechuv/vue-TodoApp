<template>
  <LayoutRows
    class="layout-default"
  >
    <template #header>
      TODO App
    </template>
    <slot></slot>
    <template #footer>
      By: Kheops Valencia
    </template>
  </LayoutRows>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const LayoutRows = defineAsyncComponent(() => import('./LayoutRows.vue'));
</script>

<style lang="scss">
.layout-default {
  min-height: 100vh;
}
</style>
