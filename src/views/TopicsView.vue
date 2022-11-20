<template>
  <div class="view">
    <section class="articles-cont">
      <div class="article" v-for="article in articles" :key="article.id">
        <div>
          <p id="article-title">{{ article.title }}</p>
          <p id="article-source">
            {{ article.source.name }} . {{ article.publishedAt }}
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

<script setup>
//imports
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const dayjs = require("dayjs");
dayjs().format();
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
//const router = useRouter();
const route = useRoute();
// refs
const articles = ref([]);
const topic = ref("");
const page = ref(1);
// methods
const getNews = async () => {
  topic.value = route.params.topic;
  await axios
    .post("https://api.headlines.icu/articles", {
      topic: topic.value,
      page: page.value,
    })
    .then((res) => {
      articles.value = res.data.articles.map((x) => ({
        title: x.title,
        source: x.source,
        url: x.url,
        publishedAt: dayjs(x.publishedAt).fromNow(),
        image: x.image,
      }));
    })
    .catch((err) => {
      console.log(err);
    });
};
const scrollToTop = () => {
  window.scroll({ left: 0, top: 0 });
};
const loadMoreNews = () =>
  (window.onscroll = () => {
    let bottomOfWindow =
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.offsetHeight;
    if (bottomOfWindow) {
      if (page.value < 7) {
        page.value++;

        axios
          .post("https://api.headlines.icu/articles", {
            topic: topic.value,
            page: page.value,
          })
          .then((res) => {
            let moreArticles = res.data.articles.map((x) => ({
              title: x.title,
              source: x.source,
              url: x.url,
              publishedAt: dayjs(x.publishedAt).fromNow(),
              image: x.image,
            }));
            articles.value.push(...moreArticles);
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
  });

watch(
  () => route.params,
  () => {
    page.value = 1;
    getNews();
    scrollToTop();
  },
  { immediate: true }
);
onMounted(() => {
  loadMoreNews();
});
</script>
