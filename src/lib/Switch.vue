<template>
  <button
    class="qc-switch"
    :class="{'qc-checked':value}"
    @click="toggle"
  ><span></span></button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.qc-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #ccd0d7;
  border-radius: $h/2;
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #ffffff;
    border-radius: $h2/2;
    transition: ease 0.2s;
  }
  &.qc-checked {
    background: #00a1d6;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.qc-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>