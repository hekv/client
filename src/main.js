/* eslint-disable no-new */

// Base initiations
import Vue from "vue";
import App from "./App.vue";

// vuex & vue-router initiations
import router from "./router";
import store from "./stores";

// Custom plugin initiation
import AxiosHero from "./plugins/AxiosHero";
import heroConfig from "./plugins/AxiosHero/config";
Vue.use(AxiosHero, heroConfig);

// Layouts initiations
// - Default layout
import Default from "./layouts/Default.vue";
Vue.component("default-layout", Default);
// - Blank layout
import Blank from "./layouts/Blank.vue";
Vue.component("blank-layout", Blank);

// Bootstrap initiations
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false; // can be useful for a better production

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
  router,
});
