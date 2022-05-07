<template>
  <div class="headbar">
    <router-link to="/"><h1>The Headlines</h1></router-link>

    <form @submit.prevent="sendInput()">
      <input v-model="input" type="text" placeholder="Search for Stories" />
      <input type="submit" name="submit" id="submit" />
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "HeadBar",
  data() {
    return {
      articles: [],
      input: "",
    };
  },
  props: {},

  methods: {
    sendInput() {
      this.$store
        .dispatch("searchNews", {
          input: this.input,
        })
        .then(() => {
          this.$router.push({ name: "results" });
        })
        .catch((err) => {
          console.long(err);
        });
    },
  },
  computed: {},
};
</script>
<style lang="scss">
#submit {
  display: none;
}
</style>
