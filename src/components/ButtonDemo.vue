<template>
  <Button @click="onClick">
    button
  </Button>
</template>

<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {};
    return { onClick };
  },
};
</script>