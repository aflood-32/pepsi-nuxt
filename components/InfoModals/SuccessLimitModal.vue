<template>
  <!-- Твій код прийнято! Ліміт реєстрації кодів на сьогодні вичерпано. -->
  <div
    id="keyLast"
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
        <div class="modal-body pb-sm">
          <div class="message bold">
            <p class="h2 warning">Твій код прийнято!</p>
            <p>Ліміт реєстрації кодів <br />на сьогодні вичерпано.</p>
            <p>Дякуємо за активність!</p>
          </div>
          <div class="box-center">
            <p>
              Протягом доби ти можеш зареєструвати 10 кодів. <br />Спробуй
              зареєструвати цей код завтра.
            </p>
            <a href="#">ПРАВИЛА АКЦІЇ</a>
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
