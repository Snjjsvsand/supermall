<template>
  <div id="goods-info" v-if = "Object.keys(goodsInfo).length != 0">
      <!-- 这个v-if保证了没拿到数据时暂时不显示信息，否则强行遍历数组,对象会出错 -->
      <!-- Object.keys 用来查询对象有几个属性 -->
      <div id="goods-title" v-html="'&nbsp;&nbsp;' + goodsInfo.title"></div>
      <div id="goods-price">
          <span class = "now-price">{{goodsInfo.price}}</span>
          <span class = "old-price">{{goodsInfo.oldPrice}}</span>
          <span class = "discount-desc">{{goodsInfo.discountDesc}}</span>
          <!-- describe -->
      </div>
      <div id="column">
          <span v-for = "index in goodsInfo.columns.length - 1" :key ="index">
              {{goodsInfo.columns[index - 1]}}
          </span>
          <span>{{goodsInfo.services[goodsInfo.services.length - 1].name}}</span>
      </div>
      <div id="service">
          <span v-for = "index in goodsInfo.services.length - 1" :key = "index">
            <img :src="goodsInfo.services[index - 1].icon" alt="">
            <span>{{goodsInfo.services[index - 1].name}}</span> 
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailGoodsInfo',
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
#goods-info{
    width:100%;
    padding: 2vh 3vw 0; 
    border-bottom: 6px solid rgb(247, 243, 243);
}
#goods-title{
    font-size:16px;
    font-weight:600;
    color:rgba(0, 0, 0, 0.87);
    line-height: 1.33;
}
#goods-price{
    padding:1vh 0 3vh;
}
.now-price{
    color:var(--color-high-text);
    font-size:22px;
    
}
.old-price{
    color:#666;
    font-size:14px;
    text-decoration:line-through;
    padding:0px 4px;
}
.discount-desc{
    font-size:12px;
    padding:2px;
    border-radius:9px;
    background-color:var(--color-tint);
    color:white;
    font-weight:500;
    vertical-align: 3px;
}
#column{
    display:flex;
    text-align:center;
    justify-content:space-between;
    border-bottom:solid 1px #eee;
    padding-bottom:1vh;
}
#column span{
    /* flex:1; */
    font-size:13px;
    color:rgb(124, 117, 117);
    
}
#service{
    height:12vh;
    display: flex;
    justify-content:space-between;
    
    align-items:center;
    
}
#service img{
    height:2vh;
    vertical-align:-2px;
}
#service span{
    font-size:4vw;
    color:black;
}
</style>
