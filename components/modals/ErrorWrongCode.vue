<template>
  <!-- 0. Увага -->
  <div
    id="warning"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    role="dialog"
    @click="$emit('close')"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
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
          <p class="h2 danger">Увага!</p>
        </div>
        <div class="modal-body">
          <div class="message">
            <p v-html="message" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },
  },
}
</script>

<style scoped></style>
