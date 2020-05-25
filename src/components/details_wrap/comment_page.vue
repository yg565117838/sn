<template>
  <div>
    <div class="comment_page">
      <div class="comment_header">
        <div class="comment_icon_left" @click="backPage">
          <img src="../../assets/detailsImg/commentImg/back.png" alt />
        </div>
        <div class="comment_text">商品评价</div>
        <div class="comment_icon_more">
          <img src="../../assets/detailsImg/commentImg/more.png" alt />
        </div>
      </div>
      <div class="good_commend">好评率100%</div>
      <div class="comment_select">
        <div class="comment_item">全部(52)</div>
        <div class="comment_item">最新</div>
        <div class="comment_item">有图(3)</div>
        <div class="comment_item">好评(52)</div>
        <div class="comment_item">中评(0)</div>
        <div class="comment_item">差评(0)</div>
        <div class="comment_item">追评(0)</div>
        <div class="comment_item">视频(0)</div>
        <div class="comment_item">好看漂亮(13)</div>
      </div>
      <div class="comment_body">
        <!-- 用户 -->
        <div class="all_user" :key="index" v-for="(item,index) in 6">
          <div class="comment_user">
            <div class="user_left">
              <img src="../../assets/detailsImg/commentImg/user.jpg" alt />
            </div>
            <div class="user_right">
              <div class="right_top">
                <div class="comment_infor">1****4</div>
                <div class="star_container"></div>
              </div>
              <div class="right_foot">
                <div class="comment_infor">2020-04-05</div>
                <div class="comment_infor">推荐级别</div>
              </div>
            </div>
          </div>
          <div class="comment_infor sss">【新品上新】 4.8L单圆灶釜</div>
          <div class="comment_user_text">苏宁快递好，好个锤子好大，爱几点睡加载的过程中，我们希望在浏览器开始主体渲染之前尽早 p。的加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。垃圾堆里加上来得及爱上加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。了卡拉事件代理撒娇的来电姜辣素氪金大佬拉可视角度</div>
        </div>

        <!-- yh -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
methods:{
  backPage(){
   window.history.go(-1);
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
.comment_body {
  background-color: rgb(242, 242, 242);
}
.comment_page {
  display: flex;
  flex-direction: column;
}
.comment_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  height: 1.76rem;
  color: white;
  background-image: linear-gradient(to right, #ffaa00 30%, #f76b1c 90%);
}
.comment_body {
  flex-grow: 1;
}
.comment_text {
  font-size: 0.6rem;
}
.comment_icon_left {
  margin: 0.208rem 0 0 0.625rem;
}
.comment_icon_more {
  margin: 0.208rem 0.625rem 0 0;
}
.good_commend {
  padding: 0.625rem 0 0.625rem 0.625rem;
  font-size: 0.48rem;
  border-bottom: 0.042rem solid #eee;
}
.comment_select {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.417rem;
  margin-top: 0.208rem;
}
.comment_item {
  font-size: 0.48rem;
  letter-spacing: 0;
  background-color: #fff5ef;
  border-radius: 0.61rem;
  padding: 0.21rem 0.64rem;
  margin: 0.24rem 0.25rem;
  box-sizing: border-box;
}
.comment_user,
.user_left,
.right_top,
.right_foot {
  display: flex;
}
.user_left {
  flex-shrink: 0;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  margin-right: 0.4rem;
}
.user_left img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.comment_infor {
  font-size: 0.52rem;
  color: #666;
}
.right_top,
.right_foot {
  justify-content: space-between;
}
.user_right {
  flex-grow: 1;
}
.star_container {
  width: 3.2rem;
  height: 0.48rem;
  background: url(../../assets/detailsImg/commentImg/star.png) no-repeat;
  background-size: 3.2rem 0.48rem;
}
.comment_user {
  margin-top: 0.5rem;
  padding: 0.417rem 0.625rem 0 0.625rem;
}
.all_user{
    background-color: white;
}
.sss{
   margin:0.333rem 0 0 0.625rem;
}
.comment_user_text{
    font-size: 0.56rem;
    padding: 0.417rem 0.417rem 0.625rem 0.5rem;
}
</style>