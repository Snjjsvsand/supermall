<template>
    <div id = "home">
      <top-bar>
        <div slot = "center">购物街</div>
      </top-bar>

      <tab-control 
          :titles = "['流行' , '新款' , '精选']" 
          @changeGoodsList = "changeGoodsList"
          ref = "tabControlFixed"
          class = "tab-fixed"
          v-show = "isFixed"></tab-control>

      <scroll :probe-type = "3" :pull-up-load = "true" ref = "scroll" 
        @scroll = "responseScroll" @pullingUp = "loadingMore">
        <!-- props驼峰，传值时就用'-' -->
        <!-- @绑定事件时定义的函数不用写（）传值，等号后面是处理事件的函数对象，函数自己定义参数接收就可以了 -->
        <home-swiper :banner = "banner" class = "home-swiper">
        </home-swiper>
        <recommend-view :recommend = "recommends"></recommend-view>
        <feature-view></feature-view>

        <tab-control 
          :titles = "['流行' , '新款' , '精选']" 
          @changeGoodsList = "changeGoodsList"
          ref = "tabControl"></tab-control>

        <goods-list :list = "getList"></goods-list>
      </scroll>
      <!-- 为自定义组件的根元素而不是原生html元素设置事件监听的话 必须加上.native -->
      <back-top @click.native = "backTop" v-show = "showBackTop"></back-top>
      <!-- v-show如果写true 和 false 不会被解析成函数或变量 -->
      <!-- <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul> -->
  </div>
</template>

<script>
import TopBar from 'components/common/TopBar'
import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
// import BackTop from 'components/content/backTop/BackTop'

import {HomeSwiper , RecommendView , FeatureView} from './childCmps'

import {getHomeMultidata , getHomeGoodsData} from 'network/home'

import {itemListenerMixin , backTop} from 'common/mixin'

export default {
  name:'Home',
  data(){
    return{
      banner:[],
      recommends:[],
      goods:{
        //这样的数据结构，按页码加载
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentGoods:'pop',
      showBackTop:false,
      isFixed:false,
      scrollY:0,
      itemImgListener:null
    }
  },
  computed:{
    getList(){
      return this.goods[this.currentGoods].list;
    }
  },
  components:{
    TopBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop

  },
  created(){
    // 发送首页需要的网络请求,这里是异步操作，所以要调试最好使用Devtools
    this.getMultidata();

    this.getGoodsData('pop');
    this.getGoodsData('new');
    this.getGoodsData('sell');
   
  },
  mounted(){
    //网络请求放在created里面，但是有关组件的函数应放在组件挂载完成之后
    
    //注意refresh属性应该定义在监听事件函数之外，调用在事件响应函数之内
    // let refresh;
    // 如果有scroll这个对象就让它refresh,否则可能会报错
    // - 图片到来、GoodsListItem组件挂载可能比scroll更快，导致事件被监听并更新不存在的scroll
    // if(this.$refs.scroll){
       //运用节流函数  
    //   refresh = debounce(this.$refs.scroll.refresh , 100);
    // }
    // this.itemImgListener = refresh;
    // this.$bus.$on('imgLoad' , this.itemImgListener);
  },
  mixins:[itemListenerMixin , backTop],
  activated(){
    //别忘了重回主页时打开离开主页时关闭的图片监听并刷新scrollY高度事件
    this.$bus.$on('imgLoad' , this.itemImgListener);

    this.$refs.scroll.scrollTo( 0 , this.scrollY);
    
    this.$refs.scroll.refresh();
  },
  deactivated(){
    this.scrollY = this.$refs.scroll.y;
    this.$bus.$off('imgLoad' , this.itemImgListener);
  },
  methods:{
    //发送网络请求函数
    getMultidata(){
        getHomeMultidata().then(res => {
        // console.log(data)
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoodsData(type){
      const page = ++this.goods[type].page;
      getHomeGoodsData(type , page).then(res => {
        // this.goods[type].list = this.goods[type].list.concat(data.list);

        // for(let i = 0;i<30;i++){
        //   this.goods[type].list.push(data.list[i]);
        // }

        this.goods[type].list.push(...res.data.list);

        
        // console.log(this.goods[type].list);
      });
    },

    //切换显示商品列表
    changeGoodsList(index){
      switch(index){
        case 0:
            this.currentGoods = 'pop';
            break;
        case 1:
            this.currentGoods = 'new';
            break;
        case 2:
            this.currentGoods = 'sell'; 
      }
      //统一两个tabControl的选项
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlFixed.currentIndex = index;
      //点击切换如果这一列表已经被滚动，让滚动条回到商品列表顶部显示完整的新一列列表
      if(this.isFixed == true)this.$refs.scroll.scrollTo(0,-this.$refs.tabControl.$el.offsetTop,0)
    },
    //返回顶部
    // backTop(){
    //   // console.log('Hello BackTop!')
    //   this.$refs.scroll.scrollTo(0 , 0 , 300)
    // },
    //计算是否显示backTop按钮
    responseScroll(position){
      this.showBackTop = -position.y > 1000
      //在图片加载完成之后再去提取tabControl的距顶部高度
      if(this.$store.state.imgLoad == 9 && this.$refs.tabControl.$el.offsetTop <= -position.y){
        this.isFixed = true
      }else{
        this.isFixed = false
      }
    },
    //上拉加载更多
    loadingMore(){
      this.getGoodsData(this.currentGoods);
      //better-scroll上拉加载之后必须调用finish才能结束这次加载从而进行下一次加载
      this.$refs.scroll.finishPullUp();
      // console.log(this.$refs.scroll.scroll); 
    }
  }
}
</script>

<style scoped>
  #home{
    position:relative;
    height:100vh; 
  }

  .tab-fixed{
    position:relative;
    top:-1.5px;
    z-index:9;
  }
  .wrapper{
    position: absolute;
    overflow: hidden;
    top:43px;
    bottom:49px;
    width:100%;
  }
</style>