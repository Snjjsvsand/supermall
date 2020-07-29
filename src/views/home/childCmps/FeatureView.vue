<template>
    <div id = "feature-view">
        <a href="https://act.mogujie.com/zzlx67">
            <img src="~assets/img/home/recommend_bg.jpg" alt="" @load = "imgLoad">
        </a>
    </div>
</template>

<script>
export default {
    name:'FeatureView',
    methods:{
        imgLoad(){
            this.$store.commit('changeImgLoad');
        }
    }
}
</script>

<style>
#feature-view img{
    width:100%;
    vertical-align: bottom;
}
</style>