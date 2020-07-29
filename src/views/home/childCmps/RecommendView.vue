<template>
  <div id = "recommend-view">
      <div v-for = "item in recommend" :key = "item.index" class = "recommend-item">
          <a :href="item.link">
            <img :src="item.image" alt="" @load = "imgLoad">
            <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        imgLoad(){
            this.$store.commit('changeImgLoad');
        }
    }
}
</script>

<style>
#recommend-view{
    display:flex;
    width:100%;
    text-align:center;
    /* height:40px; */
    padding:13px 0px 35px;
    border-bottom:8px solid #eee;
}
.recommend-item{
    height:60px;
    flex:1;
    font-size:14px;
}
.recommend-item img{
    height:100%;
    margin-bottom:7px;
}
</style>