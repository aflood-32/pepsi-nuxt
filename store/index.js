import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { BASE_API_PATH } from '~/helpers/constants'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      code: null,
      rules: '',
      winners: [],
      modal: null,
      user: null,
    },
    mutations: {
      MODAL_SET(state, payload) {
        state.modal = payload
      },
      CODE_SAVED(state, payload) {
        state.code = payload
      },
      FETCH_RULES_SUCCESS(state, payload) {
        state.rules = payload.content
      },
      FETCH_WINNERS_SUCCESS(state, payload) {
        state.winners = payload
      },
      LOG_IN(state, payload) {
        state.user = payload.user
      },
      LOG_OUT(state) {
        state.user = null
      },
    },
    actions: {
      setModal({ commit }, payload) {
        commit('MODAL_SET', payload)
      },
      saveCode({ commit, state }, payload) {
        commit('CODE_SAVED', payload)
        if (state.user) {
          console.log('sent')
        } else {
          commit('MODAL_SET', 'login')
        }
      },
      register({ commit, dispatch }, payload) {
        axios
          .post(`${BASE_API_PATH}/user/registration`, payload)
          .then((res) => {
            dispatch('logIn', res.data.data)
            dispatch('setModal', null)
          })
          .catch((err) => {
            console.log(err.response)
          })
        console.log(payload)
      },
      logIn({ commit }, payload) {
        commit('LOG_IN', payload)
        localStorage.setItem('user', JSON.stringify(payload))
      },
      logOut({ commit }) {
        commit('LOG_OUT')
        localStorage.removeItem('user')
      },
      fetchInfo({ commit }, payload) {
        axios
          .get(`${BASE_API_PATH}/info/${payload}`)
          .then((res) => {
            commit(`FETCH_${payload.toUpperCase()}_SUCCESS`, res.data.data)
          })
          .catch((err) => {
            console.error(err)
          })
      },
    },
    getters: {
      getModal: (state) => state.modal,
      getUser: (state) => state.user,
    },
  })

export default store
