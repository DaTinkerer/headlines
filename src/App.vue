<template>
  <div class="app">
    <TopBar />
    <SideNav />
    <router-view />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    TopBar,
    SideNav,
  },
};
</script>

<style lang="scss">
body {
  background-color: #282a36;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: $font;
}

</style>
