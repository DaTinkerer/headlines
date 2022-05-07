<template>
  <div class="breaking">
    <section class="news-list" v-for="article in articles" :key="article.id">
      <p>{{ article.title }}</p>
      <p>{{ article.source.name }}</p>
      <p>{{ article.description }}</p>
      <a :href="article.url"><p>Full Article</p></a>
      <img :src="article.image" width="150" height="150" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BreakingView",

  data() {
    return {
      articles: [],
      
    };
  },

  // async created () {
  //   this.getNews()
  // },
  methods: {
    async getNews() {
      axios
        .get(
          "https://gnews.io/api/v4/top-headlines?token=key&lang=en"
        )
        .then((res) => {
          this.articles = res.data.articles

        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
