import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cwd: '/'
}

const mutations = {
  SET_CWD (state, path) {
    console.error('DENTRO MUTATIONS !', path)
    state.cwd = path
  }
}

export default new Vuex.Store({state, mutations})
