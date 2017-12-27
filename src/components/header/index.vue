<template>
  <div class="page-header">
    <span class="header-logo pull-left"></span>
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
  @import "../../common/css/variable.scss";
.page-header{
  height: 44px;
  background: $theme-color;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  .header-logo{
    width: 90px;
    height: 25px;
    background: url("../../common/img/logo.png") no-repeat 0 0;
    background-size: 100% 100%;
    margin: 9px 0 0 10px;
  }
}
</style>
