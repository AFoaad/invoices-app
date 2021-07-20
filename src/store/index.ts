import { createStore } from "vuex";

export default createStore({
  state: {
    invoiceModel: false,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModel = !state.invoiceModel;
    },
  },
  actions: {},
  modules: {},
});
