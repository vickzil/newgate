/* eslint-disable */
<template>
  <div>
    <div class="showcase forabout">
      <div class="header-content">
        <h1 class="font-bold"><span class="forgreen">About</span> Us</h1>
      </div>
    </div>
    <!-- About us -->

    <div class="about-us">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 center-on-small-only">
            <img src="../assets/img/about.gif" class="img-responsive" />
          </div>
          <div class="col-md-6">
            <h2 class="heading"><span class="forgreen">Our</span> PROFILE</h2>
            <p>
              Newgate Technologies is an innovative Tech company. We are
              solutions-driven organization utilizing state of the art
              technology to provide provide optimal business, management and
              productivity solutions to our clients. We specialize in
              underpinning businesses with the right-fit intelligence solutions
              and consulting services, to meet both short and long term
              objectives. We design and develop cost-effective web applications
              using tools regardless of your budget limits, thus letting you
              fetch benefits of your online presence without necessarily
              spending big.
            </p>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <h2 class="heading"><span class="forgreen">Our</span> TEAM</h2>
            <p>
              Newgate Technologies has highly skilled management team. The
              company and it's directors have worked extensively in multifarious
              business sectors that include Banking & finance, oil & Gas,
              Insurance, Transportation & Aviation, Information Technology and
              Telecommunications. This wealth of experience acquired ensures
              that Newgate Technologies understands in details the business
              challenges that these sectors face and allows us to help develop
              solutions that exceed client expectations.
            </p>
          </div>
          <div class="col-md-6 center-on-small-only">
            <img src="../assets/img/team.gif" class="img-responsive" />
          </div>
        </div>
      </div>
    </div>
    <Mission />
  </div>
</template>

<script>
import Mission from "../components/Mission";

export default {
  name: "About",
  components: {
    Mission
  }
};
</script>

<style></style>
