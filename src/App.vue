<template>
  <div id="app" class="app">
    <header-nav></header-nav>
    <nav-tab></nav-tab>
    <router-view/>
  </div>
</template>

<script>
  import headerNav from 'components/header/index.vue'
  import navTab from 'components/navtab/index.vue'
export default {
  name: 'app',
  components:{
    headerNav,
    navTab
  }
}
</script>

<style lang="scss" scoped>
  .app{
    padding-top: 44px;
  }
</style>
