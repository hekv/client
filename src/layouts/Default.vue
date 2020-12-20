<template>
  <div id="wrapper">
      <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Header />
        <div class="container-fluid">
          <slot />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  components: {
    SideBar,
    Header,
    Footer,
  },
};
</script>
<style scoped>
</style>
