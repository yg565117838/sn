import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopList: [],
    cityList: [],
    areaList: [],
    searchPlaceholder: '冰洗抢300元神券',
    seen:true,
    provinceinfor:"请选择地址",
    cityinfor:"",
    areainfor:"",
    token:''
  },
  mutations: {
    addData(state, obj) {
      for (let i = 0; i < state.shopList.length; i++) {
        if (state.shopList[i].title == obj.title && state.shopList[i].qt == obj.qt) {
          state.shopList[i].num += obj.num;
          return;
        }
      }
      state.shopList.push(obj);
      console.log(state.shopList);
    },
    selectCity(state, item) {
      state.cityList = item.city;
    },
    selectArea(state, item) {
      state.areaList = item.area;
    },
    deleteGood(state) {
      state.shopList = state.shopList.filter(function (item) {
        return item.status == false;
      });
    },
    seenChange(state){
      state.seen = false;
      localStorage.setItem('seen','false');
    }

  },
  actions: {
  },
  modules: {
  }
})
