<template>
  <header class="header">
    <div class="logo-cont">
      <router-link class="logo" to="/"><h2>The Headlines</h2></router-link>
      <router-link class="mobile-logo" to="/"><h2>Headlines</h2></router-link>
    </div>
    <div class="form-cont">
      <form @submit.prevent="sendInput()">
        <!-- dekstop input -->
        <input
          v-model="input"
          type="text"
          placeholder="Search for Stories"
          autocomplete="off"
          class="desktop-input"
        />
      </form>
    </div>
    <font-awesome-icon class="search-icon icon" icon="magnifying-glass" />
  </header>
</template>

<script>
// import axios from 'axios'
export default {
  name: "HeadBar",
  data() {
    return {
      input: "",
      isShown: false,
    };
  },
  props: {},

  methods: {
    async sendInput() {
      this.$router.push({ path: "/search", query: { q: this.input } });
    },
    async toggleInput() {
      if (this.isShown == false) {
        this.isShown = true;
      } else {
        this.isShown = false;
      }
    },
  },
  watch: {
    input() {
      localStorage.setItem("input", JSON.stringify(this.input));
    },
  },
};
</script>
<style lang="scss" scoped>
::placeholder {
  color: $gray;
  font-family: $font;
  font-size: 0.9rem;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5em;
  background-color: $charcoal;
  gap: 4em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 2;
  width: 100%;
  @media screen and (min-width: 422px) {
    justify-content: flex-start;
  }
  .logo-cont {
    margin-left: 1em;
    @media screen and (min-width: 1185px) {
      margin-left: 2em;
    }
  }
  .logo {
    display: none;
    @media screen and (min-width: 461px) {
      display: inline-block;
      color: $light-yellow;
      text-decoration: none;
      font-family: $logo-font;
      font-size: .9rem;;
    }
  }
  .mobile-logo {
    display: inline-block;
    color: $light-yellow;
    text-decoration: none;
    font-size: .8em;
    font-family: $logo-font;
    @media screen and (min-width: 461px) {
      display: none;
    }
  }
  // .form-cont {
  // }
  .desktop-input {
    display: none;
    @media screen and (min-width: 422px) {
      display: block;
      background-color: rgb(56, 56, 56);
      border-radius: 0.5rem;
      border: none;
      color: #fff;
      font-size: 0.9rem;
      padding: 0.8rem;
      &:focus {
        outline: none;
        background-color: $darker-blue;
        transition: 0.2s;
      }
    }
  }
  .search-icon {
    display: block;
    padding-right: 1em;
    color: $gray;

    @media screen and (min-width: 422px) {
      display: none;
    }
  }
}
</style>
