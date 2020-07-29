<template>
  <div id="category-left">
      <scroll class = "wrapper" ref = "scroll">
        <category-left-item 
        v-for = "(item , index) in categoryList" :key = "index" 
        :categoryItem = "item"
        @click.native = "cateClick(index)"
        :class = "{active : index == currentIndex}">

        </category-left-item>
      </scroll>
  </div>
</template>

<script>

import CategoryLeftItem from './CategoryLeftItem'
import Scroll from 'components/common/scroll/Scroll'
export default {
    name:'CategoryLeft',
    props:{
        categoryList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    components:{
        CategoryLeftItem,
        Scroll
    },
    methods:{
        cateClick(index){
            this.currentIndex = index;
            this.$emit('changeList' , index);
        }
    },
    mounted(){
        console.log(this.$refs.scroll.scroll)
        setTimeout(()=>{
            this.$refs.scroll.refresh()
        }, 500)
    }
}
</script>

<style scoped>
#category-left{
    width:25vw;
}
.wrapper{
    padding-top: 1px;
    position: absolute;
    overflow: hidden;
    top:44px;
    bottom:49px;
    background-color: rgb(247, 247, 247);
}
.active{
    border-left:1vw solid rgb(255, 129, 152);
    background-color: #fff;
    width:25vw;
}
</style>