import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "./assets/font/iconfont.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './libs/rem';
import './css/common.css'
import {Lazyload} from 'vant'
Vue.use(Lazyload);

Vue.use(ElementUI);


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
