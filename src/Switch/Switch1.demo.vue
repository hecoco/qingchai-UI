<demo>
常规用法
</demo>
<template>
  <div>
    <Switch v-model:value="bool1" />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const bool1 = ref(false);
    return { bool1 };
  },
};
</script>