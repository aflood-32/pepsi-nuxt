<template>
  <!-- ВІДНОВЛЕННЯ ПАРОЛЯ -->
  <div
    id="passThanks"
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
          <p class="h2 danger">ВІДНОВЛЕННЯ ПАРОЛЯ</p>
        </div>
        <div class="modal-body">
          <div class="message">
            <p>
              Дякуємо! <br />Новий пароль відправлено <br />на твою електронну
              пошту.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const self = this
    setTimeout(() => {
      self.$emit('close')
    }, 2000)
  },
}
</script>

<style scoped></style>
