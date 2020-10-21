<template>
  <div id="wrapper">
    <header class="main-header">
      <div id="menu-hide" class="bg-hide"></div>
      <button class="nav-trigger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="header-menu">
        <ul>
          <li v-if="!user">
            <a href="#" @click.prevent="setModal('login')">Вхiд</a>
          </li>
          <li v-else>
            <a href="#" @click.prevent="setModal('myaccount')"
              >Особистий кабінет</a
            >
          </li>
        </ul>
      </nav>
      <Sidebar :user="user" />
    </header>

    <div class="main-logo">
      <img src="~assets/images/logo.svg" alt="" />
    </div>
    <main-body />
    <modals :modal="modal" />
    <info :info-modal="info" />
    <div
      v-if="modal || info"
      @click="setModal(null)"
      class="modal-backdrop fade show"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import MainBody from '~/components/MainBody'
import Sidebar from '~/components/Sidebar'
import Modals from '~/components/Modals'
import Info from '~/components/InfoModals'
export default {
  components: { Sidebar, Modals, MainBody, Info },
  computed: {
    ...mapGetters({
      modal: 'getModal',
      info: 'getInfo',
      user: 'getUser',
    }),
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.$store.dispatch('logIn', JSON.parse(localStorage.getItem('user')))
    }
  },
  methods: {
    ...mapActions({
      setModal: 'setModal',
    }),
  },
}
</script>

<style></style>
