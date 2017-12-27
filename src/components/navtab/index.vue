<template>
  <div class="nav-tab text-center">
    <router-link class="nav-item" tag="span" to="/recommend">推荐</router-link>
    <router-link class="nav-item" tag="span" to="/rank">排行榜</router-link>
    <router-link class="nav-item" tag="span" to="/search">搜索</router-link>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    }
  }
</script>
<style lang='scss' scoped>
  @import "../../common/css/variable";
  .nav-tab{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: $gray-color;
    .nav-item{
      flex: 1;
      height: 40px;
      line-height: 40px;
      font-size: $font-middle;
      position: relative;
    }
  }
  .router-link-active{
    color: $theme-color;
    &::after{
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: $theme-color;
    }
  }

</style>
