<template>
  <div class="sidenav">
    <!-- nav for desktop -->

    <nav id="nav">
      <ul>
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
export default {
  data() {
    return {};
  },

  created() {},
  methods: {
    toggleMenu() {
      document.querySelector("#mobile-nav").classList.toggle("active");
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
    transition: transform 0.5s ease-in-out;
    z-index: 50;
    ul {
      margin: 0;
      padding: 0;
      margin-top: 7.5rem;
      list-style-type: none;
    }
    .link {
      display: table;
      position: relative;
      color: $gray;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 300;
      margin-bottom: 2em;
      margin-left: 1em;
      margin-right: 1em;
      margin-top: 1em;
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
      margin-left: 1em;
      background: none;
      transform: translateX(0);
      z-index: 0;
    }
  }
}
#mobile-nav.active {
  left: 0;
}
</style>
