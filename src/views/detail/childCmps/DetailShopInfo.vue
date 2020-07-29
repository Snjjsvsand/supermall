<template>
  <div id="shop-info">
      <div id="shop-title">
          <img :src="shopInfo.shopLogo" alt="">
          <span>{{shopInfo.name}}</span>
      </div>
      <div id="shop-main">
          <div id = "shop-main-left">
            <div>
                <div>{{(shopInfo.cSells / 10000).toFixed(1) }}万</div>
                <div class = "shop-left-info">总销量</div>
            </div>
            <div id = "divider">
                <div>{{shopInfo.cGoods}}</div>
                <div class = "shop-left-info">全部宝贝</div>
            </div>
          </div>

          <div id = "shop-main-right"> 
              <div v-for = "(item,index) in shopInfo.score" :key = "index">
                  <span>{{item.name}}</span>
                  <span :style = "{color:compuColor(index)}">{{item.score}}</span>
                  <span class = "is-better" 
                  :style = "{backgroundColor:compuColor(index)}">{{item.isBetter ? '高' : '低'}}</span>
              </div>
          </div>
      </div>
      <a href="" id = "shop-enter">
              进店逛逛
      </a>
  </div>
</template>

<script>
export default {
    name:'DetailShopInfo',
    props:{
        shopInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        compuColor(index){
            if(this.shopInfo.score[index].isBetter){
                return '#fc4903'
            }else{
                return '#13bb13'
            }
        }
    }
}
</script>

<style>
#shop-info{
    padding:0 3vw 4vh;
    color:black;
    border-bottom:6px solid rgb(247, 243, 243);
}
#shop-title {
    height:12vh;
    line-height:12vh;
}
#shop-title img{
    vertical-align:-2.4vh;
    border:2px solid #eee;
    border-radius:50%;
    height:7vh;
    width:7vh;
}
#shop-title span{
    margin-left:3vw;
    font-size:5vw;
}
#shop-main{
    height:12vh;
    display:flex;
    font-size:4vw;
    justify-content:space-evenly;
    line-height:1.5;
    margin-top:-2vh;
}
#shop-main-left{
    padding-left:30px;
    width: 50%;
    display:flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    
}
#divider{
    padding-right:30px;
    border-right:1.3px solid #eee;
}
.shop-left-info{
    font-size:3.5vw;
}
#shop-main-right{
    width:45%;
    padding-top:3px;
}
#shop-main-right div{
    text-align: left;
    display:flex;
    justify-content: space-between;
    line-height:1.6;
    font-size:3.8vw;

}
.is-better{
    margin-top: 1.3vw;
    color:white;
    background-color:#fc4903;
    font-size:3.8vw;
    line-height: 1;
    height:3.8vw;
    border-radius: 2px;
}
#shop-enter{
    display: block;
    margin:2vh auto;
    text-align:center;
    width: 40vw;
    padding:.5vh;
    border-radius:11px;
    background-color:rgba(241, 244, 247, 0.945);
}

</style>