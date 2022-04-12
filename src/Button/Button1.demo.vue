<demo>
常规用法
</demo>
<template>
  <div>
    <Button>正常</Button>
    <Button theme='success'>成功</Button>
    <Button theme='warning'>警告</Button>
    <Button theme='danger'>危险</Button>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>