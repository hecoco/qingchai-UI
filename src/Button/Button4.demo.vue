<demo>
禁用状态
</demo>
<template>
  <div>
    <Button
      disabled
      theme='button'
    >按钮禁用</Button>
    <Button disabled theme="danger">按钮禁用</Button>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>