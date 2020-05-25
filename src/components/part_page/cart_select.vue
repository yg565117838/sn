<template>
  <transition>
    <div class="cart_select" v-if="selectpage">
      <!-- 定位 -->
      <div class="style_img">
        <img :src="this.$route.query.img" alt />
      </div>
      <!-- 头部 -->
      <div class="cart_select_header">
        <div class="interlayer"></div>
        <div class="cancel_box">
          <div class="cancel_btn" @click="cartCancel">
            <img src="../../assets/detailsImg/detailspage/cancel.png" alt />
          </div>
          <div class="cart_select_price">
            <p class="change_price">￥{{$route.query.price1}}{{$route.query.price2}}</p>
            <span class="coding">商品编码：1005010218</span>
          </div>
          <div class="cart_select_text">{{$route.query.title}}</div>
        </div>
      </div>
      <!-- 中间（auto） -->
      <div class="cart_select_middle">
        <div class="capacity">规格</div>
        <div class="kind">
          <div class="first_line">
            <span
              class="select_label"
              :key="index"
              v-for="(item,index) in spece"
              :class="{'active':selectPage==index}"
              @click="speceClick(item,index)"
            >
              <div class="mini_img">
                <img :src="image" alt />
              </div>
              <span class="cart_select_name">{{item.type}}</span>
            </span>
          </div>
        </div>
        <!-- 选择数量 -->
        <div class="cart_select_number">
          <div class="number_text">购买数量</div>
          <div class="select_wrap_container">
            <button class="minus clearfix" @click="minus" :disabled="can">-</button>
            <input type="text" class="input_container clearfix" @change="numChange" v-model="zy" />
            <i class="plus clearfix" @click="plus">+</i>
          </div>
        </div>
        <!-- 选择数量 -->
        <!-- 购买增值服务 -->
        <div class="buy_container">
          <div class="buy_add_service">购买增值服务</div>
          <div class="addmoney_service">
            <div>
              <span class="draw">领延保券</span>
              <span class="add_number_left">
                <i class="left_bgd"></i>
                ￥200.00
              </span>
              <span class="opacity">
                最高减200元
                <i class="right_bgd"></i>
              </span>
            </div>
            <div class="right_alltwo">
              <span class="all_two">共2张</span>
            </div>
          </div>
        </div>
        <!-- 购买增值服务 -->
        <!-- 只换不修 -->
        <div>
          <div class="changenot">
            <div class="change_left">
              <i class="not_img">
                <img src="../../assets/detailsImg/shopcartImg/changenot.png" alt />
              </i>
              <span class="not_text">只换不修</span>
              <span class="protect_text">厂保性能保障...</span>
            </div>
            <div class="change_right">
              <span class="see_details">查看详情</span>
              <i class="unknow">
                <img src="../../assets/detailsImg/shopcartImg/unknow.png" alt />
              </i>
            </div>
          </div>
          <!-- 只换不修 -->
          <!-- 选项 -->
          <div class="options">
            <div class="top_line">
              <span class="options_plan">只换不修1年 | ￥70.00</span>
              <span class="options_plan ig">只换不修2年 | ￥105.00</span>
            </div>
            <div class="foot_line">
              <span class="options_plan">只换不修3年 | ￥150.00</span>
            </div>
          </div>
          <!-- 选项 -->
        </div>

        <!-- 整机保 -->

        <div>
          <div class="changenot">
            <div class="change_left">
              <i class="not_img">
                <img src="../../assets/detailsImg/shopcartImg/allpro.png" alt />
              </i>
              <span class="not_text">全保修</span>
              <span class="protect_text">性能以外全保修</span>
            </div>
            <div class="change_right">
              <span class="see_details">查看详情</span>
              <i class="unknow">
                <img src="../../assets/detailsImg/shopcartImg/unknow.png" alt />
              </i>
            </div>
          </div>
          <!-- 只换不修 -->
          <!-- 选项 -->
          <div class="options">
            <div class="top_line">
              <span class="options_plan">全保修3年 | ￥59.00</span>
              <span class="options_plan ig">全保修5年 | ￥79.00</span>
            </div>
          </div>
          <!-- 选项 -->
        </div>
        <!-- 整机保 -->

        <!-- 全保修 -->
        <div>
          <div class="changenot">
            <div class="change_left">
              <i class="not_img">
                <img src="../../assets/detailsImg/shopcartImg/allpro2.png" alt />
              </i>
              <span class="not_text">整机保</span>
              <span class="protect_text">整机性能故障免费...</span>
            </div>
            <div class="change_right">
              <span class="see_details">查看详情</span>
              <i class="unknow">
                <img src="../../assets/detailsImg/shopcartImg/unknow.png" alt />
              </i>
            </div>
          </div>
          <!-- 只换不修 -->
          <!-- 选项 -->
          <div class="options">
            <div class="top_line">
              <span class="options_plan">整机保2年 | ￥39.00</span>
              <span class="options_plan ig">整机保3年 | ￥59.00</span>
            </div>
            <div class="foot_line">
              <span class="options_plan">整机保4年 | ￥89.00</span>
            </div>
          </div>
          <!-- 选项 -->
        </div>
        <!-- 全保修 -->
        <!-- 百万 -->

        <div>
          <div class="changenot">
            <div class="change_left">
              <i class="not_img">
                <img src="../../assets/detailsImg/shopcartImg/changenot.png" alt />
              </i>
              <span class="not_text">百万家财保障</span>
              <span class="protect_text">百万保额，先补录...</span>
            </div>
            <div class="change_right">
              <span class="see_details">查看详情</span>
              <i class="unknow">
                <img src="../../assets/detailsImg/shopcartImg/unknow.png" alt />
              </i>
            </div>
          </div>
          <!-- 只换不修 -->
          <!-- 选项 -->
          <div class="options">
            <div class="top_line">
              <span class="options_plan">￥20.00</span>
            </div>
          </div>
          <!-- 选项 -->
        </div>
        <!-- 百万 -->
      </div>
      <!-- 底部 -->
      <div class="cart_select_footer">
        <div class="noname">
          <span class="warn">
            当前活动可参加满减活动，预计优惠
            <b>20.00元</b>
          </span>
        </div>
        <div class="last_btn">
          <button>马上去抢购</button>
          <el-button :plain="true" @click="open2">加入购物车</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import store from "../../store/index.js";
export default {
  props: ["selectpage", "zero", "num", "cover"],
  methods: {
    cartCancel() {
      this.$emit("cart-cancel");
    },
    minus() {
      this.zy--;
      if (this.zy == 1) {
        this.can = true;
      }
    },
    plus() {
      this.zy++;
      if (this.zy != 1) {
        this.can = false;
      }
    },
    numChange() {
      if (this.zy <= 0) {
        this.zy = 1;
      }
      if (isNaN(this.zy)) {
        this.zy = 1;
      }
    },

    open2() {
        this.$emit("cover-none");
        this.$message({
          message: "加入购物车成功",
          type: "success"
        });
        let qt = this.$route.query.qt;
        let title = this.$route.query.title;
        let integer = this.$route.query.price1;
        let decimals = this.$route.query.price2;
        let img = this.$route.query.img;
        let num = parseInt(this.zy);
        let status = false;
        let obj = {
          qt: qt,
          title: title,
          integer: integer,
          decimals: decimals,
          img: img,
          num: num,
          status: false
        };
        this.$store.commit("addData", obj);
        this.selectPage = 0;
        this.zy = 1;
    
    },
    speceClick(item, index) {
      this.selectPage = index;
      this.$route.query.price1 = item.count;
      this.$route.query.qt = item.type;
      this.$emit("hjy-select", item);
    }
  },
  data() {
    return {
      selectPage: 0,
      zy: 1,
      can: false
    };
  },
  computed: {
    spece() {
      return this.$route.query.spece;
    },
    image() {
      return this.$route.query.img;
    }
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>
<style>
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

.interlayer {
  flex-shrink: 0;
  width: 5rem;
  height: 5rem;
}
.cart_select_header {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 0 0 0.417rem 0;
  border-bottom: 0.042rem solid #eee;
}

.cart_select_footer {
  flex-shrink: 0;
}
.cart_select_price {
  margin-top: 1.667rem;
}
.change_price {
  color: red;
  font-size: 0.583rem;
}
.coding {
  margin-left: 0.167rem;
  color: #aaa;
  font-size: 0.5rem;
}
.cart_select_text {
  font-size: 0.5rem;
  margin: 0.417rem 0.625rem 0 0.167rem;
}
.capacity {
  padding: 0.25rem 0 0.083rem 0.417rem;
  font-size: 0.5rem;
}
.select_label {
  display: inline-block;
  background-color: rgb(246, 246, 246);
  padding: 0.208rem 0.5rem 0.208rem 0.625rem;
  margin-right: 0.25rem;
  margin-top: 0.25rem;
  border-radius: 0.167rem;
  font-size: 0.5rem;
}
.mini_img {
  display: inline-block;
  width: 0.959rem;
  height: 0.959rem;
  margin-right: 0.25rem;
  vertical-align: middle;
}
.mini_img img {
  width: 100%;
  height: 100%;
}
.cart_select_name {
  font-size: 0.5rem;
}
.kind {
  margin-left: 0.417rem;
  padding: 0.042rem 0 0.25rem 0;
  border-bottom: 0.042rem solid #eee;
}
.cart_select_number {
  display: flex;
  justify-content: space-between;
  margin: 0.417rem 0.417rem 0 0.417rem;
  font-size: 0.5rem;
}
.select_wrap_container {
  border: 0.042rem solid #aaa;
  border-radius: 15px;
}
.plus,
.minus {
  float: left;
  width: 0.833rem;
  height: 0.833rem;
  background-color: #eee;
  line-height: 0.833rem;
  text-align: center;
  font-weight: bold;
  font-style: normal;
  border-radius: 50%;
  margin-top: 0.125rem;
}
.minus {
  outline: none;
  border-style: none;
}
.minus {
  margin-left: 0.083rem;
}
.plus {
  margin-right: 0.083rem;
}
.input_container {
  float: left;
  width: 2.083rem;
  height: 1.042rem;
  line-height: 1.042rem;
  border-width: 0;
  text-align: center;
  outline: none;
}

.number_text {
  margin-top: 0.125rem;
}
.addmoney_service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.417rem;
}
.buy_container {
  margin-left: 0.417rem;
}
.draw {
  font-size: 0.542rem;
}
.buy_add_service {
  font-size: 0.583rem;
}
.add_number_left {
  display: inline-block;
  position: relative;
  padding: 0 0.167rem 0.042rem 0.167rem;
  margin-left: 0.417rem;
  background-color: rgb(255, 204, 0);
  font-size: 0.5rem;
}
.opacity {
  display: inline-block;
  position: relative;
  background-color: rgb(255, 250, 224);
  margin-left: -0.083rem;
  padding: 0 0.125rem;
  border: 0.042rem solid rgb(255, 204, 0);
  font-size: 0.5rem;
}
.left_bgd {
  display: inline-block;
  position: absolute;
  left: -0.542rem;
  width: 100%;
  height: 0.708rem;
  z-index: -1;
}
.right_bgd {
  display: inline-block;
  position: absolute;
  top: -0.042rem;
  left: 0.625rem;
  width: 100%;
  height: 0.75rem;
  z-index: -1;
}
.all_two {
  display: inline-block;
  color: #aaa;
  font-size: 0.5rem;
}
.right_alltwo {
  margin-right: 0.625rem;
}
.right_alltwo img {
  vertical-align: middle;
  margin-left: 0.125rem;
}
.changenot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.417rem;
  margin-top: 1.042rem;
}
.not_img {
  flex-shrink: 0;
  display: inline-block;
  width: 0.625rem;
  height: 0.625rem;
}
.not_img img {
  width: 100%;
  height: 100%;
}
.not_text {
  margin-left: 0.208rem;
  font-size: 0.625rem;
}
.protect_text {
  margin-left: 0.208rem;
  color: #aaa;
  font-size: 0.5rem;
}
.unknow {
  flex-shrink: 0;
  display: inline-block;
  width: 0.667rem;
  height: 0.667rem;
  margin-right: 0.417rem;
}
.unknow img {
  width: 100%;
  height: 100%;
}
.see_details {
  margin-right: 0.208rem;
  font-size: 0.5rem;
  color: blue;
}
.options_plan {
  padding: 0.208rem 0.625rem 0.208rem 0.833rem;
  margin-right: 0.208rem;
  font-size: 0.5rem;
  background-color: rgb(246, 246, 246);
  border-radius: 0.167rem;
}

.top_line {
  display: flex;
  justify-content: space-between;
  margin-left: 0.417rem;
  margin-top: 0.417rem;
}
.ig {
  margin-right: 0.625rem;
}
.foot_line {
  margin-top: 0.417rem;
  margin-left: 0.417rem;
}
.cart_select_footer {
  height: 3.541rem;
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
  font-size: 0.5rem;
}
.last_btn button:last-child {
  height: 1.333rem !important;
  flex-grow: 1 !important;
  margin-right: 0.417rem !important;
  background-color: #ff6700 !important;
  color: white !important;
  outline: none !important;
  border-style: none !important;
  border-radius: 0 0.25rem 0.25rem 0 !important;
  font-size: 0.5rem;
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
/* .right {
  display: inline-block;
  width: 0.583rem;
  height: 0.583rem;
}

.right img {
  width: 100%;
  height: 100%;
} */
.style_img {
  position: absolute;
  top: -0.875rem;
  left: 0.417rem;
  width: 4.16rem;
  height: 4.16rem;
  border-radius: 0.333rem;
  border: 0.042rem solid #ccc;
}
.style_img img {
  width: 100%;
  height: 100%;
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
.el-message--success {
  background-color: black !important;
  border-color: black !important;
  text-align: center;
}
.el-message__content {
  color: white !important;
}
.el-icon-success::before {
  content: "" !important;
}
.el-message {
  justify-content: center;
  padding: 15px !important;
}
.active {
  background-color: rgb(255, 237, 162);
  border: 0.042rem solid rgb(255, 204, 0);
}
</style>