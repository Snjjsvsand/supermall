<template>
  <div class="tab-control">
      <div 
      class = "control-item"
      v-for = "(item , index) in titles" :key = "index"
      @click = "btnClick(index)"
      :class = "{active : index == currentIndex}">
          <span>
              {{item}}
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
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
    methods:{
        btnClick(index){
            this.currentIndex = index;
            this.$emit('changeGoodsList',index);
        }
    }
}
</script>

<style>
.tab-control{
    display:flex;
    text-align:center;
    background-color:white;
    height:40px;
    line-height:40px;
}
.control-item{
    flex:1;
}
.active{
    color:var(--color-high-text);
}
.active span{
    border-bottom:2px solid var(--color-tint);
    padding: 2px 5px;
}
</style>    