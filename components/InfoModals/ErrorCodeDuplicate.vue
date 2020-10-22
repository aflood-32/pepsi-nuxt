<template>
  <!-- Такий код уже було зареєстровано. Будь ласка, уважно перевір код і спробуй ще раз. -->
  <div
    id="keyRepeat"
    class="modal fade show"
    tabindex="-1"
    style="display: block"
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
          <p class="h2 danger">Увага!</p>
        </div>
        <div class="modal-body">
          <div class="message">
            <p class="h3">
              Такий код уже було зареєстровано. Будь ласка, уважно перевір код і
              спробуй ще раз.
            </p>
          </div>
          <div class="box-center">
            <p>
              Звертаємо увагу, що після 10 спроб введення некоректного коду твій
              номер автоматично буде заблоковано для участі в Акції на 24
              години!
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
