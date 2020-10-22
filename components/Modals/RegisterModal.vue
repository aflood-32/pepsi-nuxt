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
      <transition name="fade">
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
                  class="form-group form-group--error with-label"
                  :class="[$v.form.name.$error && 'error']"
                >
                  <label for="your-name">Ім'я</label>
                  <input
                    id="your-name"
                    v-model.trim="$v.form.name.$model"
                    placeholder="Ім'я"
                    type="text"
                    name="name"
                  />
                </div>
                <p v-if="!$v.form.name.required" class="field-error">
                  Обов'язкове поле
                </p>
                <div
                  class="form-group with-label"
                  :class="[$v.form.phone.$error && 'error']"
                >
                  <label for="your-tel-2">Номер телефону</label>
                  <input
                    id="your-tel-2"
                    v-model.trim="$v.form.phone.$model"
                    v-mask="{ mask: '+38(099)-999-99-99', greedy: true }"
                    type="tel"
                    name="phone"
                    placeholder="+38 00 000 00 00"
                  />
                </div>
                <p v-if="!$v.form.phone.required" class="field-error">
                  Обов'язкове поле
                </p>
                <div
                  class="form-group with-label"
                  :class="[$v.form.email.$error && 'error']"
                >
                  <label for="your-mail-2">E-mail</label>
                  <input
                    id="your-mail-2"
                    v-model="$v.form.email.$model"
                    placeholder="mail@mail.com"
                    type="text"
                    name="email"
                  />
                </div>
                <p v-if="!$v.form.email.required" class="field-error">
                  Обов'язкове поле
                </p>
                <p v-if="!$v.form.email.email" class="field-error">
                  Email має бути валідним
                </p>
                <div
                  class="form-group with-label"
                  :class="[$v.form.password.$error && 'error']"
                >
                  <label for="your-pass">Пароль</label>
                  <input
                    id="your-pass"
                    v-model="$v.form.password.$model"
                    placeholder="*******"
                    type="password"
                    name="your-pass"
                  />
                </div>
                <p v-if="!$v.form.password.required" class="field-error">
                  Обов'язкове поле
                </p>
                <p v-if="!$v.form.password.minLength" class="field-error">
                  Пароль повинен бути не меньше
                  {{ $v.form.password.$params.minLength.min }} символів
                </p>
                <div
                  class="form-group checkbox"
                  :class="[$v.form.rules.$error && 'error']"
                >
                  <input
                    id="terms"
                    v-model="$v.form.rules.$model"
                    type="checkbox"
                    name="terms"
                  />
                  <label for="terms"
                    >Я погоджуюся з
                    <a
                      href="#"
                      @click.prevent="$store.dispatch('setInfoModal', 'rules')"
                      >Офіційними правилами</a
                    >
                    <br />та даю згоду на обробку моїх персональних
                    даних.</label
                  >
                </div>
                <p v-if="!$v.form.rules.sameAs" class="field-error">
                  Погодьтесь з Офіційними правилами
                </p>
                <div
                  class="form-group checkbox"
                  :class="[$v.form.terms.$error && 'error']"
                >
                  <input
                    id="terms2"
                    v-model="$v.form.terms.$model"
                    type="checkbox"
                    name="terms2"
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
                <p v-if="!$v.form.terms.sameAs" class="field-error">
                  Погодьтесь з Умовами використання
                </p>
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
      </transition>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        phone: '',
        email: '',
        password: '',
        rules: false,
        terms: false,
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('register', this.form)
      }
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
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      rules: {
        sameAs: sameAs(() => true),
      },
      terms: {
        sameAs: sameAs(() => true),
      },
    },
  },
}
</script>
