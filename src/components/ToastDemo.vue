<template>
  <div>
      <Button>打开Toast</Button>
      <Toast message="title" ></Toast>
      <Toast message="title"></Toast>
  </div>
</template>

<script lang="ts">

import Toast from '../lib/Toast.vue';
import Button from '../lib/Button.vue'
export default {
  components: { Toast,Button },
  setup() {
  },
};
</script>

<style lang="scss" scoped>

</style>