<template>
  <div class="app">
    <Header />
    <SideNav />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    Header,
    SideNav,
  },
};
</script>

<style lang="scss">
body {
  background: $charcoal;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: $font;
}
</style>
