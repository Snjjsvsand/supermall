<template>
  <div id = "detail-goods-image">
      <div v-if = "Object.keys(detailInfo).length !== 0">
            <div class = "detail-desc">
                {{detailInfo.desc}}
            </div>
            <div class = "info-key">
                {{detailInfo.detailImage[0].key}}
            </div>
            <img v-for = "(item , index) in detailInfo.detailImage[0].list" :key = "index" :src="item" alt="" @load = "imgLoad">
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailGoodsImage',
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgLoad(){
            this.$bus.$emit('imgLoad');
        }
    }
}
</script>

<style scoped>
#detail-goods-image{
    padding: 0 0 5vh;
    border-bottom:6px solid rgb(247, 243, 243);
}
.detail-desc{
    font-size:14px;
    color:rgb(92, 92, 92);
    display: block;
    padding:5vh 3vw 3vh;
}
.info-key{
    padding:2vh 3vw;
    color:black;
}
img{
    width:100%;
}
</style>