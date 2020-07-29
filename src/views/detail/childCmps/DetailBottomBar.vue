<template>
  <div id="detail-bottom-bar">
      <div id="bottom-bar-left">
          <div>
              <i class = "icon service"></i>
              <span class = "text">客服</span>
          </div>
          <div>
              <i class = "icon shop"></i>
              <span class = "text">店铺</span>
          </div>
          <div>
              <i class = "icon favo"></i>
              <span class = "text">收藏</span>
          </div>
      </div>
      <div id="bottom-bar-right">
          <div id="add-cart" @click = "addCart">
              <span>加入购物车</span>
          </div>
          <div id="buy">
              购买
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    methods:{
        addCart(){
            this.$emit('addCart');
        }
    }
}
</script>

<style scoped>
    #detail-bottom-bar{
        position:absolute;
        bottom:0px;
        height:49px;
        background-color:red;
        width:100vw;
        display:flex;
    }
    #detail-bottom-bar>div{
        height:49px;
        width:50vw;
    }
    #bottom-bar-left{
        background-color:white;
        display:flex;
    }
    #bottom-bar-left div{
        flex:1;
        text-align: center;
        font-size:14px;
        color:black;
    }
    #bottom-bar-right{
        display: flex;
    }
    #bottom-bar-right div{
        width:25vw;
        text-align: center;
        padding-top:15px;
        
    }
    #add-cart{
        background-color:yellow;
        
    }
    #buy{
        background-color:#ff8198;
        color:white;
    }
    .icon{
        display: block;
        height:22px;
        width:22px;
        margin: 5px auto 3px;
        background:url('~assets/img/detail/detail_bottom.png') 0 0/100%;
        /* background-repeat:no-repeat; */
        /* background-position: 0 -98px; */

    }
    .service{
        background-position:0 -54px;
    }
    .shop{
        background-position:0 -98px;
    }
</style>