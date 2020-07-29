<template>
  <div id="detail-comment" v-if = "Object.keys(comments).length">
      <div id = "comment-title">
          <span>用户评论</span>
          <span>更多</span>  
      </div>
      <div id = "comment-content">
          <div class="user-info">
              <img :src="comments.user.avatar" alt="" class = "user-avatar">
              <span class = "user-name">{{comments.user.uname}}</span>
          </div>
          <div class="user-content">{{comments.content}}</div>
          <div class="content-info">
              {{getDate}}
              {{comments.style}}
          </div>
          <div class="content-images">
              <img :src="item" alt="" v-for = "(item , index) in comments.images" :key = "index">
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
    name:'DetailComment',
    props:{
        comments:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        getDate(){
            return formatDate(this.comments.created * 1000);
        }
    }
}
</script>

<style>
    #detail-comment{
        padding:1vh 3vw 2vh;
        border-bottom:6px solid rgb(241, 243, 243);
    }
    #comment-title{
        display:flex;
        padding:2vh 3vw 2vh 0;
        justify-content: space-between;
        color:black;
        border-bottom: 2px solid rgb(240, 239, 239);
    }
    #comment-content{
        padding:1vh 0;
    }
    .user-info{
        height:7vh;
        display:flex;
        align-items:center;
        color:black;
    }
    .user-info img{
        height:80%;
        border-radius:50%;
        margin-right:2vw;
        border: 1px solid rgb(240, 239, 239);
    }
    .user-content , .content-info{
        padding: 1vh 1vw 0;
    }
    .user-content{
        
        font-size:15px;
    }
    .content-info{
        font-size:14px;
        color:rgb(150, 147, 147);
    }
    .content-images img{
        padding:1vh 1vw;
        width:16vw;
    }
</style>