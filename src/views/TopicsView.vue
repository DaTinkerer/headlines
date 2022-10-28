<template>
  <div class="view">
    <section class="articles-cont">
      <div class="article" v-for="article in articles" :key="article.id">
        <div>
          <p id="article-title">{{ article.title }}</p>
          <p id="article-source">
            {{ article.source }} . {{ article.publishedAt }}
          </p>
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
  name: "TopicsView",

  data() {
    return {
      articles: [],
      topic: "",
      page: 1,
    };
  },

  // async beforeRouteUpdate(to) {
  //   if (to.params.topic == null) {
  //     return false;
  //   } else {
  //     this.getNews();
  //   }
  // },
  async created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.page = 1;
        this.getNews();
        this.scrollToTop();
      },
      { immediate: true }
    );
    this.getNews();
  },
  async mounted() {
    this.loadMoreNews();
  },
  methods: {
    async getNews() {
      this.topic = this.$route.params.topic;
      axios
        .post("http://localhost:5000/articles", {
          topic: this.topic,
          page: this.page,
        })
        .then((res) => {
          this.articles = res.data.articles.map((x) => ({
            title: x.title,
            source: x.source.name,
            url: x.url,
            publishedAt: dayjs(x.publishedAt).fromNow(),
            image: x.image,
          }));
        })
        .catch((err) => {
          // this.$store
          //   .dispatch("getError", { error: err.response.data })
          //   .then(() => {
          //     this.$router.push({ name: "Error" });
          //   });
          console.log(err);
        });
    },
    async loadMoreNews() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if (this.page < 7) {
            this.page = this.page + 1;

            axios
              .post("http://localhost:5000/articles", {
                topic: this.topic,
                page: this.page,
              })
              .then((res) => {
                let moreArticles = res.data.articles.map((x) => ({
                  title: x.title,
                  source: x.source.name,
                  url: x.url,
                  publishedAt: dayjs(x.publishedAt).fromNow(),
                  image: x.image,
                }));
                this.articles.push(...moreArticles);
              })
              .catch((err) => {
                // this.$store
                //   .dispatch("getError", { error: err.response.data })
                //   .then(() => {
                //     this.$router.push({ name: "Error" });
                //   });
                console.log(err);
              });
          }
        }
      };
    },
    scrollToTop() {
      window.scroll({ left: 0, top: 0 });
    },
  },
};
</script>
