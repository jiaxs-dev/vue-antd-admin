// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import store from './store'
import '@/mock'
import Viser from 'viser-vue'
Vue.prototype.$axios = axios
Vue.use(Antd);
Vue.use(Viser)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
