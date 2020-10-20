<template>
  <!-- 5. Особистий кабiнет -->
  <div
    id="myaccount"
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
          <p class="h2">Особистий кабiнет</p>
        </div>
        <div class="modal-body">
          <div class="account-top">
            <div class="my-info">
              <p class="name">{{ user.name }}</p>
              <p>
                <a :href="`tel:+${user.phone}`">+{{ user.phone | phone }}</a>
              </p>
              <p>
                <a :href="`mailto:${user.email}`">{{ user.email }}</a>
              </p>
            </div>
            <div class="my-keys">
              <p class="title">Зареєстровано кодів:</p>
              <p>{{ user.data ? user.data.lenght : 0 }}</p>
            </div>
          </div>

          <div class="my-statistic-wrap">
            <p class="h2">ТВОЇ ПОДАРУНКИ</p>
            <div class="my-statistic scroll-box">
              <table>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td>
                    <button class="btn btn-style-2 btn-sm">
                      Зареєструвати адресу
                    </button>
                  </td>
                  <td>ШКАРПЕТКИ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
                <tr>
                  <td>ХХХХХХХХХ • 01.10.2019 • 21:01</td>
                  <td></td>
                  <td>10 грн НА МОБІЛЬНИЙ</td>
                </tr>
              </table>
            </div>
          </div>

          <div class="account-btn-group">
            <button class="btn">ЗАРЕЄСТРУВАТИ код</button>
            <button class="btn btn-style-2">ВИХІД</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    phone(phone) {
      return phone.replace(
        /(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
        '$1($2)-$3-$4-$5'
      )
    },
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>

<style scoped></style>
