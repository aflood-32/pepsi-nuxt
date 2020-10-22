<template>
  <!-- Вибач, але на сьогодні твій ліміт реєстрації некоректних кодів вичерпано. Повертайся за 24 години. -->
  <div
    id="limit24"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    role="dialog"
    @click="$emit('close')"
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
          <div class="message">
            <p class="h3">
              Вибач, але на сьогодні твій ліміт реєстрації некоректних кодів
              вичерпано. Повертайся за 24 години.
            </p>
          </div>
          <div class="box-center">
            <p>
              Звертаємо увагу, що в разі повторної спроби реєстрації
              некоректного коду твій номер буде заблоковано для участі в Акції!
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
