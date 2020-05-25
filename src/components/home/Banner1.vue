<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="banner">
    <swiper-slide v-for='(item,index) in banner1' :key="index">
      <div class="banner-content">
        <img :src="item" alt=""  @click="notFound">
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {banner1} from '../../data/home/banner1.js';
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop:true
      },
      banner1
    }
  },
  methods:{
    notFound(){
      this.$router.push('404');
    }
  }
}
</script>

<style scoped>


.banner{
  height: 5.2rem;
}
.banner-content{
  height: 100%;
  height: 100%;
  border-radius: .35rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
img{
  width: 107%;
}
</style>
<style>
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
  width: 0.18rem;
  height: 0.16rem;
  border-radius: .16rem;
  transition: width .2s;
  background: rgba(0, 0, 0, .3);
  opacity: 1;
  margin: 0 .18rem !important;
}
.swiper-pagination-bullet-active {
  background: #fff !important;
  width: .36rem !important;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 0 !important;
}
</style>