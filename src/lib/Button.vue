<template>
  <button
    class="qc-button"
    :class="`qc-theme-${theme?theme:'button'}`"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    theme: String,
  },
  setup(props, context) {
    const { size, ...rest } = context.attrs;
    return { size, rest };
  },
};

//#00A1D6正常  #00B5E5悬浮 #80D0Eb禁止 蓝色
//#FB7299 #FC8BAB
//#ffffff #E3E5E7
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #00a1d6;
$radius: 4px;
.qc-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.qc-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.qc-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
}
</style>