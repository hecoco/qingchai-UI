<demo>
支持 disabled 禁用状态
</demo>
<template>
  <div>
    <Switch
      disabled
      v-model:value="bool1"
    />
    &nbsp;
    <Switch
      disabled
      v-model:value="bool2"
    />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const bool1 = ref(true);
    const bool2 = ref(false);
    return {bool1, bool2 };
  },
};
</script>