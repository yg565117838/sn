import Vue from 'vue'
import VueRouter from 'vue-router'
import Detailpage from "../components/details_wrap/details_page.vue"
import Commentpage from "../components/details_wrap/comment_page.vue"
import Home from '../views/Home.vue'

import Classification from '../views/Classification.vue'
import MustGrabList from '../views/MustGrabList.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import MyEbay from '../views/MyEbay.vue'
import NotShopCart from "../views/ShopCart-Not.vue"
import Search from '../views/Search.vue'
import Login from "../views/Login.vue"
import product from "../views/product.vue"
import reg from '../views/reg.vue'
import regdo from '../views/regdo.vue'
import my from '../views/my.vue'
import NotFound from '../views/NotFound.vue'
offscreenBuffering

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/details",
    name: "Detailpage",
    component: Detailpage
  },
  {
    path: "/comment",
    name: "Commentpage",
    component: Commentpage
  },

  {
    path: '/classification',
    component: Classification
  },
  {
    path: '/product',
    component: product
  },

  {
    path: '/mustgrablist',
    component: MustGrabList
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart,
  },
  {
    path: '/myebay',
    component: MyEbay
  },

  {
    path: '/reg',
    component: reg
  },
  {
    path: '/regdo',
    component: regdo
  },
  {
    path: '/my',
    component: my
  },

  {
    path: "/notlogincart",
    component: NotShopCart
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == "/myebay") {
    if (localStorage.getItem("token")) {
      next();
    }
    else {
      next("/login");
    }
  }
  else if (to.path == "/shoppingcart") {
    if (localStorage.getItem("token")) {
      next();
    }
    else {
      next("/notlogincart");
    }
  }
  else {
    next();
  }
})

export default router
