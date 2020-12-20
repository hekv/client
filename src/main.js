/* eslint-disable no-new */

// Base initiations
import Vue from "vue";
import App from "./App.vue";

// Layouts initiations
// - Default layout
import Default from "./layouts/Default.vue";
Vue.component("default-layout", Default);

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
});
