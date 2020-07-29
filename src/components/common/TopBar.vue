<template>
    <div class = "top-bar" :style = "getColor">
        <div class = "left"><slot name = "left"></slot></div>
        <div class = "center"><slot name = "center"></slot></div>
        <div class = "right"><slot name = "right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TopBar',
    props:{
        bgColor:{
            type:String,
            default:'#ff8198'
        },
        foColor:{
            type:String,
            default:'#ffffff'
        }
    },
    computed:{
        getColor(){
            return{'color':this.foColor,'background-color':this.bgColor}
        }
    }
}
</script>

<style>
    .top-bar{
        height:44px;
        line-height:44px;
        width:100%;
        box-shadow:0px 1px 1px rgba(0, 0, 0, 0.1);
        display:flex;
        /* flex-direction: row; */
        text-align: center;
        /* justify-content:space-around; */
        
    }
    .center{
        flex:1;
    }
    .left , .right{
        width:60px;
        /* background-color:#bfa; */
    }
</style>