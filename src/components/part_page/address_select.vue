<template>
  <transition>
    <!-- 地址选择页 -->
    <div class="address_select" v-if="addresspage">
      <div class="address_head">
        <div class="plase_select">
          <div class="exit"></div>
          <div class="address_select_title">
            地址选择
            <div class="cancel_btn" @click="addresscancel">
              <img src="../../assets/detailsImg/detailspage/cancel.png" alt />
            </div>
          </div>
        </div>

        <div class="locate_container">
          <div class="province_select" :pmessage="provinceMessage" @click="hjyClick(1)" :class="{'hcolor':hindex==1}">{{provinceMessage}}</div>
          <div class="city_select" @click="hjyClick(2)" :class="{'hcolor':hindex==2}">{{cityDefaultValue}}</div>
          <div class="area_select" @click="hjyClick(3)" :class="{'hcolor':hindex==3}">{{areaDefaultValue}}</div>
        </div>
      </div>
      <component :is="componentName" @pro-click="proClick" @city-select="hcitySelect" @area-select="areaSelect"></component>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import store from "../../store/index.js";
import Axios from "axios";
import province from "../part_page/address_box/Province.vue";
import city from "../part_page/address_box/City.vue";
import area from "../part_page/address_box/Area.vue";
export default {
  props: ["addresspage", "pmessage"],
  data() {
    return {
      cityDefaultValue: "请选择",
      areaDefaultValue: "",
      provinceMessage: "江苏",
      componentName:province,
      hindex:1
    };
  },
  component: {
    province,
    city,
    area
  },
  methods: {
    addresscancel() {
      this.$emit("address-cancel");
    },
    proClick(item){
      this.componentName=city;
      this.provinceMessage=item.name;
      this.cityDefaultValue="请选择";
      this.areaDefaultValue="";
      this.$emit("child-value",this.provinceMessage);
      if(this.componentName=city){
        this.hindex=2;
      }
    },
    hcitySelect(item){
      this.componentName=area;
      this.cityDefaultValue=item.name;
      this.$emit("city-value",this.cityDefaultValue);
      if(this.componentName=area){
        this.hindex=3;
        this.areaDefaultValue="请选择";
      }
    },
    areaSelect(item){
       this.areaDefaultValue=item;
       this.$emit("area-value",this.areaDefaultValue);

    },
    hjyClick(index){
      if(index==1){
        this.hindex=index;
        this.componentName=province;
        
      }
      if(index==2){
        this.hindex=index;
        this.componentName=city;
      }
      if(index==3){
        this.hindex=index;
        this.componentName=area;
      }
    }
 
  },

};
</script>



<style>
.hcolor{
  color: #fb0;
  border-bottom: 2px solid #fb0;
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
.address_select_title {
  padding: 0.36rem 0;
  padding-left: 1.05rem;
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
body {
  line-height: 1;
}
</style>