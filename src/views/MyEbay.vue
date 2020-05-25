<template>
  <div class="entry">
    <div class="yellow_area">
      <div class="ea_header">
        <div class="fix"></div>
        <div class="ea_title">我的易购</div>
        <div class="ea_edit"></div>
      </div>
      <div class="person_part">
        <div class="ea_left">
          <div class="headimg">
            <img src="../assets/detailsImg/detailspage/he.jpg" alt />
          </div>
          <div class="truename">去实名认证</div>

          <div class="ea_name">
            <span>你的大叔</span>
            <div class="st_value">生态值666</div>
          </div>
        </div>
        <div class="ea_right">
          <div class="code_img">
            <img src="../assets/detailsImg/detailspage/code.png" alt />
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="four_do">
        <div>
          <div class="ea_number">0</div>
          <div class="thing">优惠券</div>
        </div>
        <div>
          <div class="ea_number">40</div>
          <div class="thing">领云钻</div>
        </div>
        <div>
          <div class="ea_number">445</div>
          <div class="thing">足迹</div>
        </div>
        <div>
          <div class="ea_number">2</div>
          <div class="thing">我的关注</div>
        </div>
      </div>

      <!-- 券 -->
      <div class="exit_wrap">
        <div class="vip_left">
          <div class="vip_container">
            <img src="../assets/detailsImg/detailspage/vip.png" alt />
          </div>
          <div>【免费】您有一张运费券待领取</div>
        </div>
        <div class="get_now">立即领取</div>
      </div>
    </div>
    <!--  -->
    <div class="order_wrap">
        <div class="order_head">
            <div>我的订单</div>
            <div class="seeall">查看全部</div>
        </div>
        <div class="tool">
          <div class="tool_wrap">
              <div class="tool_pic one">
                  <img src="../assets/detailsImg/detailspage/one.png" alt="">
              </div>
              <div>待支付</div>
          </div>
           <div>
              <div class="tool_pic two">
                   <img src="../assets/detailsImg/detailspage/two.png" alt="">
              </div>
              <div>待收货</div>
          </div>
           <div>
              <div class="tool_pic three">
                   <img src="../assets/detailsImg/detailspage/three.png" alt="">
              </div>
              <div>评价有礼</div>
          </div>
           <div>
              <div class="tool_pic four">
                   <img src="../assets/detailsImg/detailspage/four.png" alt="">
              </div>
              <div>退换/售后</div>
          </div>
           <div>
              <div class="tool_pic five">
                   <img src="../assets/detailsImg/detailspage/five.png" alt="">
              </div>
              <div>常购清单</div>
          </div>
        </div>
    </div>


<!-- 必备工具 -->
    <div class="order_wrap shoule">
        <div class="order_head">
            <div>必备工具</div>
        </div>
        <div class="tool must">
          <div class="tool_wrap">
              <div class="tool_pic one">
                  <img src="../assets/detailsImg/detailspage/z1.png" alt="">
              </div>
              <div class="red_bag">红包</div>
          </div>
           <div>
              <div class="tool_pic two">
                   <img src="../assets/detailsImg/detailspage/z2.png" alt="">
              </div>
              <div>店铺关注</div>
          </div>
           <div>
              <div class="tool_pic three">
                   <img src="../assets/detailsImg/detailspage/z3.png" alt="">
              </div>
              <div>足迹</div>
          </div>
           <div>
              <div class="tool_pic four">
                   <img src="../assets/detailsImg/detailspage/z4.png" alt="">
              </div>
              <div>客户服务</div>
          </div>
           <div class="last_line">
              <div class="tool_pic five">
                   <img src="../assets/detailsImg/detailspage/z5.png" alt="">
              </div>
              <div>必抢清单</div>
          </div>
          <div class="last_line">
              <div class="tool_pic five">
                   <img src="../assets/detailsImg/detailspage/z6.png" alt="">
              </div>
              <div>拼购</div>
          </div>
          <div class="last_line">
              <div class="tool_pic five">
                   <img src="../assets/detailsImg/detailspage/z7.png" alt="">
              </div>
              <div>校园VIP</div>
          </div>
          <div class="last_line">
              <div class="tool_pic five">
                   <img src="../assets/detailsImg/detailspage/z8.png" alt="">
              </div>
              <div>我的试用</div>
          </div>
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
<!--  -->

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
        <img src="../assets/home/icon/9.png" alt />
        <span>购物车</span>
      </router-link>
      <router-link to="/myebay" class="go">
        <img src="../assets/home/icon/14.png" alt />
        <span>我的易购</span>
      </router-link>
    </div>
  </div>
 
</template>
<script>
export default {
  
}
</script>
<style scoped>
.yellow_area {
  background-color: rgb(255, 219, 71);
}
.ea_header {
  display: flex;
  padding: 0.417rem;
  justify-content: space-between;
}
.ea_title {
  font-size: 0.7rem;
  font-weight: 700;
}
.ea_edit {
  width: 0.84rem;
  height: 0.84rem;
  background: url(../assets/detailsImg/detailspage/setting.png);
  background-size: contain;
}
.headimg {
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 0.5rem;
  border-radius: 50%;
  border: 0.042rem solid white;
}
.headimg img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.ea_left {
  display: flex;
  position: relative;
}
.ea_name {
  margin-top: 0.417rem;
  margin-left: 0.617rem;
  font-size: 0.6rem;
  font-weight: 700;
}
.st_value {
  margin-top: 0.4rem;
  padding: 0.042rem 0.2rem;
  font-size: 0.5rem;
  border-radius: 0.417rem;
  color: white;
  background-color: rgb(225, 187, 35);
}
.person_part {
  display: flex;
  justify-content: space-between;
}
.code_img {
  flex-shrink: 0;
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.617rem;
}
.code_img img {
  width: 100%;
  height: 100%;
}
.truename {
  position: absolute;
  left: 0.3rem;
  top: 2rem;
  padding: 0.042rem 0.2rem;
  font-size: 0.5rem;
  background-color: rgb(255, 230, 126);
  border-radius: 0.417rem;
}
.four_do {
  display: flex;
  margin-top: 1rem;
  font-size: 0.5rem;
}
.four_do div {
  text-align: center;
  flex-grow: 1;
}
.ea_number {
  margin-bottom: 0.308rem;
  font-weight: 700;
}
.four_do > div {
  padding: 0.417rem ;
}
.exit_wrap {
  display: flex;
  position: absolute;
  padding: 0.417rem;
  width: 14rem;
  margin:0 3%;
  align-items: center;
  justify-content: space-between;
  top: 7.22rem;
  background-color: white;
  font-size: 0.5rem;
  border-radius: 0.333rem;
}
.vip_container {
  width: 1.8rem;
  height: 1.2rem;
}
.vip_container img {
  width: 100%;
  height: 100%;
}
.vip_left {
  display: flex;
  align-items: center;
}
.get_now::after {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  margin-left: 0.209rem;
  content: "";
  background: url(../assets/detailsImg/detailspage/right.png);
  background-size: contain;
  vertical-align: middle;
}
.thing{
    margin-bottom: 0.6rem;
}

.order_head{
    display: flex;
    justify-content: space-between;
    font-size: 0.55rem;
    font-weight: 700;
}
.order_wrap{
    margin-top: 2rem;
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    background-color: white;
    border-radius: 0.206rem;

}
.seeall{
    color: #666;
}
.seeall::after{
    display: inline-block;
    content: "";
    width: 0.48rem;
    height: 0.48rem;
    margin-right: 0.508rem;
    margin-left: 0.208rem;
    background: url(../assets/detailsImg/detailspage/next.png);
    background-size: contain;
    
}
.tool{
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 0.55rem;
    padding: 0.417rem;
}
.tool>div{
    width: 25%;
    font-size: 0.48rem;
    text-align: center;
}
.tool_pic{
    width: 1.2rem;
    height: 1.2rem;
    margin:0 25%
}
.tool_pic+div{
    margin-top: 0.36rem;
}
.tool_pic img{
    width: 100%;
    height: 100%;
}
.order_wrap{
   padding:0.625rem 0.417rem
}
.must{
    flex-wrap: wrap;
    margin-top: 0;
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
</style>