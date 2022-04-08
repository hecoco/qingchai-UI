<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div
      class="demo-actions"
      @click="codeVisible=!codeVisible"
    >
      <svg
        class="icon"
        v-if="codeVisible"
      >
        <use xlink:href="#icon-xiangshang"></use>
      </svg>
      <svg
        class="icon"
        v-if="!codeVisible"
      >
        <use xlink:href="#icon-xiangxia"></use>
      </svg>
    </div>
    <div
      class="demo-code"
      v-show="codeVisible"
    >
      <pre
        class="language-html"
        v-html="html"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import { computed, ref } from "vue";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;
export default {
  components: { Button },
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.xx {
  border: 1px solid red;
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 2px 16px;
    border-top: 1px dashed $border-color;
    display: flex;
    justify-content: center;
    > svg {
      margin: 6px 0;
    }
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>