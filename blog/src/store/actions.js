import * as types from './mutations-types'

export const setUser = function ({commit, state}, zh) {
  commit(types.SET_USER, zh)
}
