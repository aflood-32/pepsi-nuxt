<template>
  <!-- 1. Вхiд -->
  <div
    id="login"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    role="dialog"
    @click="$emit('close')"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" @click.stop>
        <div class="modal-head">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          >
            ×
          </button>
          <p class="h2">Вхiд</p>
        </div>
        <div class="modal-body">
          <div class="form">
            <form @submit.prevent="handleSubmit">
              <div class="form-group with-label">
                <label for="your-tel-1">Номер телефону</label>
                <input
                  id="your-tel-1"
                  type="tel"
                  name="your-tel"
                  placeholder="+38 00 000 00 00"
                  v-model="form.phone"
                />
              </div>
              <div class="form-group with-label">
                <label for="your-pass-1">Пароль</label>
                <input
                  id="your-pass-1"
                  type="password"
                  name="your-pass"
                  v-model="form.password"
                />
              </div>

              <div class="text-center">
                <button class="btn" type="submit">УВІЙТИ</button>
              </div>
              <div class="recovery-link">
                <a
                  href="#"
                  @click.prevent="$store.dispatch('setModal', 'recovery')"
                  >Забули пароль?</a
                >
              </div>
              <div class="text-center">
                <button
                  class="btn btn-style-2"
                  type="button"
                  @click="$store.dispatch('setModal', 'registration')"
                >
                  Зареєструватися
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submited: false,
      loading: false,
      form: {
        phone: '',
        password: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log('submited', this.form)
      this.form.phone = this.form.password = ''
    },
  },
}
</script>

<style scoped></style>
