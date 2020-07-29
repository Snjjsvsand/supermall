<template>
    <div id = "tab-bar-container">
        <slot>
        <tab-bar-item path = "/home">
          <img slot = "tabbar-icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot = "tabber-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
          <div slot = "tabbar-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path = "/category">
          <img slot = "tabbar-icon" src="~assets/img/tabbar/category.svg" alt="">
          <img slot = "tabber-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
          <div slot = "tabbar-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path = "/cart">
          <img slot = "tabbar-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
          <img slot = "tabber-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
          <div slot = "tabbar-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path = "/profile"> <!--activeColor = "pink" -->
          <img slot = "tabbar-icon" src="~assets/img/tabbar/profile.svg" alt="">
          <img slot = "tabber-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
          <div slot = "tabbar-text">我的</div>
        </tab-bar-item>
        </slot>
    </div>
</template>

<script>
import TabBarItem from 'components/common/TabBarItem'

export default {
    name:'TabBar',
    components:{
        TabBarItem
    }
}
</script>

<style>
    #tab-bar-container{
        width: 100%;
        height:49px;
        background-color:#bfa;
        background-color:#f6f6f6;
        position:fixed;
        left:0;
        bottom:0;
        box-shadow:0px -1px -3px rgba(0,0,0,.2);
        display: flex;
        justify-content: space-evenly;
    }

</style>