<template>
  <div class="qc-tabs">
    <div
      class="qc-tabs-nav"
      ref="container"
    >
      <div
        class="qc-tabs-nav-item"
        v-for="(t,index) in titles"
        :ref="el =>{if(el) navItems[index] =el}"
        @click="select(t)"
        :class="{selected: t===selected}"
        :key="index"
      > {{t}}</div>
      <div
        class="qc-tabs-nav-indicator"
        ref="indicator"
      ></div>
    </div>
    <div class="qc-tabs-content">
      <component
        class="qc-tabs-content-item"
        v-for="(c, index) in defaults"
        :class="{selected: c.props.title === selected }"
        :key="index"
        :is="c"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, onMounted, onUpdated, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const divs = navItems.value;
      const result = divs.filter(
        (div) => div.classList.contains("selected") //获取含有selected的div
      )[0];
      const { width, left: left2 } = result.getBoundingClientRect(); //获取含有selected的div的宽度
      const { left: left1 } = container.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.width = width + "px";
      indicator.value.style.left = left + "px";
    };
    onMounted(x);
    onUpdated(x);
    defaults.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });

    const titles = defaults.map((tab) => {
      return tab.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      select,
      navItems,
      indicator,
      container,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.qc-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 200ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
