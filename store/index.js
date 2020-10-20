import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      modal: null,
      user: { user: 'dsadsa' },
    },
    mutations: {
      MODAL_SET(state, payload) {
        state.modal = payload
      },
      LOG_OUT(state) {
        state.user = null
      },
    },
    actions: {
      setModal({ commit }, payload) {
        commit('MODAL_SET', payload)
      },
      logout({ commit }) {
        commit('LOG_OUT')
      },
    },
    getters: {
      getModal: (state) => state.modal,
      getUser: (state) => state.user,
    },
  })

export default store
