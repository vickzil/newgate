<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title || "Welcome to Newgate Technologies";
      },
      immediate: true
    }
  }
};
</script>

<style>
/* .site-app {
  overflow-x: hidden;
} */
</style>
