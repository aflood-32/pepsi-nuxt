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
              <div class="form-group with-label">
                <label for="your-mail">E-mail</label>
                <input
                  id="your-mail"
                  v-model="form.email"
                  placeholder="mail@mail.com"
                  type="text"
                  name="email"
                />
              </div>
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
      console.log('sads')
    },
  },
}
</script>

<style scoped></style>
