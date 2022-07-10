import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
import auth from './auth'
import products from './products'
import stores from './stores'
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
    auth,
    products,
    stores
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    })
  ]
})
