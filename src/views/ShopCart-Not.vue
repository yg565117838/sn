<template>
  <div class="not_container">
    <div class="notcart_header">购物车</div>
    <div class="middle">
      <div class="label_one">
        <span>重庆市重庆南岸区</span>
        <div class="icon_right"></div>
      </div>
      <div class="label_two">
        <span>登录后同步电脑与手机购物车的商品</span>
        <div class="go_login" @click="hgoLogin">去登录</div>
      </div>
      <div class="cart_img">
        <img src="../assets/detailsImg/detailspage/hhh.png" alt />
      </div>
      <div class="empty_still">购物车还是空的，快来挑选好货吧</div>
      <div class="btn_container">
        <button class="go_seesee" @click="goSee">去逛逛</button>
      </div>
 
    </div>

    <div class="youlike"></div>
         <div class="shop_box">
        <div class="shopllist" :key="index" v-for="(item,index) in 4">
          <div class="shop_wrap">
            <div class="shop_pic">
              <img src="../assets/detailsImg/detailspage/cooker.png" alt />
            </div>
            <div class="shop_title">飞利浦(PJSUEID)原汁机，家用低速可做果汁</div>
            <div class="good_footer">
              <span class="good_price">
                <span class="sign">￥</span>1225.
                <span class="sign">00</span>
              </span>
              <div class="good_cart"></div>
            </div>
          </div>
        </div>
      </div>

    <div class="footer">
      <router-link to="/" class="go">
        <img src="../assets/home/icon/15.png" alt />
        <span>首页</span>
      </router-link>
      <router-link to="/classification" class="go">
        <img src="../assets/home/icon/7.png" alt />
        <span>分类</span>
      </router-link>
      <router-link to="/mustgrablist" class="go">
        <img src="../assets/home/icon/8.png" alt />
        <span>必抢清单</span>
      </router-link>
      <router-link to="/shoppingcart" class="go">
        <img src="../assets/home/icon/13.png" alt />
        <span>购物车</span>
      </router-link>
      <router-link to="/myebay" class="go">
        <img src="../assets/home/icon/10.png" alt />
        <span>我的易购</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
methods:{
   hgoLogin() {
   this.$router.push({
     path:"/login"
   })
 },
 goSee(){
   this.$router.push({
     path:"/"
   })
 }
}

}
</script>
<style scoped>
body,
html {
  width: 100%;
  height: 100%;
}

.cart_img {
  margin-left: 5.47rem;
  margin-top: 2.5rem;
  width: 3.6rem;
  height: 3.6rem;
}
.shop_show{

    width: 100%;
    height: 0.96rem;
    margin-top: 2rem;
     background: url(../assets/detailsImg/detailspage/like.png) center center no-repeat;
     background-size: contain;
}

.cart_img img {
  width: 100%;
  height: 100%;
}
.not_container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.go_seesee {
    padding: 0.125rem;
  background-color: white;
  text-align: center;
  border-style: none;
  border:0.042rem solid #ddd;
  border-radius: 0.25rem;
  outline: none;
}
.btn_container{
    display: flex;
    margin-top: 0.517rem;
    justify-content: center;
}
.notcart_header {
  flex-shrink: 0;
  padding: 0.417rem 0;
  font-size: 0.687rem;
  text-align: center;
  border-bottom: 0.042rem solid#eee;
}
.label_one {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.333rem 0.417rem;
  margin: 0.417rem 0.417rem;
  background-color: rgb(255, 227, 126);
  font-size: 0.53rem;
  border-radius: 0.417rem;
}
.label_two {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.417rem 0.417rem;
  margin: 0.417rem 0.417rem;
  font-size: 0.5rem;
  background-color: rgb(255, 227, 126);
  border-radius: 0.25rem;
}
.empty_still {
  font-size: 0.608rem;
  color: #222;
  text-align: center;
  margin-top: 0.875rem;
}
.go_login {
  padding: 0.08rem;
  color: rgb(255, 227, 126);
  background-color: black;
  border-radius: 0.167rem;
}
.footer {
  box-sizing: content-box;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  border-top: 1px solid #eee;
  background: #fff;
  margin: 0 auto;
  width: 15rem;
  height: 2rem;
}
.icon_right {
  width: 0.833rem;
  height: 0.833rem;
  background: url(../assets/detailsImg/detailspage/boldright.png) center center no-repeat;
  background-size: contain;
}
.middle {
  overflow: auto;
}
.go {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 0;
  text-decoration: none;
  align-items: center;
  justify-content: center;
}
.go img {
  width: 0.96rem;
  height: 0.96rem;
}
.go span {
  color: #666;
  font-size: 0.4rem;
}
.last_line{
    margin-top: 0.617rem;
}
.red_bag{
    margin-left: -0.208rem;
}
.order_wrap.shoule{
    margin-top: 0.3rem;
}
.entry{
    margin-bottom: 2rem;
    background-color: rgb(242,242,242);
}
.shopllist {
  display: flex;
  align-items: center;
  width: 6.92rem;
  margin-left: 0.417rem;
  background-color: white;
  justify-content: space-between;
  border-radius: 0.333rem;
  margin-top: 0.517rem;
}
.shop_pic {
  width: 5.45rem;
  height: 5.45rem;
}
.shop_box {
  display: flex;
  flex-wrap: wrap;
}
.all{
  font-size: 0.56rem;
  margin-left: 0.208rem;
  margin-top: 0.13rem;
}
.all_money{
  font-size: 0.56rem;
}
.road{
  font-size: 0.45rem;
  margin-top: 0.208rem;
}
.sign {
  font-size: 0.2rem;
}
.shop_wrap {
  padding: 0.7rem;
  border-radius: 0.333rem;
}
.count_page{
  display: flex;
  position: fixed;
  left: 0;
  bottom: 2.2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
.shop_pic img {
  width: 100%;
  height: 100%;
  border-radius: 0.333rem;
}
.good_footer {
  display: flex;
  justify-content: space-between;
  margin-top: 0.427rem;
}
.shop_title {
  margin-top: 0.456rem;
}
.count_right{
  display: flex;
}
.count_right button{
  width: 4rem;
  height: 1.24rem;
  background-color: #fb0;
  flex-shrink: 0;
  border-style: none;
  outline: none;
  border-radius: 0.208rem;
  font-weight: 700;

}
.count_text{
  margin-right: 0.208rem;
  margin-top: 0.125rem;
}
.good_cart {
  width: 0.708rem;
  height: 0.708rem;
  background: url(../assets/detailsImg/detailspage/7.png) center center;
  background-size: contain;
}
.good_price {
  font-weight: 700;
  color: red;
  font-size: 0.6rem;
}
.sign{
  color: red;
}
.shop_title {
  font-size: 0.5rem;
  font-weight: 700;
}

.youlike {
  width: 8.16rem;
  height: 0.96rem;
  margin-left: 4.1rem;
  margin-top: 0.6rem;
  background: url(../assets/detailsImg/detailspage/like.png) center center;
  background-size: contain;
}
.not_container{
  margin-bottom: 2rem;
  background-color: rgb(242,242,242);
}
</style>