import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
import auth from './auth'
export default new Vuex.Store({
  state: {
    isLoading: false
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    })
  ]
})
