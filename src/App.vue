<template>
  <div class="app">
    <header-component />
    <side-nav />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
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
