<template>
  <div>
    <transition name="fade">
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
      <password-recovery-error
        v-if="infoModal === 'recoveryError'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <error-wrong-code
        v-if="infoModal === 'incorrect_code'"
        :message="`Введений код неправильний. <br />Будь-ласка, перевір
              <br />акційний код.`"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <error-wrong-code
        v-if="infoModal === 'wrong_code'"
        :message="`Такого коду не існує. <br />Будь-ласка, введи коректний
              <br />акційний код.`"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <error-ban
        v-if="infoModal === 'ban'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <error-code-duplicate
        v-if="infoModal === 'duplicate'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <error-code-limit-modal
        v-if="infoModal === 'error_limit'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <error-day-limit
        v-if="infoModal === 'error_day_limit'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <success-limit-modal
        v-if="infoModal === 'success_day_limit'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <success-money-modal
        v-if="infoModal === 'success_money'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <success-trip-modal
        v-if="infoModal === 'success_trip'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <success-socks-modal
        v-if="infoModal === 'success_socks'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
      <captcha
        v-if="infoModal === 'captcha'"
        @close="$store.commit('MODAL_INFO_SET', null)"
      />
    </transition>
  </div>
</template>

<script>
import ErrorModal from '@/components/InfoModals/ErrorModal'
import RulesModal from '@/components/Modals/RulesModal'
import PasswordRecoveryError from '@/components/InfoModals/PasswordRecoveryError'
import ErrorWrongCode from '@/components/InfoModals/ErrorWrongCode'
import ErrorBan from '@/components/InfoModals/ErrorBan'
import ErrorCodeDuplicate from '@/components/InfoModals/ErrorCodeDuplicate'
import ErrorCodeLimitModal from '@/components/InfoModals/ErrorCodeLimitModal'
import ErrorDayLimit from '@/components/InfoModals/ErrorDayLimit'
import SuccessLimitModal from '@/components/InfoModals/SuccessLimitModal'
import SuccessMoneyModal from '@/components/InfoModals/SuccessMoneyModal'
import SuccessSocksModal from '@/components/InfoModals/SuccessSocksModal'
import SuccessTripModal from '@/components/InfoModals/SuccessTripModal'
import Captcha from '@/components/InfoModals/Captcha'

export default {
  components: {
    ErrorModal,
    RulesModal,
    PasswordRecoveryError,
    ErrorWrongCode,
    ErrorBan,
    ErrorCodeDuplicate,
    ErrorCodeLimitModal,
    ErrorDayLimit,
    SuccessLimitModal,
    SuccessMoneyModal,
    SuccessSocksModal,
    SuccessTripModal,
    Captcha,
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
