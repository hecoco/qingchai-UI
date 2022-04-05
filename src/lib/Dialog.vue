<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>title</header>
    <main>
      <p>文字1文字1文字</p>
      <p>文字2文字2文字</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  setup() {},
  components: { Button },
};
</script>