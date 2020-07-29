<template>
  <div id = "category">
    <top-bar>
      <div slot = "center">商品分类</div>
    </top-bar>
    <category-left :categoryList = "categoryList" @changeList = "changeList"></category-left>
    <category-right :itemList = "itemList"></category-right>
  </div>
</template>

<script>
import {getCategory , getSubCategory} from 'network/category'
import TopBar from 'components/common/TopBar'
import CategoryLeft from './childCmps/CategoryLeft'
import CategoryRight from './childCmps/CategoryRight'
export default {
  name:'Category',
  data(){
    return{
      categoryList:[],
      itemList:[]
    }
  },
  components:{
    TopBar,
    CategoryLeft,
    CategoryRight
  },
  methods:{
    changeList(index){
        getSubCategory(this.categoryList[index].maitKey).then(data => {
          this.itemList = data.data.list
          // console.log(this.itemList)
        })      
    }
  },
  created(){
    getCategory().then(data => {
      // console.log(data)
      this.categoryList = data.data.category.list;
      console.log(this.categoryList)
    }).then(()=>{
        getSubCategory(this.categoryList[0].maitKey).then(data => {
        this.itemList = data.data.list
        console.log(this.itemList)
      })
    })
  }
}
</script>

<style>

</style>