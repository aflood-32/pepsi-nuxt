<template>
  <!-- Твій унікальний код зареєстровано! 10 гривень -->
  <div
    id="keyMoney"
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
        </div>
        <div class="modal-body">
          <div class="message bold">
            <p class="h2">Твій унікальний код зареєстровано!</p>
            <p class="h2 warning">
              Вітаємо! <br />Ти отримуєш 10 гривень <br />на мобільний рахунок.
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <a href="#">ПРАВИЛА АКЦІЇ</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
