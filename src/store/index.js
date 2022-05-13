import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    articles: JSON.parse(localStorage.getItem("articles")),
    msg: "",
  },
  getters: {
    getArticles: (state) => state.articles,
  },
  mutations: {
    setArticles(state, articles) {
      localStorage.setItem("articles", JSON.stringify(articles));
      state.articles = articles;
    },
    setErrorMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    searchNews({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:5000/search", {
            input: data.input,
          })
          .then((res) => {
            commit("setArticles", res.data.articles);
            resolve();
          })
          .catch((err) => {
            commit("setErrorMsg", err.response.data);

            reject(err);
          });
      });
    },

    async getError({ commit }, error) {
      commit("setErrorMsg", error);
    },
  },
  modules: {},
});
