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
              <p class="name">Іван</p>
              <p><a href="tel:80967775566">8/096/777-55-66</a></p>
              <p><a href="mailto:ivanov@gmail.com">ivanov@gmail.com</a></p>
            </div>
            <div class="my-keys">
              <p class="title">Зареєстровано кодів:</p>
              <p>32</p>
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
export default {}
</script>

<style scoped></style>
