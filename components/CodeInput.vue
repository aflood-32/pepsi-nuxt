<template>
  <div class="key-form-wrap" :class="[active && 'active']">
    <div class="key-form">
      <form @submit.prevent="handleSubmit">
        <input
          ref="codeInput"
          v-model.trim="form.code"
          placeholder="XXXXXXXX"
          type="text"
          maxlength="8"
          class="key-input"
          @keydown.space.prevent
        />
        <button type="submit" class="key-btn"></button>
      </form>
    </div>
    <div class="over-key" @click="activateField">РЕЄСТРУЙ КОД</div>
  </div>
</template>

<script>
import EventHub from '~/plugins/EventHub'
export default {
  data() {
    return {
      active: false,
      submitted: false,
      form: {
        code: this.$store.state.code,
      },
    }
  },
  mounted() {
    const self = this
    EventHub.$on('focusCodeInput', function () {
      setTimeout(() => {
        self.activateField()
      }, 500)
    })
  },
  methods: {
    handleSubmit() {
      const regex = /^[A-Za-z0-9]+$/
      const code = this.form.code
      if (code && code.length === 8 && regex.test(code)) {
        this.$store.dispatch('saveCode', code)
        // this.form.code = ''
      } else {
        this.$store.dispatch('setInfoModal', 'incorrect_code')
      }
    },
    activateField() {
      const self = this
      this.active = true
      setTimeout(function () {
        self.$refs.codeInput.focus()
      }, 500)
    },
  },
}
</script>

<style scoped></style>
