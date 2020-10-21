<template>
  <div>
    <login-modal
      v-if="modal === 'login'"
      @close="$store.commit('MODAL_SET', null)"
    />
    <winners
      v-if="modal === 'winners'"
      @close="$store.commit('MODAL_SET', null)"
    />
    <register-modal
      v-if="modal === 'registration'"
      @close="$store.commit('MODAL_SET', null)"
    />
    <recovery-password-modal
      v-if="modal === 'recovery'"
      @close="$store.commit('MODAL_SET', 'login')"
    />
    <user-cabinet-modal
      v-if="modal === 'myaccount'"
      @close="$store.commit('MODAL_SET', null)"
    />
    <error-wrong-code
      v-if="modal === 'incorrect_code'"
      :message="`Введений код неправильний. <br />Будь-ласка, перевір
              <br />акційний код.`"
      @close="$store.commit('MODAL_SET', null)"
    />
    <error-wrong-code
      v-if="modal === 'wrong_code'"
      :message="`Такого коду не існує. <br />Будь-ласка, введи коректний
              <br />акційний код.`"
      @close="$store.commit('MODAL_SET', null)"
    />
    <rules-modal
      v-if="modal === 'rules'"
      @close="$store.commit('MODAL_SET', null)"
    />
  </div>
</template>

<script>
import LoginModal from '~/components/Modals/LoginModal'
import Winners from '~/components/Modals/Winners'
import RegisterModal from '~/components/Modals/RegisterModal'
import RecoveryPasswordModal from '~/components/Modals/RecoveryPasswordModal'
import UserCabinetModal from '~/components/Modals/UserCabinetModal'
import ErrorWrongCode from '~/components/Modals/ErrorWrongCode'
import RulesModal from '~/components/Modals/RulesModal'
export default {
  components: {
    LoginModal,
    Winners,
    RegisterModal,
    RecoveryPasswordModal,
    UserCabinetModal,
    ErrorWrongCode,
    RulesModal,
  },
  props: {
    modal: {
      type: [String, Object],
      default() {
        return null
      },
    },
  },
}
</script>

<style scoped></style>
