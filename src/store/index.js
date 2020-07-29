import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgLoad:0,
    isDetail:false,
    cartList:[]
  },
  getters:{
    getCartLength(state){
      return state.cartList.length
    },
    getCartList(state){
      return state.cartList
    }
  },
  mutations: {
    changeImgLoad(state){
      if(state.imgLoad<9)
        state.imgLoad++;
    },
    isPageDetail(state){
      state.isDetail = !state.isDetail;
    },
    // mutations里面尽量做一些单一操作，故将添加新物品和为旧物品添加数量分开
    addNewProduct(state , payload){
      payload.checked = true;
      state.cartList.push(payload);
    },
    addOldProduct(state , payload){
      state.cartList[payload].count+=1;
    },
    changCheck(state , payload){
      payload.checked = !payload.checked;
    },
    changAllClick(sta , payload){
      sta.cartList.forEach(ele => ele.checked = payload)
    }

  },
  actions: {
    //actions里面不仅可以做异步操作，也能做一些复杂的判断
    addToCartList(context , payload){
      let i;
      let list = context.state.cartList
      
      for(i = 0 ; i < list.length ; i++){
        if(payload.iid == list[i].iid){   
          context.commit('addOldProduct' , i );
          break;
        }
      }
      if(i == list.length){
        context.commit('addNewProduct' , payload);
      }
    }

  },
  modules: {
  }
})
