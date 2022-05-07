<template>
  <div class="results">
    <section  v-for="article in getNewArticles" :key="article.id">
      <p>{{article.title}}</p>
      <p>{{ article.source.name }}</p>
      <p>{{ article.description }}</p>
      <a :href="article.url"><p>Full Article</p></a>
      <img :src="article.image" width="150" height="150" />
    </section>
  </div>
</template>

<script>
// import store from '../store'
export default {
  data() {
    return {
   
    };
  },

  methods: {
      
  },
  computed: {
      getNewArticles() {
          
          return this.$store.getters.getArticles
      }
  },
};
</script>
