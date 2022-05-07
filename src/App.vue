<template>
<div class="app">
<HeadBar />
<SideNav />
  <router-view/>
</div>
  
</template>

<script>
import HeadBar from "@/components/HeadBar.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    HeadBar,
    SideNav
  },
};
</script>


<style lang="scss">

</style>
