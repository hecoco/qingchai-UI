<template>
  <!-- v-model:selected="title" 没有写的话 默认为第一个 -->
  <!-- disabled 禁用 -->
  <div>
    <Demo :component='Tabs1Demo' />
  </div>
</template>
<script lang='ts'>
import Tabs1Demo from "./Tabs1.demo.vue";
import Demo from "../components/Demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Tabs1Demo };
  },
};
</script>