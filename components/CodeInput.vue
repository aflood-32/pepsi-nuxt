<template>
  <div class="key-form-wrap" :class="[active && 'active']">
    <div class="key-form">
      <form @submit.prevent="handleSubmit">
        <input
          v-model.trim="form.code"
          placeholder="XXXXXXXXXXX"
          type="text"
          maxlength="11"
          ref="codeInput"
          class="key-input"
          @keydown.space.prevent
        />
        <button type="submit" class="key-btn"></button>
      </form>
    </div>
    <div @click="activateField" class="over-key">РЕЄСТРУЙ КОД</div>
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
      if (code && code.length === 11 && regex.test(code)) {
        this.$store.dispatch('saveCode', code)
        // this.form.code = ''
      } else {
        this.$store.dispatch('setModal', 'incorrect_code')
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
