import * as types from './mutations-types'

export const mutations = {
  [types.SET_USER] (state, zh) {
    state.zh = zh
  }
}
