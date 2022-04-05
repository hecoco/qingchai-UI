<template>
  <div>
    <div>
      <Button>button</Button>
      <Button theme='button'>button</Button>
      <Button theme='link'>链接</Button>
      <Button theme='text'>文本</Button>
    </div>
    <div>大小</div>
    <div>
      <Button size='big'>大大大</Button>
      <Button>正常的</Button>
      <Button size='small'>小小小</Button>
    </div>
    <div>
      <Button
        size='big'
        theme='link'
      >大大大</Button>
      <Button theme='link'>正常的</Button>
      <Button
        size='small'
        theme='link'
      >小小小</Button>
    </div>
    <div>
      <Button
        size='big'
        theme='text'
      >大大大</Button>
      <Button theme='text'>正常的</Button>
      <Button
        size='small'
        theme='text'
      >小小小</Button>
    </div>
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
    <div>禁用按钮</div>
    <div>
      <Button
        disabled
        theme='button'
      >button</Button>
      <Button
        disabled
        theme='link'
      >链接</Button>
      <Button
        disabled
        theme='text'
      >文本</Button>
    </div>
  </div>
</template>

<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {};
    return { onClick };
  },
};
</script>