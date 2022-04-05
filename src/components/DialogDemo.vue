<template>
  <div>
    <Button @click="toggle">打开Dialog</Button>
    <Dialog
      v-model:visible="x"
      :closeOnclickOverlay='false'
      :ok='f1'
      :cancel='f2'
    >
      <div>111</div>
    </Dialog>
    <div>快速打开</div>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      console.log(1);
      x.value = !x.value;
    };
    const f1 = () => {};
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "hi",
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>