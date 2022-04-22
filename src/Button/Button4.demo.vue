<demo>
禁用状态
</demo>
<template>
  <div>
    <Button
      disabled
      theme='button'
    >按钮禁用</Button>
    <Button :disabled="disabled" theme="danger">按钮禁用</Button>
    <Button @click="cancel" theme="danger">取消禁用</Button>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/Button.vue";
import {ref} from 'vue'
export default {
  components: { Button },
  setup(){
    const disabled = ref(true)
    const cancel = ()=>{
      disabled.value = false
    }
    return {disabled,cancel}
  }
};
</script>