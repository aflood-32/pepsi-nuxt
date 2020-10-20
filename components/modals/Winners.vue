<template>
  <!-- 6. ПЕРЕМОЖЦІ -->
  <div
    id="winners"
    class="modal fade show"
    tabindex="-1"
    style="display: block"
    role="dialog"
    @click="$emit('close')"
  >
    <div
      class="modal-dialog modal-dialog-big modal-dialog-centered"
      role="document"
    >
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
          <p class="h2 warning">ПЕРЕМОЖЦІ</p>
        </div>
        <div class="modal-body">
          <p class="h2 m-0">Мандрівка на Буковель</p>
          <p class="h3">Результати щотижневих розіграшів сертифікатів</p>
          <div class="winners">
            <div class="scroll-box">
              <table>
                <tr>
                  <td>11 листопада 2019р.:</td>
                  <td>Іван</td>
                </tr>
              </table>
            </div>
          </div>
          <p class="h4 warning">
            Результати розіграшу головного призу дивись 20 січня 2020 року
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
