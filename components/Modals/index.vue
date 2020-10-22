<template>
  <div>
    <transition name="fade">
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
      <rules-modal
        v-if="modal === 'rules'"
        @close="$store.commit('MODAL_SET', null)"
      />
      <password-recovery-success
        v-if="modal === 'recoverySuccess'"
        @close="$store.commit('MODAL_SET', null)"
      />
    </transition>
  </div>
</template>

<script>
import LoginModal from '~/components/Modals/LoginModal'
import Winners from '~/components/Modals/Winners'
import RegisterModal from '~/components/Modals/RegisterModal'
import RecoveryPasswordModal from '~/components/Modals/RecoveryPasswordModal'
import UserCabinetModal from '~/components/Modals/UserCabinetModal'
import RulesModal from '~/components/Modals/RulesModal'
import PasswordRecoverySuccess from '~/components/Modals/PasswordRecoverySuccess'
export default {
  components: {
    LoginModal,
    Winners,
    RegisterModal,
    RecoveryPasswordModal,
    UserCabinetModal,
    RulesModal,
    PasswordRecoverySuccess,
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

<style lang="scss">
.field-error {
  opacity: 0;
  margin: 0 0 3px;
  line-height: 1;
  text-align: right;
  color: #c51437;
  transition: opacity linear 0.3s;
}
.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.form-group {
  transition: all linear 0.3s;
  &.error {
    & + .field-error {
      opacity: 1;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: linear opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
