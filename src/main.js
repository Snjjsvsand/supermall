import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.use(toast)

Vue.use(VueLazyLoad , {
  // 需要将img标签中的属性:src替换为v-lazy
  loading:require('./assets/img/common/placeholder.png')
})
//使用Vue实例作为事件总线，挂载到vue的原型上使每个元素都能拿到
Vue.prototype.$bus = new Vue();
/*
  better-scroll bug以及处理

  bug的产生：better-scroll在确认滚动高度时图片还没来的及加载，
    导致计算高度与真实高度不一致，使滚动条无法充分滚动
  
  bug的解决：
      1.
        升级better-scroll(尝试升级2.x)
      2.
        在图片加载完毕之后调用img元素onload函数，让better-scroll调用refresh函数重新计算高度
        -Vue封装了img.onload = function(){} 为 @load
          可以在GoodsListItem用这个事件，发出一个事件使Home.vue调用refresh
        
        -可以利用VueX设定状态使Home.vue调用refresh
        -或者使用‘事件总线’，具体方法参考Home.vue  GoodsListItem.vue


*/
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
