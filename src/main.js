import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {currency} from "./api/currency";

//把过滤器挂载到vue中
Vue.filter("currency",currency);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
