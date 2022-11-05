<template>
  <header class="header">
    <div class="logo-cont">
      <span class="menu" @click="dispatch"
        ><font-awesome-icon class="bars icon" icon="bars"
      /></span>
      <router-link class="logo" :to="{ name: 'Home' }"
        ><h2>Headlines</h2></router-link
      >
    </div>
    <!-- dekstop input -->
    <div class="form-cont">
      <form @submit.prevent="sendInput()">
        <input
          v-model="input"
          type="text"
          placeholder="Search for stories"
          autocomplete="off"
          class="input"
        />
      </form>
      <button @click="toggleDropdown" class="button">
        <font-awesome-icon class="more-icon icon" icon="angle-right" />
      </button>
    </div>

    <!-- mobile input -->
    <div class="mobile-form-cont">
      <button @click="toggleForm" class="button exit">
        <font-awesome-icon class="x-icon icon" icon="xmark" />
      </button>
      <form
        @submit.prevent="
          sendInput();
          toggleForm();
        "
      >
        <input
          v-model="input"
          type="text"
          placeholder="Search for stories"
          autocomplete="off"
          class="input"
        />
      </form>
      <button @click="toggleDropdown" class="button">
        <font-awesome-icon class="more-icon icon" icon="angle-right" />
      </button>
    </div>
    <font-awesome-icon
      @click="toggleForm"
      class="search-icon icon"
      icon="magnifying-glass"
    />
    <div class="dropdown">
      <font-awesome-icon
        @click="toggleDropdown"
        class="x-icon icon"
        icon="xmark"
      />
      <form action="" class="advanced-search-form">
        <div class="input-cont">
          <label class="label" for="exact">Exact words</label>
          <input
            v-model="exact"
            type="text"
            autocomplete="off"
            class="input dd-input"
            name="exact"
          />
        </div>
        <div class="input-cont">
          <label class="label" for="exclude">Exclude words</label>
          <input
            v-model="exclude"
            type="text"
            autocomplete="off"
            class="input dd-input"
            name="exclude"
          />
        </div>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeadBar",
  data() {
    return {
      input: "",
      exclude: "",
      exact: "",
    };
  },
  props: {},

  methods: {
    async sendInput() {
      await this.$router.push({ path: "/search", query: { q: this.input } });
    },
    dispatch() {
      this.$store.dispatch("toggleMenu");
    },
    toggleForm() {
      document.querySelector(".mobile-form-cont").classList.toggle("active");
    },
    toggleDropdown() {
      document.querySelector(".dropdown").classList.toggle("show");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_header.scss";
</style>
