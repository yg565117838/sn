<template>
  <div>
    <div class="cover" v-if="cover" @click="coverRelieve" @touchmove.prevent></div>
    <div class="details_page">
      <!-- 更多 -->
      <div class="zy"></div>
      <!-- 更多跳转页 -->
      <transition>
        <div class="see_select" v-if="see">
          <div class="minus_money">
            优惠
            <div class="cancel_btn" @click="cancelBtn">
              <img src="../../assets/detailsImg/detailspage/cancel.png" alt />
            </div>
          </div>
          <div class="see_footer">
            <div class="up_">可参加以下优惠活动</div>
            <p class="gray_color">促销</p>
            <div class="first_minus">
              <span class="diamond">云钻促销</span>
              <div class="see_text">
                <span>普通卡会员立返4云钻</span>
                <br />
                <span>可通过购物、评价、打卡、云钻游戏获得云钻，可兑换商品，券，玩游戏，还可购物抵现</span>
              </div>
            </div>
            <div class="second_see_ten">
              <div class="second_left">
                <span class="shiming">实名领券</span>
                <span class="ten">实名认证领10元支付券</span>
              </div>
              <div class="right_sign"></div>
            </div>
          </div>
        </div>
      </transition>
      <!-- 服务选择 -->

      <serviceselect :servicepage="servicepage" @service-cancel="cancelBtn"></serviceselect>

      <!-- 购物车选择商品 -->
      <cartselect
        :selectpage="selectpage"
        :zero="zero"
        @cart-cancel="cancelBtn"
        @minus-num="minusNum"
        @plus-num="plusNum"
        :num="num"
        @cover-none="coverNone"
        @hjy-select="hjySelect"
      ></cartselect>
      <!-- 购物车选择商品页面 -->

      <!-- 轮播图 -->
      <detailswiper></detailswiper>
      <!-- 轮播图 -->
      <!-- 地址选择 -->
      <addressselect
        :addresspage="addresspage"
        @address-cancel="cancelBtn"
        @child-value="childValue"
        @city-value="cityValue"
        @area-value="areaValue"
      ></addressselect>
      <!-- 地址选择 -->

      <div>
        <div class="lvzy" v-if="ozy"></div>
        <div class="back" @click="backMainpage"></div>
        <div class="more" @click="moreClick" v-if="more">
          <div class="wrong" v-if="close" @click.stop="closeNav"></div>
          <!-- 导航栏 -->
          <transition name="fade">
            <div class="quick_nav" v-if="quicknav">
              <div class="tranigle"></div>
              <div class="quick_text">快速导航</div>
              <div class="five_box">
                <div class="quick_item" @click="toMainPage">
                  <div class="main_bgd"></div>
                  <div class="main_text">首页</div>
                </div>
                <div class="quick_item" @click="toSearchPage">
                  <div class="search_bgd"></div>
                  <div class="search_text">搜索</div>
                </div>
                <div class="quick_item" @click="toCartPage">
                  <div class="mycart_bgd"></div>
                  <div class="mycart_text">购物车</div>
                </div>
                <div class="quick_item" @click="toMyPage">
                  <div class="myeasy_bgd"></div>
                  <div class="myeasy">我的易购</div>
                </div>
                <div class="quick_item" @click="toClassifyPage">
                  <div class="all_bgd"></div>
                  <div class="all_classify">全部分类</div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- 价格 -->
      <div class="price_container">
        <!-- 价格 -->
        <div class="price">
          <span class="price_number" @scroll="nubs">
            ￥{{$route.query.price1}}
            <span id="small_number">{{$route.query.price2}}</span>
          </span>
          <span class="new_yeartag">新年特惠</span>
          <span class="origin_price">￥290.00</span>
        </div>
        <!-- 点击查看 -->
        <div class="view_container">
          <div class="gray_container" @scroll="pageScroll">
            <div class="title_container">
              <div class="member">SUPER会员预计返价格1.19元云钻</div>
              <div class="welfare">福利上新！您有每月100元礼包待领取</div>
            </div>
            <div class="clickview">点击查看</div>
          </div>
        </div>
        <!-- 关注 -->
        <div class="attention_container">
          <div class="attention_menu">
            <div class="media_title">
              <span class="intro_text">{{text}}</span>
            </div>
            <div class="attention_img">
              <img src="../../assets/detailsImg/detailspage/attention.png" alt />
            </div>
          </div>

          <p class="net">【全网热卖】喜庆中国红；双智能安全检测一键排气</p>
        </div>
        <div class="fix"></div>
      </div>
      <!-- 折扣 -->
      <div class="discount_container">
        <div class="party_active">
          <div class="join_active">
            参加以下活动最高减
            <b>20.00元</b>
          </div>
          <div class="look_more">查看更多</div>
        </div>
      </div>
      <!-- 优惠券 -->
      <div class="coupon_container">
        <div>
          <span class="gray_color">促销</span>
          <span class="promotion">云钻促销</span>
          <span>普通会员立返14云钻</span>
        </div>
        <div class="minus_container">
          <span class="full_minus">满减</span>
          <span class="two">每满299元减20元</span>
        </div>
      </div>
      <div class="do_container" @click="seeClick">
        <div class="do">
          <span class="gray_color">刮券</span>
          <span class="h_gua">100%刮中券，最高50元无敌券</span>
        </div>
        <div class="right second r_icon"></div>
      </div>
      <div class="fix"></div>
      <div class="service_container">
        <div class="has_select" @click="addServe">
          <div class="ser_container">
            <span class="gray_color">已选</span>
            <span class="bold_text detail">{{hcontent}} 可选增值服务</span>
          </div>
          <div class="right second r_icon_"></div>
        </div>
        <div class="has_select" @click="addressClick">
          <div class="ser_container">
            <span class="gray_color">送至</span>
            <span class="detail">{{provinceinfor}} {{cityinfor}} {{areainfor}}</span>
          </div>
          <div class="right second r_icon_"></div>
        </div>
        <div class="has_select">
          <div class="ser_container">
            <span class="gray_color">付款</span>
            <span class="detail">支持 易付宝 支付宝</span>
          </div>
        </div>
        <div class="has_select">
          <div class="ser_container">
            <span class="gray_color">运费</span>
            <span class="detail">免运费</span>
          </div>
        </div>
        <div class="has_select ui" @click="serviceClick">
          <div class="ser_container">
            <span class="gray_color">服务</span>
            <span class="detail seven">苏宁发货</span>
            <span class="detail seven">7天无理由退货</span>
            <span class="detail seven">自提</span>
          </div>

          <div class="right second r_icon_"></div>
        </div>

        <!--  -->
      </div>
      <!-- 评价 -->
      <div class="fix"></div>
      <div class="gray_box">
        <div class="six_container" @click="commentClick">
          <div class="six_head">
            <div class="fifth">评价(15万+)</div>
            <div class="six_right">
              <div class="full_good">100%好评率</div>
              <div class="r_icon"></div>
            </div>
          </div>
          <!-- xx -->
          <div class="people">
            <div class="people_left">
              <div class="people_img"></div>
              <div class="people_name">1***9</div>
            </div>
            <div class="people_star"></div>
          </div>
          <p class="people_say">发货神速，锅也很好用</p>
          <div class="show_container">
            <img src="../../assets/detailsImg/detailspage/show.jpg" alt class="show_img" />
            <img src="../../assets/detailsImg/detailspage/show.jpg" alt class="show_img" />
          </div>
          <div class="see_all_container">
            <button>查看全部评价</button>
          </div>
        </div>
      </div>
      <!-- 加入购物车 -->
      <div class="footer">
        <div class="icon_item">
          <img src="../../assets/detailsImg/detailspage/service.png" alt />
        </div>
        <div class="icon_item">
          <img src="../../assets/detailsImg/detailspage/shop.png" alt />
        </div>
        <div class="icon_item cartbox">
          <img src="../../assets/detailsImg/detailspage/cart.png" alt />
          <!-- 红点 -->
        </div>
        <button class="qucik" @click="enterCart">马上抢</button>
        <button class="join_cart" @click="addCart">加入购物车</button>
        <!-- 遮罩层 -->

        <div class="up" v-if="up" @click="toTop"></div>
        <div class="zj"></div>

        <!--  -->
      </div>
      <!--  -->

      <div v-html="desc">

      </div>

    </div>
  </div>
</template>

<script>
import Axios from "axios";
import cartselect from "../part_page/cart_select.vue";
import addressselect from "../part_page/address_select.vue";
import serviceselect from "../part_page/service_select.vue";
import quicknav from "../part_page/quicknav.vue";
import detailswiper from "./detail_swiper.vue";

export default {
  props: ["value"],
  data() {
    return {
      cover: false,
      selectpage: false,
      addresspage: false,
      quicknav: false,
      servicepage: false,
      close: false,
      more: true,
      see: false,
      num: 1,
      zero: false,
      ozy: false,
      up: false,
      hcontent: "",
      hnum: "",
      desc:''
    };
  },
  computed: {
    text() {
      return this.$route.query.title;
    },
   provinceinfor() {
      if (
        this.$store.state.provinceinfor == "北京" ||
        this.$store.state.provinceinfor == "天津" ||
        this.$store.state.provinceinfor == "上海" ||
        this.$store.state.provinceinfor == "重庆"
      ) {
        return this.$store.state.provinceinfor + "市";
      } else {
        return this.$store.state.provinceinfor + "省";
      }
    },
    cityinfor() {
      if (
        this.$store.state.provinceinfor == "北京" ||
        this.$store.state.provinceinfor == "天津" ||
        this.$store.state.provinceinfor == "上海" ||
        this.$store.state.provinceinfor == "重庆"
      ) {
        return ""
      }
      else{
        return this.$store.state.cityinfor+"市";
      }
    },
    areainfor() {
      return this.$store.state.areainfor;
    }
  },
  components: {
    detailswiper,
    cartselect,
    addressselect,
    serviceselect
  },
  methods: {
    toMainPage() {
      console.log(666);
      this.quicknav=false;
      this.$router.push({
        path: "/"
      });
    },
    toClassifyPage() {
      this.$router.push({
        path: "/Classification"
      });
    },
    toMyPage() {
      this.$router.push({
        path: "/myebay"
      });
    },
    toSearchPage() {
      this.$router.push({
        path: "/mustgrablist"
      });
    },
    toCartPage() {
      this.$router.push({
        path: "/shoppingcart"
      });
    },
    closeMain() {
      console.log(666);
      this.cover = false;
    },
    hjySelect(item) {
      this.hcontent = item.type;
      this.hnum = item.count + "件";
    },
    enterCart() {
      this.cover = true;
      this.selectpage = true;
    },
    addCart() {
      this.enterCart();
    },
    addServe() {
      this.enterCart();
    },
    cancelBtn() {
      this.cover = false;
      this.selectpage = false;
      this.addresspage = false;
      this.servicepage = false;
      this.see = false;
    },
    coverRelieve() {
      this.selectpage = false;
      this.addresspage = false;
      this.cover = false;
      this.quicknav = false;
      this.servicepage = false;
      this.see = false;
      this.close = false;
    },
    addressClick() {
      this.cover = true;
      this.addresspage = true;
    },
    commentClick() {
      this.$router.push({
        path: "/comment"
      });
    },
    backMainpage() {
      // this.$router.push({
      //   path: "/"
      // });
      window.history.go(-1)
    },
    moreClick() {
      this.quicknav = true;
      this.cover = true;
      this.close = true;
    },
    closeNav() {
      this.coverRelieve();
      this.close = false;
    },

    serviceClick() {
      this.servicepage = true;
      this.cover = true;
    },
    seeClick() {
      this.see = true;
      this.cover = true;
    },
    nubs() {
      console.log(111);
    },
    plusNum() {
      this.num++;
      if (this.num != 1) {
        this.zero = false;
      }
    },
    minusNum() {
      this.num--;
      if (this.num == 1) {
        this.zero = true;
      }
    },

    coverNone() {
      this.cover = false;
      this.selectpage = false;
      this.num = 1;
    },
    childValue(provinceMessage) {
      this.$store.state.provinceinfor = provinceMessage;
    },
    cityValue(cityDefaultValue) {
      this.$store.state.cityinfor = cityDefaultValue;
    },
    areaValue(areaDefaultValue) {
      this.$store.state.areainfor = areaDefaultValue;
    },
    pageScroll() {},
    laedscroll() {
      let scrollTop = window.pageYOffset;
      if (scrollTop > 200) {
        this.ozy = true;
        this.up = true;
      } else {
        this.ozy = false;
        this.up = false;
      }
    },
    toTop() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });

    window.addEventListener("scroll", this.laedscroll);


    let id = this.$route.query.id
    if(id){
      this.axios.get('api/productlist?id='+id).then((response)=>{
        this.desc = response.data[0].descript
      })
    }
  }
};
</script>
 



<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* .zj{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  background-color: white;
  z-index: 2;
} */
.address_middle {
  flex-grow: 1;
  overflow: auto;
}
.up {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background: url(../../assets/detailsImg/detailspage/top.png) center center;
  background-size: contain;
}

.img_container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: blueviolet;
  z-index: 1;
}

.img_container img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.price_number {
  color: red;
  font-weight: bold;
}

#small_number {
  font-weight: 700 !important;
  font-size: 0.7rem;
  margin-left: -0.208rem;
}

.new_yeartag {
  display: inline-block;
  margin-left: 0.625rem;
  margin-top: 0.308rem;
  padding: 0 0.317rem;
  border: 0.042rem solid red;
  border-radius: 0.417rem;
  color: red;
  font-size: 0.5rem;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
}

.origin_price {
  margin-left: 0.208rem;
  color: #ccc;
  text-decoration: line-through;
  font-size: 0.5rem;
}

.price {
  padding: 0.9rem 0.417rem 0.625rem 0.417rem;
}

.gray_container {
  display: flex;
  justify-content: space-between;
  padding: 0.417rem 0;
  margin: 0 0.625rem;
  background-color: rgb(246, 246, 246);
  border-radius: 0.25rem;
}

.clickview {
  flex-shrink: 0;
  padding: 0.458rem 0.333rem 0 0;
  font-weight: bold;
  font-size: 0.583rem;
}

.welfare {
  font-size: 0.5rem;
  margin-top: 0.208rem;
}

.title_container {
  white-space: nowrap;
  margin-left: 0.417rem;
}

.member {
  font-size: 0.5rem;
  font-weight: bold;
}

.attention_menu {
  display: flex;
  justify-content: space-between;
}

.media_title {
  margin: 0.625rem 0 0 0.542rem;
}

.attention_img {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.708rem 0.625rem 0 0.625rem;
}

.attention_img img {
  width: 100%;
  height: 100%;
}

.intro_text {
  font-size: 0.64rem;
  font-weight: bold;
}

.net {
  width: 94%;
  margin: 0 3%;
  margin-top: 0.417rem;
  padding-bottom: 0.417rem;
  font-size: 0.583rem;
}

.active {
  display: inline-block;
  width: 0.583rem;
  height: 0.583rem;
  margin-left: 0.625rem;
}

.active img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.fix {
  width: 100%;
  height: 0.417rem;
  background-color: #eee;
}

.party_active {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0.417rem 0.417rem 0;
}

.right {
  display: inline-block;
  width: 0.583rem;
  height: 0.583rem;
}

.right img {
  width: 100%;
  height: 100%;
}

.seemore {
  position: relative;
  flex-shrink: 0;
  color: #aaa;
  font-size: 0.261rem;
  margin-top: -0.542rem;
  margin-right: 0.833rem;
}

.right_container {
  display: flex;
  align-items: center;
}

.get {
  font-size: 0.261rem;
  vertical-align: top;
}

.red_word {
  color: red;
  font-weight: bold;
}

.coupon_container,
.do_container {
  margin-left: 0.625rem;
  border-bottom: 0.042rem solid #eee;
  font-size: 0.48rem;
}

.gray_color {
  font-size: 0.48rem;
  color: #aaa;
}

.promotion {
  display: inline-block;
  margin-left: 0.625rem;
  margin-right: 0.208rem;
  padding: 0 0.208rem;
  border: 0.042rem solid #fb0;
  background-color: #fefbee;
  border-radius: 0.167rem;
}

.minus_container {
  padding: 0.417rem 0;
}

.full_minus {
  margin-left: 1.62rem;
  padding: 0 0.208rem;
  border: 0.042rem solid #fb0;
  border-radius: 0.167rem;
}

.do {
  padding: 0.417rem 0;
}

.do_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right.second {
  margin-right: 0.625rem;
}

.service_container {
  margin-left: 0.625rem;
}

.has_select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.417rem 0;
}

.bold_text {
  font-weight: bold;
}

.detail {
  margin-left: 0.417rem;
  font-size: 0.48rem;
}

.footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  align-items: center;
  background-color: white;
}

.footer_left {
  display: flex;
}

.icon_item {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
}

.icon_item img {
  width: 100%;
  height: 100%;
}

.button_container {
  flex-shrink: 0;
  padding-left: 0.417rem;
}

.button_container button {
  width: 3.958rem;
  height: 1.333rem;
}
.last_btn {
  display: flex;
  justify-content: center;
}
.last_btn button:first-child {
  flex-grow: 1;
  margin-left: 0.417rem;
  margin-right: 0.208rem;
  height: 1.333rem;
  background-color: rgb(255, 204, 0);
  border-radius: 0.25rem 0 0 0.25rem;
  outline: none;
  border-style: none;
  padding: 0 0.625rem;
}
.last_btn button:last-child {
  flex-grow: 1;
  margin-right: 0.417rem;
  background-color: #ff6700;
  color: white;
  outline: none;
  border-style: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

.qucik {
  width: 3.958rem;
  height: 1.333rem;
  margin-left: 0.333rem;
  background-color: rgb(255, 204, 0);
  border-radius: 0.25rem 0 0 0.25rem;
  outline: none;
  border-style: none;
}

.join_cart {
  width: 3.958rem;
  height: 1.333rem;
  margin-left: 0.167rem;
  margin-right: 0.208rem;
  background-color: #ff6700;
  color: white;
  outline: none;
  border-style: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

.details_page {
  margin-bottom: 2rem;
}

.red_circle {
  position: absolute;
  left: 1.167rem;
  top: 0.125rem;
  width: 1.167rem;
  height: 0.75rem;
  color: white;
  font-size: 0.542rem;
  background-color: rgb(255, 68, 34);
  border-radius: 0.458rem;
  text-align: center;
  line-height: 0.625rem;
}
.cartbox {
  position: relative;
}
.two {
  margin-left: 0.417rem;
}
.back {
  position: fixed;
  top: 10px;
  left: 10px;
  width: 1.167rem;
  height: 1.167rem;
  background: url(../../assets/detailsImg/detailspage/left.png) no-repeat;
  background-size: 1.167rem 1.167rem;
}

.more {
  position: fixed;
  top: 0.417rem;
  left: 90%;
  width: 1.167rem;
  height: 1.167rem;
  background: url(../../assets/detailsImg/detailspage/more.png) no-repeat;
  background-size: 1.167rem 1.167rem;
  z-index: 9999;
}
.wrong {
  position: fixed;
  top: 0.417rem;
  left: 90%;
  width: 1.167rem;
  height: 1.167rem;
  background: url(../../assets/detailsImg/detailspage/close-nav2.png) no-repeat;
  background-size: contain;
  z-index: 10001;
}
/* 遮罩层 */

.cover {
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transform: translateY(0%);
  z-index: 103;
}
.cart_select,
.address_select,
.service_select,
.see_select {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0.5%;
  bottom: 0.5%;
  width: 99%;
  height: 18.75rem;
  background-color: white;
  z-index: 999;
  border-radius: 0.333rem;
}

.warn {
  font-size: 0.5rem;
  color: #aaa;
  line-height: 1.75rem;
}
b {
  color: red;
}
.noname {
  height: 1.75rem;
  text-align: center;
}
.cancel_btn {
  display: block;
  float: right;
  width: 0.625rem;
  height: 0.625rem;
  margin-right: 0.417rem;
}
.cancel_btn img {
  width: 100%;
  height: 100%;
}

.address_select_title {
  padding: 0.36rem 0;
  text-align: center;
  font-size: 0.721rem;
  border-bottom: 0.03rem solid #eee;
}
.locate_container {
  display: flex;
}
.locate_container div {
  padding: 0.417rem 0;
  font-size: 0.596rem;
  width: 33.3%;
  text-align: center;
}
.differ_city {
  padding: 0.333rem 0.25rem;
  font-size: 0.596rem;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.zy {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.six_head {
  display: flex;
  justify-content: space-between;
}
.r_icon {
  width: 0.583rem;
  height: 0.583rem;
  margin-right: 0.625rem;
  margin-top: 2px;
  background: url(../../assets/detailsImg/detailspage/right.png) center center
    no-repeat;
  background-size: 0.583rem 0.583rem;
}
.r_icon_ {
  width: 0.583rem;
  height: 0.583rem;
  margin-right: 0.625rem;
  margin-top: 10px;
  background: url(../../assets/detailsImg/detailspage/right.png) center center
    no-repeat;
  background-size: 0.583rem 0.583rem;
}
.six_right {
  display: flex;
}
.full_good {
  margin-right: 0.417rem;
  color: #aaa;
  font-size: 0.28rem;
}
.fifth {
  font-size: 0.6rem;
  font-weight: bold;
}
.kkk {
  display: flex;
}
.people {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.people_img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: url(../../assets/detailsImg/commentImg/user.jpg) center center;
  background-size: 1rem 1rem;
}
.people_left {
  display: flex;
  align-items: center;
  margin-top: 0.833rem;
}
.people_name {
  margin-left: 0.208rem;
  font-size: 0.24rem;
}
.people_star {
  width: 2.72rem;
  height: 0.48rem;
  margin-right: 0.625rem;
  margin-top: 0.625rem;
  background: url(../../assets/detailsImg/commentImg/yellowstar.png) center
    center no-repeat;
  background-size: 2.72rem 0.48rem;
}

.six_container {
  padding: 0px 0 0.625rem 0.625rem;
  background-color: white;
  margin-top: 0.417rem;
}
.gray_box {
  background-color: #eee;
}
.people_say {
  margin: 0.417rem 0 0 0.125rem;
  font-size: 0.583rem;
}
.show_container {
  margin: 0.417rem 0 0 0.208rem;
}
.see_all_container button {
  width: 4.8rem;
  height: 1.2rem;
  background-color: white;
  border-radius: 0.12rem;
  font-size: 0.26rem;
  outline: none;
  border: 0.042rem solid#ccc;
}
.see_all_container {
  margin-top: 0.208rem;
  text-align: center;
}

.v-enter {
  transform: translateY(18.75rem);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-in;
}
.v-leave-to {
  transform: translateY(18.75rem);
}
.seven::before {
  display: inline-block;
  width: 0.48rem;
  height: 0.48rem;
  content: "";
  vertical-align: middle;
  margin-right: 0.125rem;
  background: url(../../assets/detailsImg/detailspage/yes.png) center center
    no-repeat;
  background-size: 0.48rem 0.48rem;
}
.basic_service {
  font-size: 0.667rem;
  text-align: center;
  padding: 0.333rem 0;
  margin-left: 1.042rem;
  border-bottom: 0.042rem solid #eee;
}
.deliver {
  font-size: 0.48rem;
}
.deliver::before {
  display: inline-block;
  content: "";
  width: 0.66rem;
  height: 0.66rem;
  margin-left: 0.417rem;
  margin-right: 0.208rem;
  vertical-align: middle;
  background: url(../../assets/detailsImg/detailspage/self.png) center center
    no-repeat;
  background-size: 0.66rem 0.66rem;
}
.sn_text {
  padding-left: 1.25rem;
  padding-bottom: 0.333rem;
  font-size: 0.48rem;
  color: #aaa;
  border-bottom: 0.042rem solid #eee;
}
.retreat {
  font-size: 0.48rem;
}
.retreat::before {
  display: inline-block;
  content: "";
  width: 0.66rem;
  height: 0.66rem;
  margin-left: 0.417rem;
  margin-right: 0.208rem;
  vertical-align: middle;
  background: url(../../assets/detailsImg/detailspage/tui.jpg) center center
    no-repeat;
  background-size: 0.66rem 0.66rem;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 0;
}
.fade-enter-active {
  animation: fadeIn 0.3s;
}
.fade-leave-active {
  animation: fadeOut 0.3s;
}
.join_active {
  padding: 0.208rem 0.417rem;
  font-size: 0.48rem;
}
.look_more {
  font-size: 0.48rem;
  color: #aaa;
}
.look_more::after {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  content: "";
  background: url(../../assets/detailsImg/detailspage/right.png);
  background-size: contain;
  margin-right: 0.208rem;
  vertical-align: middle;
}
.join_active::before {
  display: inline-block;
  width: 0.52rem;
  height: 0.52rem;
  content: "";
  background: url(../../assets/detailsImg/detailspage/ok.png) center center
    no-repeat;
  background-size: contain;
  margin-left: 0.208rem;
  margin-right: 0.125rem;
}
.minus_money {
  padding: 0.333rem 0;
  padding-left: 1.04rem;
  font-size: 0.72rem;
  text-align: center;
  border-bottom: 0.042rem solid#eee;
}

.up_ {
  padding: 0.417rem 0;
  font-size: 0.48rem;
}
.see_footer {
  margin-left: 0.417rem;
}
.first_minus {
  display: flex;
  margin-top: 0.417rem;
}
.second_left {
  display: flex;
}
.diamond,
.shiming {
  height: 0.875rem;
  flex-shrink: 0;
  padding: 0 0.167rem;
  font-size: 0.5rem;
  border: 0.042rem solid #fb0;
  border-radius: 0.167rem;
  line-height: 0.833rem;
}
.see_text,
.ten {
  margin-left: 0.208rem;
  padding-right: 0.542rem;
  font-size: 0.48rem;
}
.second_see_ten {
  display: flex;
  justify-content: space-between;
  margin-top: 0.417rem;
}
.ten {
  margin-top: 0.042rem;
}
.right_sign {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.417rem;
  background: url(../../assets/detailsImg/detailspage/right.png) center center;
  background-size: contain;
}
/* body {
  background-color: white !important;
  line-height: 1 !important;
} */
.quick_nav {
  position: fixed;
  width: 96%;
  height: 9.042rem;
  margin: 1.458rem 2%;
  background-color: white;
  border-radius: 0.333rem;
}
.lvzy {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: white;
}
.h_gua {
  margin-left: 0.5rem;
}
.quick_nav {
  position: fixed;
  left: 0;
  top: 0.7rem;
  width: 96%;
  height: 9.042rem;
  margin: 1.458rem 2%;
  background-color: white;
  border-radius: 0.333rem;
}
.tranigle {
  position: absolute;
  left: 321px;
  top: -14px;
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent white transparent;
}
.quick_text {
  padding: 0.625rem 0.417rem;
  font-size: 0.583rem;
}
.five_box {
  /* width: 13rem; */
  display: flex;
  flex-wrap: wrap;
}
.quick_item {
  width: 2.88rem;
  height: 2.76rem;
  margin-left: 0.583rem;
  background-color: #eee;
  border-radius: 0.25rem;
}
.five_box .quick_item:last-child {
  margin-top: 0.583rem;
}
.main_text,
.search_text,
.all_classify,
.myeasy,
.mycart_text {
  margin-top: 0.125rem;
  font-size: 0.583rem;
  text-align: center;
}
.main_bgd {
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/main.png) center bottom
    no-repeat;
  background-size: 0.958rem 0.958rem;
}
.search_bgd {
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/search.png) center bottom
    no-repeat;
  background-size: 0.958rem 0.958rem;
}
.mycart_bgd {
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/yellowcart.png) center
    bottom no-repeat;
  background-size: 0.958rem 0.958rem;
}
.myeasy_bgd {
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/my.png) center bottom
    no-repeat;
  background-size: 0.958rem 0.958rem;
}
.all_bgd {
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/classify.png) center
    bottom no-repeat;
  background-size: 0.958rem 0.958rem;
}
</style>