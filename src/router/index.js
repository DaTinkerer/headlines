import { createRouter, createWebHistory } from "vue-router";
import BreakingView from "../views/BreakingView.vue";
import BusinessView from "../views/BusinessView.vue";
import EntertainmentView from "../views/EntertainmentView.vue";
import HealthView from "../views/HealthView.vue";
import USView from "../views/USView.vue";
import ScienceView from "../views/ScienceView.vue";
import SportsView from "../views/SportsView.vue";
import WorldView from "../views/WorldView.vue";
import TechView from "../views/TechView.vue";
import ResultsView from "../views/ResultsView.vue";
import ErrorView from "../views/ErrorView.vue";

const routes = [
  {
    path: "/",
    name: "Breaking",
    component: BreakingView,
  },
  {
    path: "/business",
    name: "Business",
    component: BusinessView,
  },
  {
    path: "/entertainment",
    name: "Entertainment",
    component: EntertainmentView,
  },
  {
    path: "/health",
    name: "Health",
    component: HealthView,
  },
  {
    path: "/US",
    name: "US",
    component: USView,
  },
  {
    path: "/science",
    name: "Science",
    component: ScienceView,
  },
  {
    path: "/sports",
    name: "Sports",
    component: SportsView,
  },
  {
    path: "/tech",
    name: "Technology",
    component: TechView,
  },
  {
    path: "/world",
    name: "World",
    component: WorldView,
  },
  {
    path: "/results",
    name: "Results",
    component: ResultsView,
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  next();
});

export default router;
