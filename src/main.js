import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from './utils/axios'
// import axios from 'axios'
import VueAxios from 'vue-axios'
import animate from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(animate)
Vue.use(VueAxios,axios)
Vue.use(ElementUI);

import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
Vue.directive("touchmove",{
  inserted(el){
    el.addEventListener("touchmove",function(event){
      event.preventDefault();
    });
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
