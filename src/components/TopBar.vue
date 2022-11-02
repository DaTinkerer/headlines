<template>
  <header class="header">
    <div class="logo-cont">
      <span class="menu"><font-awesome-icon class="bars icon" icon="bars" /></span>
      <router-link class="logo" to="/"><h2>Headlines</h2></router-link>
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
  z-index: 100;
  width: 100%;
  @media screen and (min-width: 422px) {
    justify-content: flex-start;
  }
  .logo-cont {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1em;
    @media screen and (min-width: 1185px) {
      margin-left: 2em;
    }
  }
  .logo {
      display: inline-block;
      color: $light-yellow;
      text-decoration: none;
      font-family: $logo-font;
      font-size: 0.7rem;
      text-transform: uppercase;
  }
   .form-cont {
     
     margin-right: -1em;
   }
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
  .menu {
    display: inline;
    cursor: pointer;
    @media screen and (min-width: 1185px) {
      display: none;
    }
  }
  .bars {
    color: $light-yellow;
  }
}
</style>
