<template>
    <swiper>
        <swiper-item v-for = "item in banner" :key = "item.index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load = "imgLoad">
            </a> 
        </swiper-item>
      </swiper>
</template>

<script>
import {Swiper , SwiperItem} from 'components/common/swiper'

export default {
    name:'HomeSwiper',
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        imgLoad(){
            this.$store.commit('changeImgLoad');
        }
    }
}
</script>

<style>

</style>