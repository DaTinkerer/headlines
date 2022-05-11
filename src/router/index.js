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

const routes = [
  {
    path: "/",
    name: "breaking",
    component: BreakingView,
  },
  {
    path: "/business",
    name: "business",
    component: BusinessView,
  },
  {
    path: "/entertainment",
    name: "entertainment",
    component: EntertainmentView,
  },
  {
    path: "/health",
    name: "health",
    component: HealthView,
  },
  {
    path: "/US",
    name: "us",
    component: USView,
  },
  {
    path: "/science",
    name: "science",
    component: ScienceView,
  },
  {
    path: "/sports",
    name: "sports",
    component: SportsView,
  },
  {
    path: "/tech",
    name: "tech",
    component: TechView,
  },
  {
    path: "/world",
    name: "world",
    component: WorldView,
  },
  {
    path: "/results",
    name: "results",
    component: ResultsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
