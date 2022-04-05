<template>
  <div>
    <Button @click="toggle">打开Dialog</Button>
    <Dialog
      v-model:visible="x"
      :closeOnclickOverlay='false'
      :ok='f1'
      :cancel='f2'
    />
  </div>
</template>

<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      console.log(1);
      x.value = !x.value;
    };
    const f1 = () => {
      console.log(1);
    };
    const f2 = () => {
      console.log(2);
    };
    return { x, toggle, f1, f2 };
  },
};
</script>