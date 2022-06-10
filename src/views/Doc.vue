<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-show="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to='/doc/intro'>介绍</router-link>
          </li>
          <li>
            <router-link to='/doc/install'>安装</router-link>
          </li>
          <li>
            <router-link to='/doc/get-started'>开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <!-- <li>
            <router-link to="/doc/select">Select 组件</router-link>
          </li> -->
          <!-- <li>
            <router-link to="/doc/toast">1111</router-link>
          </li> -->
        </ol>
        <!-- <h2>其他项目</h2>
        <ol>
          <li>
            <routerLink>记一笔</routerLink>
            <routerLink>手绘</routerLink>
            <routerLink></routerLink>
          </li>
        </ol> -->
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //???
    return { menuVisible };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  // background: lightblue;
  background: white;
  border-right: 2px solid #efeff5;
  width: 150px;
  position: fixed;
  top: 70px;
  left: 0;
  padding-top: 0;
  height: 100%;

  >h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  >ol {
    >li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }

      .router-link-active {
        background: #2A80EB;
        color: white;
      }
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 70px;
    left: 0;
    padding-top: 0;
    z-index: 20;
  }
}

main {
  overflow: auto;
}
</style>