<template>
  <!-- 7. Офіційні правила -->
  <div
    id="officialRules"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    role="dialog"
    @click="$emit('close')"
  >
    <div
      class="modal-dialog modal-dialog-big modal-dialog-centered"
      role="document"
      @click.stop
    >
      <div class="modal-content">
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
          <p class="h2 warning">Офіційні правила</p>
        </div>
        <div class="modal-body pb-sm">
          <div class="official-rules">
            <div class="scroll-box">
              <vuescroll :ops="ops">
                <div
                  style="
                    padding-right: 20px;
                    width: 100%;
                    box-sizing: border-box;
                    overflow-x: hidden;
                  "
                  v-html="$store.state.rules"
                />
              </vuescroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuescroll from 'vuescroll'
import { scrollOptions } from '~/helpers/constants'

export default {
  components: {
    vuescroll,
  },
  data() {
    return {
      ops: { ...scrollOptions },
    }
  },
  mounted() {
    if (!this.$store.state.rules.length) {
      this.$store.dispatch('fetchInfo', 'rules')
    }
  },
}
</script>

<style scoped></style>
