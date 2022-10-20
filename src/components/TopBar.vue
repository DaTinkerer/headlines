<template>
  <div class="bar">
    <div class="topbar">
      <router-link id="logo-link" to="/"><h1>The Headlines</h1></router-link>

      <form @submit.prevent="sendInput()">
        <!-- dekstop input -->
        <input
          v-model="input"
          type="text"
          placeholder="Search for Stories"
          autocomplete="off"
          id="input"
        />
        <!-- mobile input -->

        <div v-if="isShown" class="mobile-input-cont">
          <button @click="toggleInput()" id="exit-button">
            <font-awesome-icon id="exit-icon" icon="xmark" />
          </button>
          <input
            v-model="input"
            type="text"
            placeholder="Search for Stories"
            autocomplete="off"
            id="mobile-input"
          />
        </div>
        <input type="submit" name="submit" id="submit" />
      </form>
      <font-awesome-icon
        @click="toggleInput()"
        id="search-icon"
        icon="magnifying-glass"
      />
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
      isShown: false,
    };
  },
  props: {},

  methods: {
    async sendInput() {
      this.$router.push({ path: "/search", query: { q: this.input } })
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
.bar {
  background-color: $dark-blue;
  box-shadow: 0px 2px 5px 0px #1c1e27;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 90px;
  z-index: 2;
}
.topbar {
  display: flex;
  justify-content: space-between;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 1185px) {
    justify-content: space-evenly;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    gap: 11rem;
  }

  #logo-link {
    color: $light-red;
    text-decoration: none;
    font-size: 0.7em;
    margin-top: -0.25rem;
    @media screen and (min-width: 1185px) {
      font-size: 0.8em;
    }
  }
  #input {
    display: none;
    @media screen and (min-width: 530px) {
      display: block;
      background-color: $light-blue;
      border-radius: 0.8rem;
      border: none;
      color: #fff;
      font-size: 0.9rem;
      padding: 0.9rem;
      margin-top: 0.4rem;
      min-width: 300px;
      &:focus {
        outline: none;
        background-color: $darker-blue;
        transition: 0.2s;
      }
    }
  }
  .mobile-input-cont {
    display: flex;
    flex-direction: row;
    height: 4rem;
    position: fixed;
    right: 0;
    margin-right: 0.8rem;
  }
  #mobile-input {
    display: none;
    @media screen and (max-width: 529px) {
      display: block;
      background-color: $light-blue;
      border-radius: 0.8rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border: none;
      color: #fff;
      font-size: 0.8rem;
      position: relative;
      right: 0;
      min-width: 100px;
      margin-top: 0.4rem;
      padding: 0.1rem;
      padding-left: 0.9rem;
      height: 50px;
      z-index: 4;

      &:focus {
        outline: none;
        background-color: $darker-blue;
        transition: 0.2s;
      }
    }
  }
  #exit-button {
    cursor: pointer;
    background-color: $light-blue;
    border: solid 3px #3c3f51;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    height: 0.3rem;
    padding: 1.47rem;
    z-index: 5;
    position: relative;
    margin-top: 0.4rem;

    &:hover {
      background-color: $darker-blue;
      border: solid 3px #333543;
      transition: 0.2s;
    }
    @media screen and (min-width: 530px) {
      display: none;
    }
  }
  #exit-icon {
    display: block;
    font-size: 1.5rem;
    color: $gray;
    margin-top: -0.8rem;
  }
  #search-icon {
    color: $gray;
    cursor: pointer;
    font-size: 1.3rem;
    margin-top: 1rem;
    &:hover {
      color: $dark-gray;
      transition: 0.1s;
    }

    @media screen and (min-width: 530px) {
      display: none;
    }
  }
  #submit {
    display: none;
  }
}
</style>
