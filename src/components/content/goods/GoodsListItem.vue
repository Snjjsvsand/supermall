<template>
  <div class = "goods-list-item" @click = "btnClick">
      <!-- <a :href="item.link"> -->
          <!-- v-lazy配合图片懒加载 -->
        <img v-lazy="item.image || item.show.img " alt="" @load = "imgLoad">
        <div>
            <div class = "title">{{item.title}}</div>
            <span class = "price">{{item.price}}</span> 
            <span class = "collect">{{item.cfav}}</span>
        </div>
      <!-- </a> -->
  </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgLoad(){
            // console.log('图片加载完毕!');
            this.$bus.$emit('imgLoad');
        },
        btnClick(){
            //这是query查询方式
            // this.$router.push({
            //     path:'/detail',
            //     query:{
            //         iid:this.item.iid
            //     }
            // });
            //这是动态路由方式
            if(this.$route.path.indexOf('detail') == -1)
                this.$router.push('/detail/' + this.item.iid);
        }
    }
}
</script>

<style>
.goods-list-item{
    width:47%;
    margin-top:5px;
    font-size:13px;
    line-height:14px;
}
.goods-list-item img{
    width: 100%;
    border-radius:5px;
    margin-bottom:7px;
}
.title{
    width:100%;
    overflow: hidden;
    /* height:14px; */
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom:2px;
}
.price{
    color:var(--color-tint)
}
.collect{
    position:relative;
    margin-left:17px;
}
.collect::before{
    position:absolute;
    content:'';
    left:-15px;
    top:0px;
    width: 14px;
    height:14px;
    background:url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>