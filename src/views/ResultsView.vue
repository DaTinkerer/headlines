<template>
  <div class="view">
    <section class="articles-cont">
      <div class="article" v-for="article in getNewArticles" :key="article.id">
        <div>
          <p class="article-content" id="article-title">{{ article.title }}</p>
          <p class="article-content" id="article-source">
            {{ article.source.name }}
          </p>
          <a
            class="article-content"
            id="article-link"
            :href="article.url"
            target="_blank"
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
export default {
  name: "ResultsView",
  data() {
    return {};
  },

  async created() {
    this.getNewArticles;
  },
  methods: {},
  computed: {
    getNewArticles() {
      return this.$store.getters.getArticles;
    },
  },
};
</script>
