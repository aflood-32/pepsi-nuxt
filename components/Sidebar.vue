<template>
  <nav id="nav" class="main-menu-wrap">
    <div class="main-menu-head">
      <button class="nav-trigger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul>
        <li v-if="!user">
          <a href="#" @click="setModal('login')">Вхiд</a>
        </li>
        <li v-else>
          <a data-id="sidebar-btns" href="#" @click="$store.commit('LOG_OUT')"
            >Вихiд</a
          >
        </li>
      </ul>
    </div>
    <div class="main-menu">
      <ul>
        <li><a data-id="sidebar-btns" href="#">Реєструй код</a></li>
        <li>
          <a
            data-id="sidebar-btns"
            href="#"
            @click.prevent="setModal('winners')"
            >Переможці</a
          >
        </li>
        <li><a data-id="sidebar-btns" href="#">Офіційні правила</a></li>
        <li><a data-id="sidebar-btns" href="#">Запитання та відповіді</a></li>
        <li v-if="user">
          <a href="#" @click.prevent="setModal('myaccount')"
            >Особистий кабінет</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    user: {
      type: Object,
      default() {
        return null
      },
    },
  },
  methods: {
    ...mapActions({
      setModal: 'setModal',
    }),
  },
}
</script>

<style scoped></style>
