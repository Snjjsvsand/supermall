<template>
  <div class="cart-list-item">
      <check-button @btnClick = "btnClick" :isChecked = "product.checked"></check-button>
      <img :src="product.image" alt="" class = "product-image">
      <div class="product-text">
          <div class = "product-title">{{product.title}}</div>
          <div class = "product-desc">{{product.desc}}</div>
          <div class = "product-sum">
              <span class = "product-price">{{'¥'+product.price}}</span>
              <span class = "product-count">{{'X'+product.count}}</span>
            </div>
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    name:'CartListItem',
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        CheckButton
    },
    methods:{
        btnClick(){
            console.log('btnClick')
            this.$store.commit('changCheck' , this.product);
        }
    }

}
</script>

<style>
    .cart-list-item{
        width:100vw;
        height:23vh;
        background-color:#fff;
        padding:3px auto;
        display: flex;
        align-items:center;
        border-bottom: 1px solid rgb(94, 94, 94);
        justify-content: space-around;
        font-size:17px;
    }
    .product-image{
        height:90%;
        border-radius:10px;
        width:25vw;
    }
    .product-text{
        width:70%;
        height:90%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
   
    }
    .product-title , .product-desc{
        text-overflow:ellipsis;
        overflow:hidden;  
        white-space:nowrap;
        margin-left:6px;
    }
    .product-title{
        color:black;
    }
    .product-desc{
        color:#666;
        font-size:14px;
    }
    .product-sum{
        display: flex;
    }
    .product-price{
        flex: 1;
        color:#fc4903;
        margin-left:12px;  
    }
    .product-count{
        /* flex:1; */
        margin-right:6px;
        color:black;
    }
</style>