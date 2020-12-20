import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPass from "../views/ForgetPass.vue";
import NotFound from "../views/404.vue";
import Sample from "../views/Sample.vue";
import Empty from "../views/Sample.vue";

export default [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "default",
      label: "Dashboard",
      icon: "fas fa-fw fa-folder",
    },
    component: () => import("../views/Index.vue"),
    menus: {
      sidebar: true,
    },
  },
  {
    path: "/auth/login/",
    name: "login",
    meta: { layout: "blank", label: "Login" },
    component: Login,
    menus: {
      sidebar: false,
    },
  },
  {
    path: "/auth/register/",
    name: "register",
    meta: { layout: "blank", label: "Register" },
    component: Register,
    menus: {
      sidebar: false,
    },
  },
  {
    path: "/auth/password/",
    name: "forgotpass",
    meta: { layout: "blank", label: "Forgot Password" },
    component: ForgotPass,
    menus: {
      sidebar: false,
    },
  },
  {
    path: "/sample",
    name: "sample",
    meta: { layout: "default", label: "Axios Hero" },
    component: Sample,
    menus: {
      sidebar: true,
    },
  },
  {
    path: "/empty",
    name: "empty",
    meta: { layout: "default", label: "Empty" },
    component: Empty,
    menus: {
      sidebar: true,
    },
  },
  {
    path: "*",
    name: "notfound",
    meta: { layout: "default", label: "Not Found" },
    component: NotFound,
    menus: {
      sidebar: true,
    },
  },
];
