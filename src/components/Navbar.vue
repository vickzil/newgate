/* eslint-disable */
<template>
  <nav id="navigateion" class="navigateion">
    <div class="logo">
      <router-link to="/newgate/">
        <h1 class="logo-one">
          N
          <span class="logo-line fa-spin"></span>
          <span class="logo-two">G</span>
        </h1>
      </router-link>
    </div>
    <ul class="nav-bank">
      <div class="logo logo-small">
        <router-link to="/newgate/">
          <h1 class="logo-one">
            N
            <span class="logo-line fa-spin"></span>
            <span class="logo-two">G</span>
          </h1>
        </router-link>
      </div>
      <li class="nav-item">
        <router-link to="/newgate/" exact>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/newgate/about" class="li-col">About</router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/newgate/services" class="li-col"
          >Services</router-link
        >
      </li>
      <li class="nav-item ">
        <router-link to="/newgate/partner" class="li-col">Partners</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/newgate/contact" class="li-col">Contact</router-link>
      </li>
      <!-- <li class="nav-item dropdown">
        <router-link to="/signin" class="li-col">Sign In</router-link>
      </li>-->
    </ul>
    <!-- Hamburger menu -->
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="css" scoped></style>
