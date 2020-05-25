<template>
  <div class="conrten">
    <div class="all_box">
      <div class="true_title">
        <div class="git"></div>
        <div>购物车</div>
        <div class="edit" @click="editClick">{{editbtn}}</div>
      </div>
      <div class="label_one">
        <span>{{provinceinfor}} {{cityinfor}} {{areainfor}}</span>
        <div class="icon_right"></div>
      </div>
      <div class="overall_good" :key="index" v-for="(item,index) in shopList">
        <div class="addshop">
          <div class="add_head">
            <span class="check_box">
              <input
                type="checkbox"
                class="true_enter"
                @change="boxChange(index,item)"
                :checked="item.status"
              />
              <span class="inner" v-show="item.status"></span>
            </span>
            <div class="self">
              <img src="../assets/detailsImg/detailspage/lion.png" alt />
            </div>
            <div class="sn">苏宁自营</div>
          </div>
          <div class="has_free">已免运费</div>
        </div>

        <!-- 2 -->
        <div class="second_part">
          <span class="check_box ff">
            <input
              type="checkbox"
              name
              id
              class="true_enter"
              @change="boxChange(index,item)"
              :checked="item.status"
            />
            <span class="inner" v-show="item.status"></span>
          </span>
          <div class="right_true">
            <div class="pic">
              <img :src="item.img" alt />
            </div>
            <div class="true_text">
              <p class="article">{{item.title}}</p>
              <div class="big_container">
                <div class="big">{{item.qt}}</div>
                <div class="buy_service">购买服务</div>
              </div>
              <span class="secondkill">秒杀</span>
              <div class="last">
                <div class="piice">
                  ￥{{item.integer}}
                  <span class="xiao">{{item.decimals}}</span>
                </div>
                <div class="select_wrap_container">
                  <button class="minus clearfix" @click="cartMinus(item)" :disabled="zero">-</button>
                  <input type="text" class="input_container clearfix" :value="item.num" />
                  <i class="plus clearfix" @click="cartPlus(item)">+</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- cai -->

      <div class="youlike"></div>
      <!-- cai -->

      <!-- 商品列表 -->
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
    </div>

    <!-- 结算 -->
    <div class="count_page">
      <div class="count_left">
        <span class="check_box">
          <input type="checkbox" name id class="trueenter" @change="allChange" checked />
          <span class="inner2" v-show="yes"></span>
        </span>
        <span class="all">全部</span>
      </div>
      <div class="count_right">
        <div class="count_text" v-show="flag">
          <div class="all_money">
            <span>合计：</span>
            <span class="good_price">
              <span class="sign">￥</span>
              {{countPrice}}.
              <span class="smallsign">{{countSmall}}</span>
            </span>
          </div>
          <div class="road">
            <span>含运费:</span>
            <span>￥0</span>
          </div>
        </div>
        <button @click="changeBtn">
          {{message}}
          <b class="delete_" v-if="b">({{count}})</b>
        </button>
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
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import store from "../store/index.js";
export default {
  data() {
    return {
      zero: false,
      status: true,
      editbtn: "编辑",
      message: "去结算",
      flag: true,
      b: true,
      yes: false,
      flag: true,
      filterArray: []
    };
  },
  computed: {
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
    },
    shopList() {
      return this.$store.state.shopList;
    },
    count() {
      let sum = 0;
      for (let i = 0; i < this.shopList.length; i++) {
        if (this.shopList[i].status == true) {
          sum += this.shopList[i].num;
          sum = parseInt(sum);
        }
      }
      return sum;
    },
    countPrice() {
      let price = 0;
      for (let i = 0; i < this.shopList.length; i++) {
        if (this.shopList[i].status == true) {
          price += this.shopList[i].integer * this.shopList[i].num;
        }
      }
      return price;
    },
    countSmall() {
      let smallnum = 0;
      for (let i = 0; i < this.shopList.length; i++) {
        if (this.shopList[i].status == true) {
          smallnum += this.shopList[i].decimals.slice(1) * this.shopList[i].num;
        }
      }
      return smallnum;
    }
  },
  methods: {
    cartPlus(item) {
      item.num++;
      if (item.num != 1) {
        this.zero = false;
      }
    },
    cartMinus(item) {
      item.num--;
      if (item.num == 1) {
        this.zero = true;
      }
    },
    editClick() {
      if (this.editbtn == "编辑") {
        this.editbtn = "完成";
        this.message = "删除";
        this.flag = false;
        this.b = false;
      } else if (this.editbtn == "完成") {
        this.editbtn = "编辑";
        this.message = "去结算";
        this.flag = true;
        this.b = true;
      }
    },
    boxChange(index, item) {
      this.$store.state.shopList[index].status = !this.$store.state.shopList[
        index
      ].status;
      let flag = true;
      for (let i = 0; i < this.shopList.length; i++) {
        if (!this.shopList[i].status) {
          flag = false;
          break;
        }
      }
      this.yes = flag;
    },

    allChange() {
      this.yes = !this.yes;
      if (this.yes == true) {
        for (let i = 0; i < this.shopList.length; i++) {
          this.shopList[i].status = true;
        }
      }
      if (this.yes == false) {
        for (let i = 0; i < this.shopList.length; i++) {
          this.shopList[i].status = false;
        }
      }
    },
    changeBtn() {
      if (this.message == "删除") {
        this.$store.commit("deleteGood");
      }
    }
  }
};
</script>
<style scoped>
.youlike {
  width: 8.16rem;
  height: 0.96rem;
  margin-left: 4.1rem;
  background: url(../assets/detailsImg/detailspage/like.png) center center;
  background-size: contain;
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
.all {
  font-size: 0.56rem;
  margin-left: 0.208rem;
  margin-top: 0.13rem;
}
.all_money {
  font-size: 0.56rem;
}
.road {
  font-size: 0.45rem;
  margin-top: 0.208rem;
}
.sign {
  font-weight: 700;
  font-size: 0.4rem;
}
.smallsign {
  margin-left: -0.133rem;
  font-size: 0.3rem;
  font-weight: 900;
}
.shop_wrap {
  padding: 0.7rem;
  border-radius: 0.333rem;
}
.count_page {
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
.count_right {
  display: flex;
}
.count_right button {
  width: 4rem;
  height: 1.24rem;
  background-color: #fb0;
  flex-shrink: 0;
  border-style: none;
  outline: none;
  border-radius: 0.208rem;
  font-weight: 700;
}
.count_text {
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
  font-size: 0.7rem;
}
.sign {
  color: red;
}
.shop_title {
  font-size: 0.5rem;
  font-weight: 700;
}
.conrten {
  margin-bottom: 2rem;
  background-color: rgb(242, 242, 242);
}
.last {
  padding-bottom: 0.9rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
}
.most {
  margin-top: 0.5rem;
  color: #ff6700;
}
.count_left {
  display: flex;
}
.count_page {
  padding: 0.417rem;
}
.overall_good {
  margin-right: 0.417rem;
  margin-bottom: 0.417rem;
  background-color: white;
  border-radius: 0.3rem;
}
.secondkill {
  padding: 0.042rem 0.08rem;
  color: white;
  background-color: #ff6700;
  border-radius: 0.233rem;
}
.big,
.buy_service {
  padding: 0.066rem;
  background-color: #eee;
}
.buy_service::after {
  margin-left: 0.06rem;
  content: "∨";
  color: #aaa;
}
.big_container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.35rem;
}
.article {
  font-weight: bold;
  line-height: 0.7rem;
}

.piice {
  margin-top: 0.5rem;
  font-weight: 800;
  color: #ff6700;
}
.big::after {
  margin-left: 0.06rem;
  content: "∨";
  color: #aaa;
}
.big_container {
  margin-top: 0.3rem;
}
.true_text {
  padding: 0.042rem 0.717rem 0 0.417rem;
  font-size: 0.54rem;
}
.right_true {
  display: flex;
}
.pic {
  flex-shrink: 0;
  width: 3.51rem;
  height: 3.51rem;
  margin-left: 0.55rem;
}
.pic img {
  width: 100%;
  height: 100%;
}
.ff {
  margin-left: 0.208rem;
  margin-top: 1.3rem;
}

.second_part {
  display: flex;
  margin-top: 0.5rem;
}
.overall_good {
  margin-left: 0.417rem;
}
.self {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.4rem;
  vertical-align: middle;
}
.self img {
  width: 100%;
  height: 100%;
}
.has_free {
  margin-top: 0.208rem;
  margin-right: 0.417rem;
  color: #ff6700;
}
.sn {
  margin-top: 0.208rem;
  margin-left: 0.208rem;
}
/* inner  span标签 */
.inner {
  position: absolute;
  right: 0;
  width: 18px;
  height: 18px;

  transform: rotate(0deg);
  box-sizing: border-box;
  border: 0 !important;
  background: url(//oss.suning.com/vss/activity/wximg/cart/selected-icon.png)
    no-repeat !important;
  -webkit-background-size: 100% 100% !important;
  -moz-background-size: 100% 100% !important;
  background-size: 100% 100% !important;
}
.inner2 {
  position: absolute;
  right: 0;
  width: 18px;
  height: 18px;

  transform: rotate(0deg);
  box-sizing: border-box;
  border: 0 !important;
  background: url(//oss.suning.com/vss/activity/wximg/cart/selected-icon.png)
    no-repeat !important;
  -webkit-background-size: 100% 100% !important;
  -moz-background-size: 100% 100% !important;
  background-size: 100% 100% !important;
}
/* 复选框 */
.true_enter {
  flex-shrink: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  border: 0 none;
  appearance: none;
  box-sizing: border-box;
}
.trueenter {
  flex-shrink: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  border: 0 none;
  appearance: none;
  box-sizing: border-box;
}
/* 外面包裹的span */
.check_box {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  z-index: 10;
  border: 1px solid#ccc;
  border-radius: 50%;
  background-color: #fff;
}

.git {
  width: 0.917rem;
  height: 0.417rem;
}
.edit {
  color: blue;
  font-size: 0.55rem;
}
.add_head {
  padding: 0.208rem;
  display: flex;
}

.addshop {
  padding-top: 0.4rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
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
.icon_right {
  width: 0.833rem;
  height: 0.833rem;
  background: url(../assets/detailsImg/detailspage/boldright.png) center center;
  background-size: contain;
}
.true_title {
  display: flex;
  padding: 0.417rem;
  align-items: center;
  justify-content: space-between;
  font-size: 0.68rem;
  color: #222;
  border-bottom: 0.042rem solid#ddd;
}
.xiao {
  margin-left: -0.18rem;
  font-size: 0.2rem;
}
.footer {
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
.secondkill {
  font-size: 0.1rem;
}
.delete_ {
  color: black;
}
</style>