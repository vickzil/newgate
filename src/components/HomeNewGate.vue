/* eslint-disable */
<template>
  <div id="header">
    <div class="header-content">
      <p class="animated fadeInRightBig">
        New<span class="for-white animated bounceInUp">gate</span>
      </p>
      <h1 class="font-bold animated bounceInUp">We Build Business Solutions</h1>
      <h4>
        For
        <div class="animate-text">
          <span class="light-red">Startups</span>
          <span class="light-red">Enterprises</span>
          <span class="light-red">Healthcares</span>
          <span class="light-red">Logistics</span>
          <span class="light-red">Education</span>
        </div>
      </h4>

      <router-link
        to="/newgate/about"
        class="btn btn-outline-default waves-effect mt-3 animated bounceInDown"
        >Get Started <i class="fas fa-sync ml-2 fa-spin"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNewGate"
};
</script>

<style lang="css" scoped></style>
