export const modalMixin = {
  methods: {
    closeModal() {
      $store.commit('MODAL_SET', null)
    },
  },
}
