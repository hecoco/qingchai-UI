<template>
  <div>
    <Switch v-model:value='bool' />
  </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
//加文字https://www.iviewui.com/components/switch
export default {
  components: { Switch },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>