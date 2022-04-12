<demo>
加载
</demo>
<template>
  <div>
    <Button :loading="loading" @click="loading=true">加载完成</Button>
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
    const loading = ref(false);
    const jia = ()=>{
      setTimeout(() => {
        loading.value = true
      }, 3000);
    }
    return {
      loading,
      jia
    }
  }
};
</script>