/* eslint-disable */
<template>
  <div>
    <div class="showcase forservice">
      <div class="header-content">
        <h1 class="font-bold"><span class="forgreen">Our</span> Services</h1>
      </div>
    </div>
    <ServicesNewGate />
    <Integration />
  </div>
</template>

<script>
import ServicesNewGate from "../components/ServicesNewGate";
import Integration from "../components/Integration";

export default {
  name: "Services",
  components: {
    ServicesNewGate,
    Integration
  }
};
</script>

<style></style>
