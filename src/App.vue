<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'App'
}
</script>

<style>

@import './assets/css/reset.css';  /* 重置样式css */
@import './assets/css/reset.css';  /* 公用样式css */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
