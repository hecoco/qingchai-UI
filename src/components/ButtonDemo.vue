<template>
  <div>
    <Button>button</Button>
    <Button theme='button'>button</Button>
    <Button theme='link'>链接</Button>
    <Button theme='text'>文本</Button>
  </div>
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