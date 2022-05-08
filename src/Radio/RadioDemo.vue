<template>
  <h1>Radio 文档</h1>
  <div>
    <Demo :component="Radio1Demo" />
  </div>
</template>

<script lang='ts'>
import Demo from '../components/Demo.vue';
import Radio1Demo from './Radio1.demo.vue';
export default {
  components:{ Demo },
  setup() {
    return { Radio1Demo }
  },
};
</script>