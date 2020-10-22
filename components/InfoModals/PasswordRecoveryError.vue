<template>
  <!-- ВІДНОВЛЕННЯ ПАРОЛЯ -->
  <div
    id="passError"
    class="modal fade show modal-info"
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
            <p>Вибач, <br />але такої електронної пошти <br />немає в базі.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { modalCloseTimeout } from '@/helpers/constants'

export default {
  mounted() {
    const self = this
    setTimeout(() => {
      self.$emit('close')
    }, modalCloseTimeout)
  },
}
</script>

<style scoped></style>
