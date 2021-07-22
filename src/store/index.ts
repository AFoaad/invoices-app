import { createLogger, createStore } from "vuex";

export default createStore({
  state: {
    invoiceModel: false,
    modalActive: false,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModel = !state.invoiceModel;
    },
    TOGGLE_MODAL(state){
      console.log(state)
      state.modalActive = !state.modalActive;
    }
  },
  actions: {},
  modules: {},
});
