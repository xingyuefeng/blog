import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import {state} from './state'

Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
