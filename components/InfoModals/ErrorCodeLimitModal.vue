<template>
  <!-- Увага, помилка! -->
  <div
    id="error"
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
          <p class="h2 danger">Увага, помилка!</p>
        </div>
        <div class="modal-body">
          <div class="message">
            <p class="h3">
              На сьогодні доступна ще одна спроба для реєстрації коду.
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
          <p>
            Детальні умови Акції – за телефоном гарячої лінії 0 800 300 309
            (безкоштовно зі стаціонарних телефонів у межах України).
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
