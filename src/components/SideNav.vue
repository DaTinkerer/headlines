<template>
  <div class="sidenav">
    <!-- nav for desktop -->

    <nav id="nav">
      <ul @click="close">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">
            <font-awesome-icon class="icon" icon="newspaper" /><span
              class="nav-item"
              >Breaking News</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'nation' } }"
          >
            <font-awesome-icon class="icon" icon="flag-usa" /><span
              class="nav-item"
              >Nation</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'world' } }"
          >
            <font-awesome-icon class="icon" icon="earth-americas" /><span
              class="nav-item"
              >World</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'technology' } }"
          >
            <font-awesome-icon class="icon" icon="computer" /><span
              class="nav-item"
              >Technology</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'sports' } }"
          >
            <font-awesome-icon class="icon" icon="football" /><span
              class="nav-item"
              >Sports</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'business' } }"
          >
            <font-awesome-icon class="icon" icon="building" /><span
              class="nav-item"
              >Business</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'entertainment' } }"
          >
            <font-awesome-icon class="icon" icon="film" />
            <span class="nav-item">Entertainment</span>
          </router-link>
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'health' } }"
          >
            <font-awesome-icon class="icon" icon="heart-pulse" />
            <span class="nav-item">Health</span>
          </router-link>
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'science' } }"
          >
            <font-awesome-icon class="icon" icon="flask-vial" />
            <span class="nav-item">Science</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { watch } from "vue";
export default {
  data() {
    return {};
  },
  created() {
    watch(
      () => this.$store.state.value,
      () => {
        this.toggleMenu();
      }
    );
  },
  methods: {
    toggleMenu() {
      const nav = document.querySelector("#nav");
      if (this.$store.state.value == true) {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    },
    close() {
      this.$store.dispatch("toggleMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  max-width: 200px;

  #nav {
    background-color: $charcoal;
    display: block;
    position: fixed;
    height: 100vh;
    min-width: 280px;
    top: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 50;
    ul {
      margin: 0;
      padding: 0;
      margin-top: 8rem;
      list-style-type: none;
      width: 100%;
    }
    li {
      overflow: hidden;
      position: relative;
    }
    .link {
      display: table;
      position: relative;
      color: $gray;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 300;
      margin-top: 1emw;
      width: 100%;
      padding-top: 1em;
      padding-left: 2em;
      padding-bottom: 1em;
      overflow-x: hidden;
      .icon {
        margin-right: 1rem;
        position: relative;
        width: 20px;
      }
      &:hover {
        color: $light-yellow;
        transition: 0.15s;
      }
    }
    @media screen and (min-width: 1185px) {
      display: block;
      background: none;
      transform: translateX(0);
      z-index: 0;
    }
  }
  .router-link-active {
    background: #5f581c;
    .nav-item, .icon{
      color: $light-yellow;
    }
  }
  #nav.active {
    transform: translateX(0);
  }
}
</style>
