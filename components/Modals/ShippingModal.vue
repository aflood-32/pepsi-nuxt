<template>
  <!-- 4. ЗАРЕЄСТРУВАТИ АДРЕСУ ДОСТАВКИ* -->
  <div id="registrationAddress" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-head with-desc">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            ×
          </button>
          <p class="h2 warning">ЗАРЕЄСТРУВАТИ АДРЕСУ ДОСТАВКИ*</p>
          <p>Введи свої дані для отримання подарунка</p>
        </div>
        <div class="modal-body">
          <div class="form">
            <form action="#">
              <div class="form-group form-group-bg-2 with-label">
                <label for="your-name1">Прізвище</label>
                <input id="your-name1" type="text" name="your-name" value="" />
              </div>
              <div class="form-group form-group-bg-2 with-label">
                <label for="your-name2">Ім'я</label>
                <input id="your-name2" type="text" name="your-name" value="" />
              </div>
              <div class="form-group form-group-bg-2 with-label">
                <label for="your-name3">По-батькові</label>
                <input id="your-name3" type="text" name="your-name" value="" />
              </div>

              <div class="form-group with-label">
                <label for="your-tel">Номер телефону</label>
                <input
                  id="your-tel"
                  type="tel"
                  name="your-tel"
                  placeholder="+38 00 000 00 00"
                  value=""
                />
              </div>
              <div class="form-group with-label">
                <label for="your-region">Область</label>
                <input
                  id="your-region"
                  type="text"
                  name="your-region"
                  value=""
                />
              </div>
              <div class="form-group with-label">
                <label for="your-city">Місто</label>
                <input id="your-city" type="text" name="your-city" value="" />
              </div>

              <div class="form-group with-label size-2">
                <label for="your-nova">Номер відділення «Нової Пошти»</label>
                <input id="your-nova" type="text" name="your-nova" value="" />
              </div>
              <div class="form-group with-label size-2">
                <label for="your-size">Розмір шкарпеток</label>
                <input id="your-size" type="text" name="your-size" value="" />
              </div>

              <div class="form-group checkbox m-sm">
                <input id="terms3" type="checkbox" name="terms3" />
                <label for="terms3"
                  >Даю згоду на обробку моїх персональних даних</label
                >
              </div>

              <div class="text-center">
                <button class="btn btn-m-sm" type="submit">Зберегти</button>
              </div>

              <p class="footnote">
                * Подарунок буде відправлений протягом <br />30 робочих днів
                після заповнення адреси.
              </p>
            </form>
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
