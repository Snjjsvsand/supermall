<template>
  <div id = "profile">
    <top-bar>
      <div slot = "center">我的信息</div>
    </top-bar>
    <div id="login-info">
      <img src="~assets/img/profile/avatar.svg" alt="">
      <div id = "login-text">
        <div>
          <span>登录/注册</span>
        </div>
        <div id = "phone-div">
          <img id = "phone" src="~assets/img/profile/phone.svg" alt="">
          <span>暂无绑定的手机号</span>
        </div>
      </div>
      <div ><img id = "right-pointer" src="~assets/img/profile/right.svg" alt=""></div>
    </div>
    <div id = "pay-info">
      <div>
        <div>0.00元</div>
        <div>我的余额</div>
      </div>
      <div>
        <div>0个</div>
        <div>我的优惠</div>
      </div>
      <div>
        <div>0分</div>
        <div>我的积分</div>
      </div>
    </div>
    <div class = "user-info">
      <div>
        <img src="~assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div>
        <img src="~assets/img/profile/pointer.svg" alt="">
        <span>我的商城</span>
      </div>
      <div>
        <img src="~assets/img/profile/vip.svg" alt="">
        <span>会员卡</span>
      </div>
    </div>
    <div class="user-info no-bottom">
      <div>
        <img src="~assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div>
        <img src="~assets/img/profile/shopping.svg" alt="">
        <span>下载购物App</span>
      </div>      
    </div>
  </div>
</template>

<script>
import TopBar from 'components/common/TopBar'
export default {
  name:'Profile',
  components:{
    TopBar
  }
}
</script>

<style>
#login-info{
  color:white;
  display: flex;
  height:15vh;
  width:100vw;
  background-color: rgb(255, 129, 152);
  align-items: center;
  justify-content: space-around;
}
#login-info>img{
  height:80%;
  margin-left:-5vw;
}
#login-text{
  width:50vw;
  font-size: 20px;
  margin-left:-10vw;
}
#login-text *{
    vertical-align: middle;
}
#phone-div{
  font-size: 17px;
  height:25px;
}
#phone{
  height:100%;
}
#right-pointer{
  height:20px;
}
#pay-info{
  height:15vh;
  width:100vw;
  display: flex;  
  align-items:center;
}
#pay-info>div{
  flex:1;
  text-align: center;
  border:1px solid #fafafa;
  padding-top:4vh;
  height:15vh;
  border-bottom:6px solid rgb(247, 243, 243);
}
.user-info>div{
  height:8vh;
  width:90vw;
  margin:0 auto;
  border-bottom:1px solid rgb(247, 243, 243);
  line-height:8vh;

}
.user-info img{
  height:6vh;
  margin-bottom:-2vh;
}
.user-info{
    border-bottom:6px solid rgb(247, 243, 243);
}
.user-info span{
  margin-left: 3vw;
}
.no-bottom{
  border-bottom:none;
}
</style>