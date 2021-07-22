import { createStore } from "vuex";

export default createStore({
  state: {
    invoiceModel: false,
    ModalActive: false,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModel = !state.invoiceModel;
    },
    TOGGLE_MODAL(state){
      state.ModalActive = !state.ModalActive;
    }
  },
  actions: {},
  modules: {},
});
