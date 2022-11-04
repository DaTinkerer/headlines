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
    <div class="form-cont">
      <form @submit.prevent="sendInput()">
        <!-- dekstop input -->
        <input
          v-model="input"
          type="text"
          placeholder="Search for stories"
          autocomplete="off"
          class="desktop-input"
        />
      </form>
      <button class="button">
        <font-awesome-icon class="more-icon icon" icon="angle-right" />
      </button>
    </div>
    <font-awesome-icon class="search-icon icon" icon="magnifying-glass" />
    <Transition name="fade">
      <div class="modal-overlay">
        <div class="advanced-search"><form action="" class="form">
          <input type="text">
          </form></div>
      </div>
    </Transition>
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
    dispatch() {
      this.$store.dispatch("toggleMenu");
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
    @media screen and (min-width: 1348px) {
      margin-left: 2em;
    }
  }
  .logo {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .form-cont {
    width: 40%;
    max-width: 430px;
    gap: 1em;
    display: flex;
  }
  .button {
    padding: 1em;
    width: 60px;
    border: none;
    background: rgb(56, 56, 56);
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    cursor: pointer;
    .more-icon {
      color: $gray;
    }
  }
  .desktop-input {
    display: none;
    @media screen and (min-width: 422px) {
      display: block;
      background: rgb(56, 56, 56);
      border-radius: 0.3rem;
      border: none;
      color: #fff;
      font-size: 0.9rem;
      padding: 0.8rem;
      width: 100%;
      &:focus {
        outline: none;
        background-color: rgb(43, 43, 43);
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
    @media screen and (min-width: 1348px) {
      display: none;
    }
  }
  .bars {
    color: #fff;
  }
  .modal-overlay {
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.3);
}
}
</style>
