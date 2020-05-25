<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="banner swiper-no-swiping">
    <swiper-slide v-for="(item,index) in banner2" :key='index'>
      <newbd-two :item='item'></newbd-two>
    </swiper-slide>
  </swiper>
</template>

<script>
import {banner2} from '../../data/home/banner2.js';
import NewbdTwo from './NewbdTwo.vue';
import 'swiper/css/swiper.css'
export default {
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
        },
        loop:true,
        direction : 'vertical',
        speed:1000,
      },
      banner2
    }
  },
  components:{
      'newbd-two':NewbdTwo,
  }
}
</script>

<style scoped>
.banner{
    position: relative;
    width: 4.52rem;
    height: 5.32rem;
    border-radius: .24rem;
    background: #FFF;
}
</style>