import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    articles: JSON.parse(localStorage.getItem("articles")),
  },
  getters: {
    getArticles: (state) => state.articles,
  },
  mutations: {
    getArticles(state, articles) {
      localStorage.setItem("articles", JSON.stringify(articles));
      state.articles = articles;
    },
  },
  actions: {
    searchNews({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://gnews.io/api/v4/search?q=${data.input}&token=key&lang=en`
          )
          .then((res) => {
            commit("getArticles", res.data.articles);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
