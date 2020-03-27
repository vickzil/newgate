/* eslint-disable */
<template>
  <div>
    <HomeNewGate />
    <Boxes />
    <div class="site-app">
      <Thebest />
      <AboutNewGate />
      <ServicesNewGate />
      <Integration />
      <Recruiters />
    </div>
  </div>
</template>

<script>
import HomeNewGate from "../components/HomeNewGate";
import Boxes from "../components/Boxes";
import Thebest from "../components/Thebest";
import AboutNewGate from "../components/AboutNewGate";
import ServicesNewGate from "../components/ServicesNewGate";
import Integration from "../components/Integration";
import Recruiters from "../components/Recruiters";

export default {
  name: "Home",
  components: {
    HomeNewGate,
    Boxes,
    Thebest,
    AboutNewGate,
    ServicesNewGate,
    Integration,
    Recruiters
  },
  data() {
    return {
      Typewriter: ""
    };
  },

  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
