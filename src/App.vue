<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/">Chao</router-link> |
    <router-link to="/Frank">Frank</router-link>
  <hr />
  <router-view></router-view>
</template>

<script>
import Chao from './components/Chao.vue'

export default {
  name: 'App',
  components: {
    Chao
  }
}
</script>
