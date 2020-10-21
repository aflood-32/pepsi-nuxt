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
import { minLength, required } from 'vuelidate/lib/validators'

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
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('logInRequest', this.form)
      }
    },
  },
  validations: {
    form: {
      phone: {
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
}
</script>

<style scoped></style>
