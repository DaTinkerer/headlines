import { createStore } from "vuex";
import axios from "axios";
const dayjs = require("dayjs");
dayjs().format();
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
export default createStore({
  state: {
    articles: "",
    msg: "",
  },
  getters: {
    getArticles: (state) => state.articles,
  },
  mutations: {
    setArticles(state, articles) {
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
          .post("https://api.headlines.icu/search", {
            input: data.input,
          })
          .then((res) => {
            const articles = res.data.articles.map((x) => ({
              title: x.title,
              source: x.source,
              url: x.url,
              publishedAt: dayjs(x.publishedAt).fromNow(),
              image: x.image,
            }));
            console.log(articles);
            commit("setArticles", articles);
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
