<template>
  <div id="cart-bottom-bar">
    <div id = "check-all">
      <check-button id = "check-all-button" :isChecked = "isAllChecked" 
      @click.native = "allButtonClick"></check-button>
      <span>全选</span>
    </div>
    <div id="sum">
      <span>合计 ¥</span>
      <span>{{sumPrice}}</span>
    </div>
    <div id="to-pay">
      <span>去结算({{getCartList.filter(item => item.checked == true).length}})</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import CheckButton from 'components/content/checkButton/CheckButton'

export default {
    name:'CartBottomBar',
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters([
        'getCartLength',
        'getCartList'
      ]),
      sumPrice(){
          let sum = 0;
          for(let i = 0 ; i<this.getCartLength ; i++){
            sum += (this.getCartList[i].price * this.getCartList[i].count * this.getCartList[i].checked)
          }
          return sum.toFixed(2) + ''
      },
      isAllChecked(){
        return !this.getCartList.find(item => item.checked == false);
        // return false
      }
    },
    methods:{
      allButtonClick(){
        if(this.isAllChecked){
          this.$store.commit('changAllClick' , false);
        }else{
          this.$store.commit('changAllClick' , true);
        }
      }
    }
}
</script>

<style>
#cart-bottom-bar{
  height:40px;
  width:100vw;
  background-color: rgb(243, 242, 242);
  position:fixed;
  bottom:49px;
  display: flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1px solid rgb(230, 230, 230);
}

#check-all{
  display: flex;
  padding-left:10px;
}
#sum{
  margin-left:-20vw;
}
#to-pay{
  background-color: #FC4903;
  color:white;
  height:40px;
  line-height:40px;
  padding:0 10px;  
}


</style>