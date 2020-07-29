<template>
  <div id="detail">
      <detail-top-bar @changeTopIndex = "changeTopIndex" ref = "detailTopBar"></detail-top-bar>
      <scroll class = "wrapper" ref = "scroll" :probeType = "3" @scroll = "scroll">
            <detail-swiper :topImages = "topImages"></detail-swiper>
            <detail-goods-info :goodsInfo = "goodsInfo"></detail-goods-info>
            <detail-shop-info :shopInfo = "shopInfo"></detail-shop-info>
            <detail-goods-image :detailInfo = "detailInfo"></detail-goods-image>
            <detail-goods-params :goodsParams = "goodsParams" ref = "params"></detail-goods-params>
            <detail-comment :comments = "comments" ref = "comment"></detail-comment>
            <goods-list :list = "recommend" class = "recommend-list" ref = "recommend"></goods-list>
      </scroll>
      <back-top @click.native = "backTop" v-show = "showBackTop"></back-top>
      <detail-bottom-bar @addCart = "addCart"></detail-bottom-bar> 
        
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
// import Toast from 'components/common/toast/Toast'
import GoodsList from 'components/content/goods/GoodsList'
// import BackTop from 'components/content/backTop/BackTop'

import {
    DetailTopBar , DetailSwiper , DetailGoodsInfo , DetailShopInfo , 
    DetailGoodsImage , DetailGoodsParams , DetailComment , DetailBottomBar
} from './childCmps'

import {getItemDetail , GoodsInfo , ShopInfo , GoodsParams , getRecommend} from 'network/detail'

import {debounce} from 'common/utils'
import {itemListenerMixin , backTop} from 'common/mixin'

export default {
    name:'Detail',
    data(){
        return{
            iid:null,
            topImages:[],
            goodsInfo:{},
            shopInfo:{},
            detailInfo:{},
            goodsParams:{},
            comments:{},
            recommend:[],
            itemImgListener:null,
            topYs:[],
            computedTopY:null,
            showBackTop:false,
            // isShow:false,
            // message:'添加购物车成功!'
        }
    },
    components:{
        DetailTopBar,
        DetailSwiper,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailGoodsImage,
        DetailGoodsParams,
        DetailComment,
        GoodsList,
        Scroll,
        DetailBottomBar,
        // Toast
        // BackTop
    },
    created(){
        // console.log('详情页被创建');
        this.iid = this.$route.params.iid;
        this.$store.commit('isPageDetail');
        getItemDetail(this.iid).then(res => {
            console.log(res)
            if(res != undefined){
                this.topImages = res.result.itemInfo.topImages;

                this.goodsInfo = new GoodsInfo(res.result.itemInfo , res.result.columns , res.result.shopInfo.services);
            
                this.shopInfo = new ShopInfo(res.result.shopInfo);
                // console.log(this.shopInfo);

                this.detailInfo = res.result.detailInfo;

                this.goodsParams = new GoodsParams(res.result.itemParams.info , res.result.itemParams.rule);

                this.comments = res.result.rate.cRate != 0  ?  res.result.rate.list[0] : {};
            }
        });
        getRecommend().then(( res ) => {
            this.recommend = res && res.data.list;
            // console.log(this.recommend);
        })
        
    },
    mounted(){
        // setTimeout(() => {
        //     this.$refs.scroll.refresh();
        // }, 500);

        this.computedTopY = debounce(() => {
            this.topYs = [];
            this.topYs.push(0);
            this.topYs.push(this.$refs.params ? this.$refs.params.$el.offsetTop : 0);
            this.topYs.push(this.$refs.comment ? this.$refs.comment.$el.offsetTop : 0);
            this.topYs.push(this.$refs.recommend ? this.$refs.recommend.$el.offsetTop : 0);
            // console.log(this.topYs);
        } , 100);

        this.$bus.$on('imgLoad' , this.computedTopY);
    },
    
    mixins:[itemListenerMixin , backTop],

    methods:{
        changeTopIndex(index){
            this.$refs.scroll.scrollTo( 0 , -this.topYs[index] , 500);
        },
        scroll(position){
            for(let i = this.topYs.length - 1 ; i >= 0 ; i--){
                if(-position.y >= this.topYs[i]){
                    this.$refs.detailTopBar.currentIndex = i;
                    break;
                }
            }

            this.showBackTop = -position.y > 1000
        },
        addCart(){
            let product = {};
            product.iid = this.iid;
            product.image = this.topImages[0];
            product.title = this.goodsInfo.title;
            product.desc = this.goodsInfo.desc;
            product.price = this.goodsInfo.lowNowPrice;
            product.count = 1;
            // console.log('product' , product);
            this.$store.dispatch('addToCartList' , product);
            console.log(this.$toast)
            this.$toast.show('添加购物车成功' , 2000);
        }  
    },
    destroyed(){
        this.$bus.$off('imgLoad' , this.itemImgListener);
        this.$bus.$off('imgLoad' , this.computedTopY);
        this.$store.commit('isPageDetail');
        // console.log('详情页被销毁');
    }

}
</script>

<style scoped>
    #detail{
        position: relative;
        height:100vh;
    }
    .wrapper{
        position: absolute;
        overflow: hidden;
        top:43px;
        bottom:49px;
    }
    /* .content{
        height:3000px;
    } */
    .recommend-list{
        width:100vw;
        overflow: hidden;
    }
</style>