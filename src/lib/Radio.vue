<template>
  <label name="S">
    <input type="radio" :name="name">
    <span>
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
  },
  emits: ['update:modelValue'],
  setup(props) {
    console.log(props.name)
  }
};
</script>

<style lang="scss">
</style>