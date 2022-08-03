import { createRouter, createWebHistory } from "vue-router";
import AddUser from "../views/AddUser.vue";
import HomeView from "../views/Home.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   redirect: "/contacts",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add/:id",
    name: "Add User",
    component: AddUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
