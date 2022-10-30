<template>
  <header class="header">
    <div class="logo-cont">
      <router-link class="logo" to="/"><h2>The Headlines</h2></router-link>
    </div>
    <div class="form-cont">
      <form @submit.prevent="sendInput()">
        <!-- dekstop input -->
        <input
          v-model="input"
          type="text"
          placeholder="Search for Stories"
          autocomplete="off"
          id="input"
        />
      </form>
    </div>
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
  justify-content: flex-start;
  background-color: $dark-blue;
  box-shadow: 0px 2px 5px 0px #1c1e27;
  gap: 4em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 90px;
  z-index: 2;
  width: 100%;
  .logo-cont {
    margin-left: 2em;
  }
  .logo {
    display: inline-block;
    color: $light-red;
    text-decoration: none;
    font-size: 0.7em;
  }
  .form-cont {
    padding-right: 1.8em;
  }
  #input {
    display: none;
    @media screen and (min-width: 422px) {
      display: block;
      background-color: $light-blue;
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
}
</style>
