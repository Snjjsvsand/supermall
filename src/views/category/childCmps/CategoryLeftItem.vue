<template>
  <div class="category-left-item">
        <div id="category-item-title">
            {{categoryItem.title}}
        </div>
  </div>
</template>

<script>
export default {
    name:'CategoryLeftItem',
    props:{
        categoryItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .category-left-item{
        height:7vh;
        line-height:7vh;
        text-align: center;

        color:black;
    }
</style>