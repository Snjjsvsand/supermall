<template>
  <div class="check-button"  :class = "{checked : isChecked}" @click = "btnClick">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        isChecked:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        btnClick(){
            this.$emit('btnClick');
        }
    }
}
</script>

<style>
.check-button{
    /* background-color: red; */
    border-radius:50%;
    width:16px;
    height:16px;
    border:solid 1px #666;
}
.checked{
    width:16px;
    height:16px;
    background-color:var(--color-high-text);
    border-color:var(--color-high-text);
}
</style>