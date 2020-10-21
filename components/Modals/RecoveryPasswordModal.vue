<template>
  <!-- 3. Вiдновлення пароля -->
  <div
    id="recovery"
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
          <p class="h2">Вiдновлення пароля</p>
        </div>
        <div class="modal-body">
          <div class="form">
            <form @submit.prevent="handleSubmit">
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
              <div class="text-center">
                <button class="btn btn-style-2" type="submit">Далі</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      submitted: false,
      form: {
        email: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('recover', this.form)
      }
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
    },
  },
}
</script>

<style scoped></style>
