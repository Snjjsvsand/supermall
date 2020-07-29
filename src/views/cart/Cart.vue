<template>
    <div id = "cart">
      <top-bar>
        <div slot = "center">购物车({{$store.state.cartList.length}})</div>
      </top-bar>
      <scroll class = "wrapper" ref = "cartScroll">
        <cart-list></cart-list>
      </scroll>
      <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import TopBar from 'components/common/TopBar'
import CartList from './childCmp/CartList'
import CartBottomBar from './childCmp/CartBottomBar'
export default {
  name:'Cart',
  components:{
    TopBar,
    CartList,
    CartBottomBar,
    Scroll
  },
  activated(){
    this.$refs.cartScroll.refresh();
  },
  // deactivated(){
  //   this.$refs.cartScroll.refresh();
  // }
}
</script>

<style scoped>
.wrapper{
  position: absolute;
  bottom:89px;
  top:44px;
  overflow: hidden;
}
</style>