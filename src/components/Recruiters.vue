/* eslint-disable */
<template>
  <!-- Recruiters section -->
  <div id="recruiters" class="recruiters">
    <div class="container-fluid text-center">
      <h4>They Trust Us... Would You</h4>
      <!-- <div>
      <img src="../assets/img/f10.png" alt="">
      <img src="../assets/img/f11.png" alt="">
      <img src="../assets/img/f12.png" alt="">
      <img src="../assets/img/f13.png" alt="">
      <img src="../assets/img/f14.png" alt="">
    </div> -->
      <div class="recruiters-card card z-depth-2">
        <div id="particles-js"></div>
        <div class="row">
          <div class="col-md-6">
            <h5>
              <router-link to="/newgate/contact" class="green-text"
                >Join as Designer <i class="fas fa-arrow-right"></i
              ></router-link>
            </h5>
            <p>
              Open to UI/UX Designers, Graphic Designers, Creative Designers and
              Art Directors. All works within our entrepreneurship framework
            </p>
          </div>
          <div class="col-md-6">
            <h5>
              <router-link to="/newgate/contact" class="green-text"
                >Join as Developer <i class="fas fa-arrow-right"></i
              ></router-link>
            </h5>
            <p>
              Open to Developers of React, Vue, PHP-Laravel, Phthon-Django, Ruby
              on Rails development stack. All works within our entrepreneurship
              framework
            </p>
          </div>
        </div>
      </div>
      <div class="recruiters-start">
        <h6 class="green-text">READY TO GET STARTED?</h6>
        <router-link to="/newgate/contact" class="beaa waves"
          >Request Quote
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recruiters"
};
</script>

<style lang="css" scoped></style>
