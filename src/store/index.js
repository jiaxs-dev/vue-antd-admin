import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import settings from './modules/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    settings
  }
})
