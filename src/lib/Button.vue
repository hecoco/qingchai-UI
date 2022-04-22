<template>
  <button
    class="qc-button"
    :class="classes"
    :disabled="disabled"
  >
    <span
      v-if="loading"
      class="qc-loadingIndicator"
    ></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  
  setup(props,context) {
    const { theme, size, level, loading } = props;
    const classes = computed(() => {
      return {
        [`qc-theme-${theme}`]: theme,
        [`qc-size-${size}`]: size,
        [`qc-level-${level}`]: level,
        [`qc-loading-${loading}`]: loading,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #00a1d6;
$radius: 4px;
$red: red;
$grey: grey;
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
  transition: background 250ms;
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
  &.qc-theme-link {//链接
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.qc-theme-text {//文本
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.qc-size-big {
    font-size: 24p;
    height: 48px;
    padding: 0 16px;
  }
  &.qc-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.qc-theme-button {//普通按钮
    .qc-loadingIndicator{//如果是普通按钮
      border-color: $blue $blue $blue transparent;
  }
  }
  &.qc-theme-danger{//危险按钮
    background: #EB4646;
    color: white;
    
  }
  &.qc-theme-warning{//警告按钮
    background: #F59B00;
    color: white;
  }
  &.qc-theme-success{//成功按钮
    background: #1CAD70;
    color: white;
  }
  &.qc-theme-link {//链接
    &.qc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.qc-theme-text {//文本
    &.qc-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.qc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  > .qc-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: white white white transparent;
    border-style: solid;
    border-width: 2px;
    animation: qc-spin 1s infinite linear;
  }
}
@keyframes qc-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
[disabled] {//禁用
  opacity:var(--ui-opacity,0.4);
}
</style>