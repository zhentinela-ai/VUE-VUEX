import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import state from './state'
import mutations from './mutation'
import actions from './actions'
import getters from './getter'

Vue.use(Vuex)
console.log(state)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  actions,
  mutations
})
