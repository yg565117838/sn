<template>
  <div id="citymiddle">
    <div
      class="differ_city"
      :key="index" 
      v-for="(item,index) in cityList"
      @click="itemclick(item,index)"
    >{{item.name}}</div>
  </div>
</template>
<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import store from "../../../store/index.js";
export default {
  computed:{
      cityList(){
          return this.$store.state.cityList;
      },
    
  },
    methods:{
          itemclick(item,index){
              this.$emit("city-select",item);
           this.$store.commit("selectArea",item);
          }
      }
};
</script>

<style scoped>
.cart_select_middle,
.address_middle {
  overflow: auto;
}
#citymiddle{
    overflow: auto;
}
.differ_city {
  padding: 0.333rem 0.25rem;
  font-size: 0.596rem;
}
</style>