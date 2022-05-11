<template>
  <div class="topbar">
    <div
      class="flex justify-between lg:justify-between flex items-center font-fira text-slate-50 mt-3 mb-12 mx-8"
    >
      <router-link to="/"
        ><h1 class="text-lg lg:text-3xl font-normal text-lightRed">
          The Headlines
        </h1></router-link
      >

      <form @submit.prevent="sendInput()">
        <!-- dekstop input -->
        <input
          class="hidden lg:flex bg-lighterBlue w-96 px-8 py-3 rounded-lg focus:outline-slate-50"
          v-model="input"
          type="text"
          placeholder="Search for Stories"
          id="input"
        />
        <!-- mobile input -->
        <input
          class="hidden absolute -ml-[150px] -mt-6 w-64 bg-lighterBlue px-8 py-3 rounded-lg focus:outline-slate-50 lg:hidden"
          v-model="input"
          type="text"
          placeholder="Search for Stories"
          id="mobile-input"
        />
        <input class="hidden" type="submit" name="submit" id="submit" />
      </form>

      <svg 
      @click="toggleInput()"
      id="search-icon"
      class="-mr-7 relative cursor-pointer lg:hidden"
      width="28" height="33" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.39998 2.10001C4.6406 2.10001 1.59998 7.4211 1.59998 14C1.59998 20.5789 4.6406 25.9 8.39998 25.9C9.74216 25.9 10.9844 25.2109 12.0375 24.0406L16.95 32.6375L18.65 29.6625L13.8 21.1969C14.6718 19.1953 15.2 16.7152 15.2 14C15.2 7.4211 12.1594 2.10001 8.39998 2.10001ZM8.39998 4.90001C11.2797 4.90001 13.6 8.96055 13.6 14C13.6 19.0395 11.2797 23.1 8.39998 23.1C5.52029 23.1 3.19998 19.0395 3.19998 14C3.19998 8.96055 5.52029 4.90001 8.39998 4.90001Z" fill="#B9B9B9"/>
</svg>

    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "HeadBar",
  data() {
    return {
      input: "",
    };
  },
  props: {},

  mounted() {
    this.input = JSON.parse(localStorage.getItem("input"));
  },
  methods: {
    async sendInput() {
      this.$store
        .dispatch("searchNews", {
          input: this.input,
        })
        .then(() => {
          this.toggleInput()
          this.$router.push({ name: "results" });
        })
        .catch(() => {
          this.$router.push({ name: "error" });
          
        });
    },
    toggleInput() {
      document.querySelector("#mobile-input").classList.toggle("flex");
      document.querySelector("#mobile-input").classList.toggle("hidden");
    },

  },
  watch: {
    input() {
      localStorage.setItem("input", JSON.stringify(this.input));
    },
  },
};
</script>
<style lang="scss">
</style>
