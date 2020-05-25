<template>
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
</template>

<script>
export default {
  props: ["quicknav","cover"],
  data(){
    return {
      test:false
    }
  },
  methods: {
    toMainPage() {
      this.$emit("main-page");
      // this.$router.push({
      //   path: "/"
      // });
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
    }

    // 
  }
};
</script>


<style>
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