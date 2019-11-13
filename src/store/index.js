import Vue from 'vue'
import Vuex from 'vuex'

import publicStore from './modules/public'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
      publicStore
  }
})
