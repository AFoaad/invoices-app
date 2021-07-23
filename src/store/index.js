import { createLogger, createStore } from "vuex";
import db from "../firebase/firebaseInit";
export default createStore({
  state: {
    invoiceModel: false,
    modalActive: false,
    invoiceData: [],
    invoiceLoaded: false,
    currentInvoiceArray: [],
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModel = !state.invoiceModel;
    },
    TOGGLE_MODAL(state) {
      console.log(state)
      state.modalActive = !state.modalActive;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData.push(payload);
      console.log(payload);
    },
    INVOICES_LOADED(state) {
      state.invoiceLoaded = true;
    },
    SET_CURRENT_INVOICE(state, payload) {
      state.currentInvoiceArray = state.invoiceData.filter(
        (invoice) => invoice.invoiceId === payload
      )[0]
    }
  },
  actions: {
    async GET_INVOICES({ commit, state }) {
      const getData = db.collection("invoices");
      const result = await getData.get();
      result.forEach(
        (doc) => {
          if (!state.invoiceData.some((invoice) => invoice.docId === doc.id)) {
            const data = {
              docId: doc.id,
              invoiceId: doc.data().invoiceId,
              billerStreetAddress: doc.data().billerStreetAddress,
              billerCity: doc.data().billerCity,
              billerZipCode: doc.data().billerZipCode,
              billerCountry: doc.data().billerCountry,
              clientName: doc.data().clientName,
              clientEmail: doc.data().clientEmail,
              clientStreetAddress: doc.data().clientStreetAddress,
              clientCity: doc.data().clientCity,
              clientZipCode: doc.data().clientZipCode,
              clientCountry: doc.data().clientCountry,
              invoiceDateUnix: doc.data().invoiceDateUnix,
              invoiceDate: doc.data().invoiceDate,
              paymentTerms: doc.data().paymentTerms,
              paymentDueDateUnix: doc.data().paymentDueDateUnix,
              paymentDueDate: doc.data().paymentDueDate,
              productDescription: doc.data().productDescription,
              invoiceItemList: doc.data().invoiceItemList,
              invoiceTotal: doc.data().invoiceTotal,
              invoicePending: doc.data().invoicePending,
              invoiceDraft: doc.data().invoiceDraft,
              invoicePaid: doc.data().invoicePaid,
            };
            commit("SET_INVOICE_DATA", data);
          }
        }
      );
      commit("INVOICES_LOADED")
    }
  },
  modules: {},
});
