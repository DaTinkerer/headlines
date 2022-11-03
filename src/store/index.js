import { createStore } from "vuex";
export default createStore({
  state: {
    value: false,
  },
  getters: {},
  mutations: {
    setValue(state) {
      if (state.value != true) {
        state.value = true;
      } else {
        state.value = false;
      }
    },
  },
  actions: {
    async toggleMenu({ commit }) {
      commit("setValue");
    },
  },
  modules: {},
});
