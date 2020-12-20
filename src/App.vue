<template>
  <div id="page-top">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const defaultLayout = "default";
export default {
  name: "App",
  created() {
    
  },
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      if (this.$route.meta.layout != undefined) {
        return this.$route.meta.layout + "-layout";
      } else {
        return "default-layout";
      }
    },
  },
};
</script>

<style>
@import url("./assets/css/style.css");
@import url("./assets/css/icon.css");
</style>
