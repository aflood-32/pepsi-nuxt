import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { BASE_API_PATH, codeModals } from '~/helpers/constants'

Vue.use(Vuex)

const authToken = () => {
  const token = JSON.parse(localStorage.getItem('user')).tokens[0].access_token
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}

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
      saveCode({ commit, state, dispatch }, payload) {
        commit('CODE_SAVED', payload)
        if (state.user) {
          axios
            .get(
              `${BASE_API_PATH}/codes/sendcode?code=${state.code}`,
              authToken()
            )
            .then((res) => {
              const needCaptcha = res.data.data.needcaptha
              const codeStatus = res.data.data.status.txtype
              if (needCaptcha) {
                dispatch('setInfoModal', 'captha')
              } else {
                dispatch('setInfoModal', codeModals[codeStatus])
              }
              console.log(res)
            })
            .catch((err) => {
              const status = err.response.status
              console.error(err.response)
              dispatch('setInfoModal', codeModals[status])
            })
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
            if (status === 403) {
              dispatch('setInfoModal', 'userError')
            }
          })
      },
      recover({ commit, dispatch }, payload) {
        axios
          .post(`${BASE_API_PATH}/user/forgot`, payload)
          .then((res) => {
            // dispatch('logIn', res.data.data)
            dispatch('setModal', 'recoverySuccess')
          })
          .catch((err) => {
            const status = err.response.status
            if (status === 404) {
              dispatch('setInfoModal', 'recoveryError')
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
        axios.get(`${BASE_API_PATH}/info/${payload}`).then((res) => {
          commit(`FETCH_${payload.toUpperCase()}_SUCCESS`, res.data.data)
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
