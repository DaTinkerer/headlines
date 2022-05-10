<template>
<div>
<TopBar />
<SideNav />
  <router-view/>
</div>
  
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    TopBar,
    SideNav
  },
};
</script>


<style lang="scss">

  #img {
    object-fit: cover;
    height: 100px;
    width: 90px;
  }

</style>
