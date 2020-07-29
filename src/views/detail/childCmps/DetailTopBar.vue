<template>
        <top-bar foColor = "#666" bgColor = "white">
          <img src="~assets/img/common/back.svg" alt="" slot = "left" class = "back" @click = "back">
          <div slot = "center" class = "titles">
              <div v-for = "(item , index) in titles" :key = "index" 
                @click = "changeIndex(index)" 
                :class = "{active : index == currentIndex}">
                  {{item}}
              </div>
          </div>
      </top-bar>
</template>

<script>
import TopBar from 'components/common/TopBar'

export default {
    name:'DetailTopBar',
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components:{
        TopBar
    },
    methods:{
        back(){
            this.$router.back();
        },
        changeIndex(index){
            this.currentIndex = index;
            this.$emit('changeTopIndex' , index);
        }
    }
}
</script>

<style scoped>
    .titles{
        display: flex;
        font-size:14px;
        
    }
    .titles div{
        flex:1;
    }
    .back{
        margin-top:10px;
    }
    .active{
        color:var(--color-high-text);
    }
</style>