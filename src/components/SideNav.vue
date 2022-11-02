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
            <font-awesome-icon class="icon" icon="flask" />
            <span class="nav-item">Science</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- <nav id="nav">
      <div>
        <router-link class="link" :to="{ name: 'Home' }">
          <div><font-awesome-icon class="icon" icon="newspaper" /></div>
          <div class="topic"><span>Breaking News</span></div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'nation' } }"
        >
          <div><font-awesome-icon class="icon" icon="flag-usa" /></div>
          <div class="topic"><span>Nation</span></div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'world' } }"
        >
          <div><font-awesome-icon class="icon" icon="earth-americas" /></div>
          <div class="topic"><span>World</span></div>
        </router-link>
      </div>
      <router-link
        class="link"
        :to="{ name: 'Topics', params: { topic: 'technology' } }"
      >
        <div><font-awesome-icon class="icon" icon="computer" /></div>
        <div class="topic"><span>Technology</span></div>
      </router-link>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'sports' } }"
        >
          <div><font-awesome-icon class="icon" icon="football" /></div>
          <div class="topic"><span>Sports</span></div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'business' } }"
        >
          <div><font-awesome-icon class="icon" icon="building" /></div>
          <div class="topic"><span>Business</span></div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'entertainment' } }"
        >
          <div><font-awesome-icon class="icon" icon="film" /></div>
          <div class="topic"><span>Entertainment</span></div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'health' } }"
        >
          <div><font-awesome-icon class="icon" icon="heart-pulse" /></div>
          <div class="topic"><span>Health</span></div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'science' } }"
        >
          <div><font-awesome-icon class="icon" icon="flask" /></div>
          <div class="topic"><span>Science</span></div>
        </router-link>
      </div>
    </nav> -->

    <!-- nav for mobile -->
    <nav @click="toggleMenu()" id="mobile-nav">
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'us' } }"
        >
          <div><font-awesome-icon class="icon" icon="flag-usa" /></div>
          <div>US</div>
        </router-link>
      </div>
      <div>
        <div>
          <router-link
            class="link"
            :to="{ name: 'Topics', params: { topic: 'world' } }"
          >
            <div><font-awesome-icon class="icon" icon="globe" /></div>
            <div>World</div>
          </router-link>
        </div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'tech' } }"
        >
          <div><font-awesome-icon class="icon" icon="computer" /></div>
          <div>Technology</div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'sports' } }"
        >
          <div><font-awesome-icon class="icon" icon="football" /></div>
          <div>Sports</div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'business' } }"
        >
          <div><font-awesome-icon class="icon" icon="building" /></div>
          <div>Business</div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'entertainment' } }"
        >
          <div><font-awesome-icon class="icon" icon="film" /></div>
          <div>Entertainment</div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'health' } }"
        >
          <div><font-awesome-icon class="icon" icon="heart-pulse" /></div>
          <div>Health</div>
        </router-link>
      </div>
      <div>
        <router-link
          class="link"
          :to="{ name: 'Topics', params: { topic: 'science' } }"
        >
          <div><font-awesome-icon class="icon" icon="flask" /></div>
          <div>Science</div>
        </router-link>
      </div>
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
    display: none;
    @media screen and (min-width: 1185px) {
      margin-top: 3rem;
      display: block;
      position: fixed;
      margin-top: 1rem;
      margin-left: 2em;
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      .link {
        display: table;
        position: relative;
        color: $gray;
        gap: 2px;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 2em;
        .icon {
          margin-right: 1em;
        }
        &:hover {
          color: $light-yellow;
          transition: 0.15s;
        }
      }
      .icon {
        position: relative;
        width: 20px;
      }
    }
  }
  #mobile-nav {
    display: none;
    @media screen and (max-width: 1185px) {
      background-color: $dark-blue;
      display: block;
      margin-top: 5.6rem;
      position: fixed;
      height: 100vh;
      top: 0;
      left: -300px;
      box-shadow: 2px 0px 5px 0px #1c1e27;
      transition: 0.2s;
      z-index: 1;
      .link {
        display: flex;
        align-items: center;
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
        }
        &:hover {
          color: $light-yellow;
          transition: 0.15s;
        }
      }
    }
  }
  #mobile-nav.active {
    left: 0;
  }
}
</style>
