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
      @close="$store.commit('MODAL_SET', null)"
    />
    <user-cabinet-modal
      v-if="modal === 'myaccount'"
      @close="$store.commit('MODAL_SET', null)"
    />
  </div>
</template>

<script>
import LoginModal from '~/components/modals/LoginModal'
import Winners from '~/components/modals/Winners'
import RegisterModal from '~/components/modals/RegisterModal'
import RecoveryPasswordModal from '~/components/modals/RecoveryPasswordModal'
import UserCabinetModal from '~/components/modals/UserCabinetModal'
export default {
  components: {
    LoginModal,
    Winners,
    RegisterModal,
    RecoveryPasswordModal,
    UserCabinetModal,
  },
  props: {
    modal: {
      type: [String, Object],
      default() {
        return null
      },
    },
  },
  watch: {
    modal(modal) {
      if (modal) {
      }
    },
  },
}
</script>

<style scoped></style>
