<template>
  <button
    class="qc-button"
    :class="classes"
    :disabled='disabled'
  >
    <span
      v-if="loading"
      class="qc-loadingIndicator"
    ></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
export default {
  inheritAttrs: false,
  props: {
    // theme: String,
    // size: String,
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
  setup(props) {
    const { theme, size, level, loading } = props;
    const classes = computed(() => {
      return {
        // [`qc-theme-${theme ? theme : "button"}`]: theme,
        // [`qc-size-${size ? size : size}`]: size,
        [`qc-theme-${theme}`]: theme,
        [`qc-size-${size}`]: size,
        [`qc-level-${level}`]: level,
        [`qc-loading-${loading}`]: loading,
      };
    });
    console.log(classes);
    return { classes };
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
  &.qc-theme-button {
    &.qc-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &focus {
        background: darken($blue, 10%);
        border-collapse: darken($blue, 10%);
      }
    }
    &.qc-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.qc-theme-link {
    &.qc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.qc-theme-text {
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
  &.qc-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.qc-theme-link,
  &.qc-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .qc-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
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
</style>