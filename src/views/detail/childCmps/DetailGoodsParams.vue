<template>
  <div id = "detail-goods-params" v-if = "goodsParams.size && goodsParams.infos">
      <div class="size">
          <tr v-for = "(tr , index) in goodsParams.size[0]" :key = "index" class = "params-size-tr">
              <td v-for = "(td , index) in tr" :key = "index">
                  {{td}}
              </td>
          </tr>
      </div>
      <div class="info">
          <tr v-for = "(item , index) in goodsParams.infos" :key = "index" class = "params-info-tr">
              <span class = "info-key">{{item.key}}</span>
              <span class = "info-value">{{item.value}}</span>
          </tr>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailGoodsParams',
    props:{
        goodsParams:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    #detail-goods-params{
         padding:2vh 3vw;
         color:#666666;
         border-bottom:6px solid rgb(247, 243, 243);
    }
    .size{
        margin-bottom:2vh;
    }
    .params-size-tr{
       
        display: flex;
        height:6vh;
        /* justify-content:space-between */
        border-bottom: 2px solid rgb(247, 243, 243);
        align-items: center;
    }
    .params-size-tr:nth-last-child(1){
        border-bottom: 2px solid rgb(230, 230, 230);
    }
    .params-size-tr td{
        flex:1;
    }

    .params-info-tr{
        display: flex;
        padding:2vh 0;
        align-items:center;
        border-bottom: 1px solid rgb(247, 243, 243);

    }

    .params-info-tr:nth-last-child(1){
        border-bottom:none;
    }
    
    .params-info-tr span{
        flex:1;
    }
    .info-value{
        margin-left:-25vw;
        color:var(--color-high-text);
    }
</style>