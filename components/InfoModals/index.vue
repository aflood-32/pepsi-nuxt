<template>
  <div>
    <error-modal
      v-if="infoModal === 'userError'"
      :message="`<p>Номер <br />або пароль <br />невірний.</p>`"
      @close="$store.commit('MODAL_INFO_SET', null)"
    />
    <error-modal
      v-if="infoModal === 'registrationError'"
      :message="`<p>Номер <br /> вже <br />зареєстровано.</p>`"
      @close="$store.commit('MODAL_INFO_SET', null)"
    />
    <rules-modal
      v-if="infoModal === 'rules'"
      @close="$store.commit('MODAL_INFO_SET', null)"
    />
  </div>
</template>

<script>
import ErrorModal from '@/components/InfoModals/ErrorModal'
import RulesModal from '@/components/Modals/RulesModal'

export default {
  components: {
    ErrorModal,
    RulesModal,
  },
  props: {
    infoModal: {
      type: [String, Object],
      default() {
        return null
      },
    },
  },
}
</script>

<style scoped></style>
