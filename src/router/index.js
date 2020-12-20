import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import routes from "./routes.js";

export default new Router({
  // mode: 'history',
  routes,
});
