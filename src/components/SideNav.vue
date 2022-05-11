<template>
  <div class="sidenav w-32">
    <!-- nav for desktop -->
    <div class="hidden lg:flex flex-column ml-8 font-fira text-gray">
      <nav>
        <router-link class="table mb-4 font-light hover:text-lightRed" to="/US"
          >U.S.</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/world"
          >World</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/tech"
          >Technology</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/sports"
          >Sports</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/business"
          >Business</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/entertainment"
          >Entertainment</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/health"
          >Health</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/science"
          >Science</router-link
        >
      </nav>
    </div>
    <!-- nav for mobile -->
    <div
      id="nav"
      class="hidden absolute flex-column mt-8 font-fira text-gray bg-darkBlue lg:hidden"
    >
      <nav @click="toggleMenu()" class="mx-2">
        <router-link class="table mb-4 font-light hover:text-lightRed" to="/US"
          >U.S.</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/world"
          >World</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/tech"
          >Technology</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/sports"
          >Sports</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/business"
          >Business</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/entertainment"
          >Entertainment</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/health"
          >Health</router-link
        >
        <router-link
          class="table mb-4 font-light hover:text-lightRed"
          to="/science"
          >Science</router-link
        >
      </nav>
    </div>
    <svg
      @click="toggleMenu()"
      class="flex ml-1 -mt-[72px] mb-5 cursor-pointer lg:hidden"
      width="24"
      height="16"
      viewBox="0 0 35 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="2" x2="35" y2="2" stroke="#F16A6A" stroke-width="4" />
      <line y1="13.5" x2="35" y2="13.5" stroke="#F16A6A" stroke-width="4" />
      <line y1="25" x2="35" y2="25" stroke="#F16A6A" stroke-width="4" />
    </svg>
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
      document.querySelector("#nav").classList.toggle("flex");
      document.querySelector("#nav").classList.toggle("hidden");
    },
  },
};
</script>
