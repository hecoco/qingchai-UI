<demo>
禁用按钮
</demo>
<template>
  <div>
    <Button
      disabled
      theme='button'
    >常用按钮</Button>
    <Button
      disabled
      theme='link'
    >链接</Button>
    <Button
      disabled
      theme='text'
    >文本</Button>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>