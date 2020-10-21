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
      infoModal: null,
      user: null,
    },
    mutations: {
      MODAL_SET(state, payload) {
        state.modal = payload
      },
      MODAL_INFO_SET(state, payload) {
        state.infoModal = payload
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
      setInfoModal({ commit }, payload) {
        commit('MODAL_INFO_SET', payload)
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
            const status = err.response.status
            if (status === 409) {
              dispatch('setInfoModal', 'registrationError')
            }
          })
      },
      logInRequest({ commit, dispatch }, payload) {
        axios
          .post(`${BASE_API_PATH}/user/login`, payload)
          .then((res) => {
            dispatch('logIn', res.data.data)
            dispatch('setModal', null)
          })
          .catch((err) => {
            const status = err.response.status
            console.log(err.response)
            if (status === 403) {
              dispatch('setInfoModal', 'userError')
            }
          })
      },
      logIn({ commit }, payload) {
        commit('LOG_IN', payload)
        localStorage.setItem('user', JSON.stringify(payload))
      },
      logOut({ commit }) {
        localStorage.removeItem('user')
        commit('LOG_OUT')
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
      getInfo: (state) => state.infoModal,
      getUser: (state) => state.user,
    },
  })

export default store
