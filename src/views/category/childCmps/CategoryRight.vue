<template>
  <div id="category-right">
      <scroll class = "wrapper" ref = "scroll">
        <div id="item-list">
          <div class = "cate-item" v-for = "(item , index) in itemList" :key = "index">
              <a :href="item.link">
                <img :src="item.image" alt="" @load = "imgLoad">
                <div>{{item.title}}</div>
              </a>
          </div>
        </div>
      </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import {itemListenerMixin} from 'common/mixin'
export default {
    name:'CategoryRight',
    props:{
        itemList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            itemImgListener:null
        }
    },
    methods:{
        imgLoad(){
            this.$bus.$emit('imgLoad');
        }
    },
    activated(){
        this.$bus.$on('imgLoad' , this.itemImgListener);
    },
    updated(){
        this.$refs.scroll.scrollTo(0,0,0)
    },
    mixins:[itemListenerMixin],
    components:{
        Scroll
    }
    
    
}
</script>

<style scoped>
#category-right{
    margin-left:25vw;
}
#item-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.cate-item{
    margin:10px;
    width: 30vw;
    /* height:16vh; */
    /* overflow: hidden; */
    text-align: center;
}
.cate-item img{
    width: 80%;
}
.wrapper{
    position:absolute;
    top:44px;
    bottom:49px;
    width:75vw; 
    overflow: hidden;
}
</style>