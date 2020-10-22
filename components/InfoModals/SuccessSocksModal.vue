<template>
  <!-- Твій унікальний код зареєстровано! -->
  <div
    id="keySocks"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" @click.stop>
        <div class="modal-head p-sm">
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
            <p class="h2 warning">Вітаємо! <br />Ти отримуєш шкарпетки.</p>
          </div>
          <div class="box-center">
            <p>
              Для отримання подарунка, будь ласка, зареєструй протягом 10 днів
              адресу доставки на сайті.
            </p>
            <button class="btn">РЕЄСТРАЦІЯ АДРЕСИ</button>
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
