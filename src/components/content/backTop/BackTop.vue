<template>
  <div class = "back-top">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'BackTop'
}
</script>

<style scoped>
    /* 多个组件共用的样式（在多个组件中这个组件都是这么显示的）可以写在本组件里 */
    .back-top{
        width: 47px;
        height:47px;
        position:absolute;
        bottom:59px;
        right:7px;
        z-index:9;
    }
    .back-top img{
        height:100%;
        vertical-align:bottom;
    }
</style>