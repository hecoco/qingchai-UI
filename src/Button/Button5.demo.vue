<demo>
加载状态
</demo>
<template>
  <div>
    <Button :loading="x" @click="ok">{{text}}</Button>
    <Button loading theme='success'>成功</Button>
    <Button loading theme='warning'>警告</Button>
    <Button loading theme='danger'>危险</Button>
  </div>
</template>
<script lang='ts'>
import { toRef  , ref, reactive } from 'vue';
import Button from "../lib/Button.vue";
import Switch from '../lib/Switch.vue';
export default {
  components: { Button ,Switch},

  setup(){
    const x = ref(false)
    const text = ref('点击加载')
    const ok = ()=>{
      x.value = true
      text.value='加载中'
    }
    return {x,ok,text}
  }
};
</script>