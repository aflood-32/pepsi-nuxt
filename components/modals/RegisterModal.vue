<template>
  <!-- 2. Регистрация -->
  <div
    id="registration"
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
          <p class="h2">Реєстрація</p>
        </div>
        <div class="modal-body">
          <div class="form">
            <form action="#">
              <div class="form-group with-label">
                <label for="your-name">Ім'я</label>
                <input id="your-name" type="text" name="your-name" value="" />
              </div>
              <div class="form-group with-label">
                <label for="your-tel-2">Номер телефону</label>
                <input
                  id="your-tel-2"
                  type="tel"
                  name="your-tel"
                  placeholder="+38 00 000 00 00"
                  value=""
                />
              </div>
              <div class="form-group with-label">
                <label for="your-mail-2">E-mail</label>
                <input
                  id="your-mail-2"
                  type="email"
                  name="your-mail"
                  value=""
                />
              </div>
              <div class="form-group with-label">
                <label for="your-pass">Пароль</label>
                <input
                  id="your-pass"
                  type="password"
                  name="your-pass"
                  value=""
                />
              </div>

              <div class="form-group checkbox">
                <input id="terms" type="checkbox" name="terms" />
                <label for="terms"
                  >Я погоджуюся з <a href="#">Офіційними правилами</a> <br />та
                  даю згоду на обробку моїх персональних даних.</label
                >
              </div>
              <div class="form-group checkbox">
                <input id="terms2" type="checkbox" name="terms2" />
                <label for="terms2"
                  >Я погоджуюся з <a href="#">Умовами використання</a>
                </label>
              </div>

              <div class="form-group captcha">
                <!--                <img src="./images/captcha.png" alt="" />-->
              </div>

              <div class="text-center">
                <button class="btn btn-style-2" type="submit">
                  Зареєструватися
                </button>
              </div>
            </form>
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
