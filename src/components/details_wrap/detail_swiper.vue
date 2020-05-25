<template>
  <swiper ref="mySwiper">
    <swiper-slide v-for="(item,index) in img" :key="index">
      <div class="img_container"  @scroll="imgScroll">
        <img :src="item.url" alt />
      </div>
    </swiper-slide>

    
    <swiper-slide>
      <div class="img_container">
         <img :src="this.$route.query.img" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img_container">
         <img :src="this.$route.query.img" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img_container">
         <img :src="this.$route.query.img" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img_container">
         <img :src="this.$route.query.img" alt />
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data(){
    return {
      img:[]
    }
  },
  methods:{
    imgScroll(){
      console.log(2222)
    }
  },
  mounted(){
    let id  = this.$route.query.id
    if(id){
      this.axios.get('api/productimg?id='+id).then((response)=>{
        this.img = response.data
      })
    }
  }
}
</script>
<style >
.img_container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: blueviolet;
  z-index: 10;
}

.img_container img {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>