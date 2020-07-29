<template>
    <div class = "goods-list">
        <goods-list-item v-for = "(item,index) in list" :key = "index" :item = "item"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name:'GoodsList',
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style>
.goods-list{
    text-align:center;
    display:flex;
    /* 允许换行 */
    flex-wrap:wrap;
    justify-content: space-evenly;
    width:100%;
    overflow-x: hidden;
}
</style>