<template>
    <div id = "tab-bar-item" @click = "btnClick">
        <div v-if = "!isActive"><slot name = "tabbar-icon"></slot></div>
        <div v-else><slot name = "tabber-icon-active"></slot></div>
        <div v-bind:style = "aColor"><slot name = "tabbar-text"></slot></div>
    </div>
</template>

<script>
export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{}
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) != -1
        },
        aColor(){
            if(this.isActive){
                return {'color':this.activeColor}
            }else{
                return {}
            }
        }
    },
    methods:{
        btnClick(){
            if(this.path != this.$route.path){
                this.$router.push(this.path);
            }
        }
    }
}
</script>

<style>
    #tab-bar-item{
        /* margin-top:5px; */
        /* background-color:gainsboro; */
        font-size:13px;
        text-align: center;
        width: 50px;
    }
    #tab-bar-item img{
        margin-top:3px;
        height:27px;
        vertical-align: bottom;
    }
</style>