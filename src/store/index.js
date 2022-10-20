import { createStore } from "vuex";
export default createStore({
  state: {
    msg: "",
  },
  getters: {},
  mutations: {
    setErrorMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    async getError({ commit }, error) {
      commit("setErrorMsg", error);
    },
  },
  modules: {},
});
