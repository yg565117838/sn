<template>
  <div id="address_middle">
    <div
      class="differ_city"
      :key="index"
      v-for="(item,index) in provinceList"
      @click="itemclick(item,index)"
    >{{item.name}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import store from "../../../store/index.js";
import Axios from "axios";
export default {
  data() {
    return {
      provinceList: []
    };
  },
  methods: {
    itemclick(item, index) {
      this.provinceList = item.city;
      this.provinceMessage = item.name;
      this.$emit("pro-click",item);
      this.$store.commit("selectCity",item);
    },
  },
  created() {
    let that = this;
    Axios.get("/details_json/address.json").then(function(content) {
      console.log(content);
      that.provinceList = content.data;
    });
  }
};
</script>

<style>
.cart_select_middle,
.address_middle {
  overflow: auto;
}
#address_middle{
    overflow: auto;
}

/* .differ_city {
  padding: 0.333rem 0.25rem;
  font-size: 0.596rem;
  
} */
</style>