<template>
  <div class="results lg:-mt-80">
    <div 
      class="flex justify-between w-full lg:w-1/3 flex container border-solid border-darkerGray border rounded-lg px-4 py-4 mb-5 mx-auto  justify-between font-fira text-slate-50"
      v-for="article in getNewArticles"
      :key="article.id"
    >
      <div class="flex-column mr-4">
        <p class="mb-1 font-bold">{{ article.title }}</p>
        <p class="mb-1 font-light">{{ article.source.name }}</p>
        <a
          class="text-lightRed table font-medium text-sm block mb-1"
          :href="article.url"
          target="_blank"
          ><p>Full Article</p></a
        >
      </div>
      <img
        class="rounded-lg"
        :src="article.image"
        id="img"
        
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsView',
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

<style lang="scss" scoped>
  
</style>

