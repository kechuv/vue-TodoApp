<template>
  <component
    :is="tag"
  >
    <aside>
      <slot name="left"></slot>
    </aside>
    <main>
      <slot></slot>
    </main>
    <aside>
      <slot name="right"></slot>
    </aside>
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    required: false,
    default: 'div'
  }
});
</script>
