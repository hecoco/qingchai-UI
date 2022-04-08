<demo>
标签页
</demo>
<template>
  <Tabs v-model:selected="title">
    <Tab title="标题一">内容一</Tab>
    <Tab title="标题二">内容二</Tab>
    <Tab title="标题三">内容三</Tab>
  </Tabs>
</template>
<script lang='ts'>
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: { Tab, Tabs },
  setup() {
    const title = ref("标题一");
    return { title };
  },
};
</script>