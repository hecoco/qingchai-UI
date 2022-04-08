<template>
  <div>
    <div>颜色</div>
    <div>
      <div>
        <Button level='main'>主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level='danger'>警告按钮</Button>
      </div>
      <div>
        <Button
          level='main'
          theme='link'
        >链接按钮</Button>
        <Button theme='link'>普通链接按钮</Button>
        <Button
          level='danger'
          theme='link'
        >警告链接按钮</Button>
      </div>
      <div>
        <Button
          level='main'
          theme='text'
        >文本按钮</Button>
        <Button theme='text'>普通文本按钮</Button>
        <Button
          level='danger'
          theme='text'
        >警告文本按钮</Button>
      </div>
    </div>
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