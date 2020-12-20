<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <router-link
      :to="{ name: 'home' }"
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />
    <li
      v-for="route in routes"
      class="nav-item"
      :class="{ active: $route.name == route.name }"
      :key="route.name"
      v-show="route.menus.sidebar"
    >
      <router-link class="nav-link" :to="{ name: route.name }">
        <i :class="route.meta.icon"></i>
        <span>{{ route.meta.label }}</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
import routes from "../../router/routes";
export default {
  data: function () {
    return {
      routes,
      active: "active",
    };
  },
  created() {
    console.log(routes);
  },
};
</script>