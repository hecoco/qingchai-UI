<template>
<h1>Button 文档</h1>
  <div>
    <Demo :component='Button1Demo' />
    <Demo :component='Button3Demo' />
    <Demo :component='Button4Demo' />
    <Demo :component='Button5Demo' />
  </div>
</template>

<script lang='ts'>
import Button from "../lib/Button.vue";
import Demo from "../components/Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";

export default {
  components: { Button, Demo },
  setup() {
    const onClick = () => {};
    return {
      onClick,
      Button1Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>