<template>
  <div class="view">
    <section class="articles-cont">
      <div class="article" v-for="article in articles" :key="article.id">
        <div>
          <p id="article-title">{{ article.title }}</p>
          <p id="article-source">{{ article.source.name }} . {{ article.publishedAt }}</p>
          <a id="article-link" :href="article.url" target="_blank"
            ><p>Full Article</p></a
          >
        </div>
        <div class="img-cont">
          <img :src="article.image" id="img" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
const dayjs = require("dayjs");
dayjs().format();
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
export default {
  name: "WorldView",

  data() {
    return {
      articles: [],
    };
  },

  async created() {
    this.getNews();
  },
  methods: {
    async getNews() {
      axios
        .get("https://api.headlines.icu/world")
        .then((res) => {
          this.articles = res.data.articles.map((x) => ({
            title: x.title,
            source: x.source,
            url: x.url,
            publishedAt: dayjs(x.publishedAt).fromNow(),
            image: x.image,
          }));
        })
        .catch((err) => {
          this.$store
            .dispatch("getError", { error: err.response.data })
            .then(() => {
              this.$router.push({ name: "Error" });
            });
        });
    },
  },
};
</script>
