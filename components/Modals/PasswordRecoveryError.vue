<template>
  <!-- ВІДНОВЛЕННЯ ПАРОЛЯ -->
  <div id="passError" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-head">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
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
export default {}
</script>

<style scoped></style>
