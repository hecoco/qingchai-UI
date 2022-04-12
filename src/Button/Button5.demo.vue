<demo>
加载
</demo>
<template>
  <div>
    <Button :loading="x">加载中</Button>
    <Button loading theme='success'>成功</Button>
    <Button loading theme='warning'>警告</Button>
    <Button loading theme='danger'>危险</Button>
    <Button :loading="xx" theme='danger'>危险</Button>
  </div>
</template>
<script lang='ts'>
import { onBeforeUpdate, ref } from 'vue';
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup(){
    const x=ref(true)
    const xx = ref(false)
    setTimeout(() => {
      x.value=false
    }, 1000);
    onBeforeUpdate(()=>{
      setTimeout(() => {
        x.value=false
      }, 1000);
    })
    return {x,xx}
  }
};
</script>