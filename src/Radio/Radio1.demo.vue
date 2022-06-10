<demo>
常规用法
</demo>
<template>
  <div>
    <qc-radio v-model="cat" :label="1">小黑</qc-radio>
    <qc-radio v-model="cat" :label="2">佩岭</qc-radio>

    <qc-radio v-model="mao" :label="1">小黑</qc-radio>
    <qc-radio v-model="mao" :label="2">佩岭</qc-radio>
  </div>
</template>
<script lang='ts'>
import { ref } from 'vue';
import qcRadio from '../lib/Radio.vue'
export default {
  components: { qcRadio },
  setup() {
    const cat = ref("1");
    const mao = ref("1")
    return { cat, mao }
  }
};
</script> 