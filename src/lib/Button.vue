<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context) {
    const { size, ...rest } = context.attrs;
    return { size, rest };
  },
};

//#00A1D6正常  #00B5E5悬浮 #80D0Eb禁止 蓝色
//#FB7299 #FC8BAB
//#ffffff #E3E5E7
</script>