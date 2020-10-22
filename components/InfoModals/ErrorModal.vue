<template>
  <!-- УВАГА -->
  <div
    id="warning2"
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
          <p class="h2 danger">УВАГА</p>
        </div>
        <div class="modal-body">
          <div class="message" v-html="message" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { modalCloseTimeout } from '@/helpers/constants'

export default {
  props: {
    message: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
  },
  mounted() {
    const self = this
    setTimeout(() => {
      self.$emit('close')
    }, modalCloseTimeout)
  },
}
</script>

<style lang="scss">
.modal-info {
  background-color: rgba(#004990, 0.5);
}
</style>
