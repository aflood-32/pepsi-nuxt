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
          <a
            data-id="sidebar-btns"
            href="#"
            @click.prevent="$store.dispatch('logOut')"
            >Вихiд</a
          >
        </li>
      </ul>
    </div>
    <div class="main-menu">
      <ul>
        <li>
          <a data-id="sidebar-btns" href="#" @click="focusInput"
            >Реєструй код</a
          >
        </li>
        <li>
          <a
            data-id="sidebar-btns"
            href="#"
            @click.prevent="setModal('winners')"
            >Переможці</a
          >
        </li>
        <li>
          <a data-id="sidebar-btns" href="#" @click.prevent="setModal('rules')"
            >Офіційні правила</a
          >
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1sbTSmsW_0SLa5_XpUObTzKTssM5vslJO/view"
            target="_blank"
            >Запитання та відповіді</a
          >
        </li>
        <li v-if="user">
          <a
            data-id="sidebar-btns"
            href="#"
            @click.prevent="setModal('myaccount')"
            >Особистий кабінет</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import EventHub from '~/plugins/EventHub'
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
    focusInput() {
      EventHub.$emit('focusCodeInput')
    },
  },
}
</script>

<style scoped></style>
