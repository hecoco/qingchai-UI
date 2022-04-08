<demo>
    对话框
</demo>
<template>
  <div>
    <Button @click="showDialog">简易对话框</Button>
  </div>
</template>

<script lang=ts>
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "开始打开",
        content: "内容",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>