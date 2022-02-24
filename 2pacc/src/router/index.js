import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";

import MemeDb from "../components/MemeDb.vue";
import MemeApi from "../components/MemeApi.vue";
import AddMeme from "../components/AddMeme.vue";
import Likes from "../views/Likes.vue";
import Jokes from "../views/Jokes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/",
        component: MemeDb,
      },
      {
        path: "shuffle",
        component: MemeApi,
      },
      {
        path: "addmeme",
        component: AddMeme,
      },
    ],
  },
  {
    path: "/likes",
    name: "Likes",
    component: Likes,
  },
  {
    path: "/jokes",
    name: "Jokes",
    component: Jokes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name == "Register" && !localStorage.access_token) {
    next();
  } else if (to.name !== "Login" && !localStorage.access_token) {
    next({ name: "Login" });
  } else if (to.name === "Login" && localStorage.access_token) {
    next("/");
  } else {
    next();
  }
});

export default router;
