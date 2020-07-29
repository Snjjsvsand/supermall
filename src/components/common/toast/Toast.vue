<template>
  <div class="toast" v-show = "isShow">
      {{Message}}
  </div>
</template>

<script>
export default {
    name:'Toast',
    data(){
        return{
            Message:'默认文字',
            isShow:false
        }
    },
    methods:{
        show(Message , delay = 1500){
            this.isShow = true;
            this.Message = Message
            setTimeout(() => {
                this.isShow = false
                this.Message = ''
            } , delay)
        }
    }
}
</script>

<style>
    .toast{
        font-size:17px;
        background-color:rgba(0 , 0 , 0 , .7);
        color:white;
        padding:7px 10px;
        position:fixed;
        left:50%;
        top:50%;
        transform:translate(-50% , -50%);
        z-index:999;
        border-radius:30px;
    }
</style>