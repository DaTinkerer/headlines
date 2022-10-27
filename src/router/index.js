import { createRouter, createWebHistory } from "vue-router";
import TopicsView from "../views/TopicsView.vue";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/topics/:topic",
    name: "Topics",
    component: TopicsView,
  },
  {
    path: "/search",
    name: "Search",
    component: SearchView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 1500);
    });
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  next();
});

export default router;
