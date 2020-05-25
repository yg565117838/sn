<template>
  <transition>
        <div class="service_select" v-if="servicepage">
          <div class="basic_service">
            基础服务
            <div class="cancel_btn" @click="servicecancel">
              <img src="../../assets/detailsImg/detailspage/cancel.png" alt />
            </div>
          </div>

          <div class="sn">
            <span class="deliver">苏宁发货</span>
            <p class="sn_text">由苏宁发货，并提供售后服务</p>
          </div>
          <div class="sn">
            <span class="deliver">自提</span>
            <p class="sn_text">支持门店自提点、自助提货柜等自助服务</p>
          </div>
          <div class="sn">
            <span class="retreat">7天无理由退货</span>
            <p class="sn_text">无理由退货、保购物无忧</p>
          </div>

          <div></div>
          <div></div>
        </div>
      </transition>
        
    
</template>
<script>
export default {
    props:["servicepage"],
    methods:{
        servicecancel(){
            this.$emit("service-cancel");
        }
    }
}
</script>

<style>
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
body{
    background-color: white !important;
}
    
</style>