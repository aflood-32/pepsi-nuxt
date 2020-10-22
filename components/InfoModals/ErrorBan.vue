<template>
  <!-- Твій ліміт реєстрації некоректних кодів вичерпано. Вибач, але тебе відсторонено від подальшої участі в Акції. -->
  <div
    id="limit"
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
              Твій ліміт реєстрації некоректних кодів вичерпано. Вибач, але тебе
              відсторонено від подальшої участі в Акції.
            </p>
          </div>
          <div class="box-center">
            <p>
              Деталі дивися <br />в
              <a href="#" @click.prevent="openRules()">ОФІЦІЙНИХ ПРАВИЛАХ</a>
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
export default {
  methods: {
    openRules() {
      this.$emit('close')
      this.$store.dispatch('setModal', 'rules')
    },
  },
}
</script>

<style scoped></style>
