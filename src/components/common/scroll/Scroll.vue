<template>
  <div class="wrapper" ref = "wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {    
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper , {
            probeType:this.probeType,
            //设置开启上拉加载
            pullUpLoad:this.pullUpLoad,
            // 这个click:false是屏蔽div等属性的click事件而不是button的原生事件
            click:true,
            mouseWheel:true
        });
         this.scroll.on('scroll', position => {
             this.$emit('scroll' , position)
         });

        this.pullUpLoad && this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
        });

    },
    methods:{
        scrollTo(x , y , time = 300){
            //time = 300 是es6写法，不传这个参数默认值为300
            this.scroll && this.scroll.scrollTo(x , y , time);
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp();
        },
        refresh(){
            // console.log(this.scroll)
            this.scroll && this.scroll.refresh();
            // console.log('---')
        }
    }
}
</script>

<style>

</style>