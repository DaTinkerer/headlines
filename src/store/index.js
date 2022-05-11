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
          .post(
            'http://localhost:5000/search', {
              input: data.input
            }
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
