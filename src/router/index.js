import Vue from 'vue'
import VueRouter from 'vue-router'
import Good from '../views/Good.vue'
import Classify from '../views/Classify.vue'
import Login from '../views/Login.vue'
import Login2 from '../views/Login2.vue'
import Car from '../views/Car.vue'
import Search from '../views/Search.vue'
import HomeLogin from '../views/HomeLogin.vue'
import searchProduct from '../views/SearchProduct'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/good',
    component: Good
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/login2',
    component: Login2
  },
  {
    path: '/car',
    component: Car
  },
  {
    path:'/classify',
    component: Classify
  },
  {
    path:'/search',
    component:Search
  },
  {
    path: '/searchProduct',
    component: searchProduct
  },
  {
    path:'/',
    component:HomeLogin
  }
]

const router = new VueRouter({
  routes
})

export default router
