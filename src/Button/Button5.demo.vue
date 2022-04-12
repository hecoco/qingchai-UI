<demo>
加载状态
</demo>
<template>
  <div>
    <Button :loading="loading">加载完成</Button>
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
    return {
      loading,
    }
  }
};
</script>