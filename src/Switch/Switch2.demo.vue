<demo>
支持 disabled
</demo>
<template>
  <div>
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
    const bool2 = ref(false);
    return { bool2 };
  },
};
</script>