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
      <button @click="toggleDropdown" class="button useless">
        <font-awesome-icon class="glass icon" icon="magnifying-glass" />
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
      <button class="button useless">
        <font-awesome-icon class="glass icon" icon="magnifying-glass" />
      </button>
    </div>
    <font-awesome-icon
      @click="toggleForm"
      class="search-icon icon"
      icon="magnifying-glass"
    />
  </header>
</template>

<script setup>
// imports
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
// refs
const input = ref("");
// methods
const sendInput = async () => {
  await router.push({ path: "/search", query: { q: input.value } });
};
const dispatch = () => {
  store.dispatch("toggleMenu");
};
const toggleForm = () => {
  document.querySelector(".mobile-form-cont").classList.toggle("active");
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_header.scss";
</style>
