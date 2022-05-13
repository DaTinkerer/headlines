<template>
  <div class="health lg:-mt-80">
    <div
      class="flex justify-between w-full lg:w-1/3 flex container border-solid border-darkerGray border rounded-lg px-4 py-4 mb-5 mx-auto justify-between font-fira text-slate-50"
      v-for="article in articles"
      :key="article.id"
    >
      <div class="flex-column mr-4">
        <p class="mb-1 font-bold">{{ article.title }}</p>
        <p class="mb-1 font-light">{{ article.source.name }}</p>
        <a
          class="text-lightRed font-medium text-sm block mb-1"
          :href="article.url"
          target="_blank"
          ><p>Full Article</p></a
        >
      </div>
      <img class="rounded-lg" :src="article.image" id="img" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HealthView",

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
        .get("https://api.headlines.icu/health")
        .then((res) => {
          this.articles = res.data.articles;
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
