<template>
  <component
    :is="tag"
    class="layout-rows"
  >
    <header>
      <slot name="header"></slot>
    </header>
    <main :class="[{ 'scroll': scroll }]">
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    required: false,
    default: 'div'
  },
  footerSlot: {
    type: Boolean,
    required: false,
    default: false
  },
  scroll: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>

<style lang="scss">
.layout-rows {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  gap: 0.5rem;

  .scroll {
    height: 100%;
    position: relative;
    overflow: auto;
  }
  .scroll > * {
    position: absolute;
  }
}
</style>
