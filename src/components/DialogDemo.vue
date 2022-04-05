<template>
  <div>
    <Dialog
      :visible="true"
      title="标题"
      @yes='fn1'
      @no='fn2'
    />
  </div>
</template>

<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
export default {
  components: { Dialog },
  setup() {
    const fn1 = () => {
      console.log(1);
    };
    return { fn1 };
  },
};
</script>