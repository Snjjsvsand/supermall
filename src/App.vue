<template>
  <div id="app">
    <keep-alive exclude = "Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar v-show = "!$store.state.isDetail"></tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/content/TabBar'
  export default{
    name:'App',
    components:{
      TabBar
    }
  }
</script>

<style>
/* 这里也要加~ */
 @import "~assets/css/base.css";
</style>
