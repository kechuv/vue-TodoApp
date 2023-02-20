<template>
  <LayoutDefault>
    <RouterView />
  </LayoutDefault>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const LayoutDefault = defineAsyncComponent(() => import('@/layouts/LayoutDefault.vue'));
</script>