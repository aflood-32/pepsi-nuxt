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
              <vuescroll :ops="ops">
                <table style="padding-right: 20px">
                  <tr v-if="!$store.state.winners.length">
                    <td>11 листопада 2019р.:</td>
                    <td>Іван</td>
                  </tr>
                  <template v-else>
                    <tr
                      v-for="item in $store.state.winners"
                      :key="item.activatetime + item.name"
                    >
                      <td>{{ item.activatetime | date }}Р.</td>
                      <td>{{ item.name }}</td>
                    </tr>
                  </template>
                </table>
              </vuescroll>
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
import vuescroll from 'vuescroll'
import moment from 'moment'
import { scrollOptions } from '~/helpers/constants'
export default {
  components: { vuescroll },
  filters: {
    date(date) {
      moment.locale('uk')
      return moment(date).format('DD MMMM YYYY')
    },
  },
  data() {
    return {
      ops: { ...scrollOptions },
    }
  },
  mounted() {
    if (!this.$store.state.winners.length) {
      this.$store.dispatch('fetchInfo', 'winners')
    }
  },
}
</script>

<style scoped>
.winners {
  padding: 7px;
}
</style>
