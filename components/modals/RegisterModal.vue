<template>
  <!-- 2. Регистрация -->
  <div
    id="registration"
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
          <p class="h2">Реєстрація</p>
        </div>
        <div class="modal-body">
          <div class="form">
            <form @submit.prevent="handleSubmit">
              <div
                class="form-group with-label"
                :class="[$v.form.name.$error && 'error']"
              >
                <label for="your-name">Ім'я</label>
                <input
                  id="your-name"
                  v-model="form.name"
                  placeholder="Ім'я"
                  type="text"
                  name="name"
                />
              </div>
              <p v-if="$v.form.name.required" style="text-align: center">
                Обов'язкове поле
              </p>
              <div class="form-group with-label">
                <label for="your-tel-2">Номер телефону</label>
                <input
                  id="your-tel-2"
                  v-model="form.phone"
                  type="tel"
                  name="phone"
                  placeholder="+38 00 000 00 00"
                />
              </div>
              <div class="form-group with-label">
                <label for="your-mail-2">E-mail</label>
                <input
                  id="your-mail-2"
                  v-model="form.email"
                  placeholder="mail@mail.com"
                  type="text"
                  name="email"
                />
              </div>
              <div class="form-group with-label">
                <label for="your-pass">Пароль</label>
                <input
                  id="your-pass"
                  v-model="form.password"
                  placeholder="*******"
                  type="password"
                  name="your-pass"
                />
              </div>

              <div class="form-group checkbox">
                <input
                  id="terms"
                  type="checkbox"
                  name="terms"
                  v-model="form.rules"
                />
                <label for="terms"
                  >Я погоджуюся з
                  <a
                    href="#"
                    @click.prevent="$store.dispatch('setModal', 'rules')"
                    >Офіційними правилами</a
                  >
                  <br />та даю згоду на обробку моїх персональних даних.</label
                >
              </div>
              <div class="form-group checkbox">
                <input
                  id="terms2"
                  type="checkbox"
                  name="terms2"
                  v-model="form.terms"
                />
                <label for="terms2"
                  >Я погоджуюся з
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1sbTSmsW_0SLa5_XpUObTzKTssM5vslJO/view"
                    >Умовами використання</a
                  >
                </label>
              </div>

              <div class="text-center">
                <button
                  :disabled="$v.form.$pending"
                  class="btn btn-style-2"
                  type="submit"
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
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        phone: '',
        dob: '',
        email: '',
        password: '',
        rules: false,
        terms: false,
      },
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true
      console.log(this.$v.form)
    },
  },
  validations: {
    form: {
      name: {
        required,
      },
      phone: {
        required,
      },
      email: {
        required,
      },
      password: {
        required,
      },
      rules: {
        required,
      },
      terms: {
        required,
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.form-group {
  &.error {
    background: red;
  }
}
</style>
