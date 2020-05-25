<template>
  <div class="areamiddle" >
    <div
      class="differ_city"
      :key="index"
      v-for="(item,index) in areaList"
      @click="itemclick(item,index)"
    >{{item}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import store from "../../../store/index.js";
export default {
  computed:{
    areaList(){
      return this.$store.state.areaList;
    }
  },
  methods:{
    itemclick(item){
      this.$emit("area-select",item);

    }
  }
};
</script>

<style scoped>
.areamiddle{
  overflow: auto;
}
.differ_city {
  padding: 0.333rem 0.25rem;
  font-size: 0.596rem;
}
</style>