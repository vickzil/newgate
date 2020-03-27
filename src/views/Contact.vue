/* eslint-disable */
<template>
  <div>
    <div class="showcase forabout">
      <div class="header-content">
        <h1 class="font-bold"><span class="forgreen">Contact</span> Us</h1>
      </div>
    </div>
    <div class="contact">
      <div class="row">
        <div class="col-md-6">
          <h3 class="font-weight-bold">GET IN TOUCH</h3>
          <p>
            Thank You for your interest. Please take a moment to provide some
            information about your services requirement.
          </p>
          <div class="contact-details">
            <div class="contact-info">
              <i class="fas fa-2x fa-map-marker-alt green-text"></i>
              <div class="boz">
                <h5>Office Address</h5>
                <p>24 Musa Road, Yaba Lagos</p>
              </div>
            </div>
            <div class="contact-info">
              <i class="fas fa-2x fa-phone-square green-text"></i>
              <div class="boz">
                <h5>Phone</h5>
                <p>+2348088546738, +2349055228656</p>
              </div>
            </div>
            <div class="contact-info">
              <i class="fas fa-2x fa-mail-bulk green-text"></i>
              <div class="boz">
                <h5>Email</h5>
                <p>contact@newgatetechnologies.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="well" style="margin-top: 10%;">
            <form
              role="form"
              id="contactForm"
              @submit.prevent="submitContactForm"
              novalidate="true"
            >
              <div class="alert alert-success" v-if="successContactMessage">
                <p>
                  Your Message was sent.
                  <br />We will contact you shortly
                </p>
              </div>
              <ul class="alert alert-danger" v-if="contactErroes.length">
                <li
                  class="text-danger pl-2"
                  style="margin-left: 12px;"
                  v-for="error in contactErroes"
                  :key="error"
                >
                  {{ error }}
                </li>
              </ul>
              <div class="row">
                <div class="form-group col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    v-model="fullname"
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-12">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Your email"
                    v-model="email"
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    v-model="subject"
                    placeholder="Subject"
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  id="message"
                  class="form-control"
                  rows="5"
                  placeholder="Enter your message"
                  v-model="message"
                ></textarea>
                <div class="help-block with-errors"></div>
              </div>
              <button
                type="submit"
                id="form-submit"
                class="btn btn-success btn-md pull-right"
              >
                Submit
              </button>
              <div class="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      fullname: "",
      email: "",
      subject: "",
      message: "",
      contactErroes: [],
      Erros: false,
      successContactMessage: false
    };
  },
  methods: {
    submitContactForm() {
      // Validate all form inputs

      // remove all errors and messages
      this.contactErroes = [];
      this.successContactMessage = false;

      // remove all errors and messages after 8 seconds
      if (this.contactErroes) {
        setTimeout(() => (this.contactErroes = false), 8000);
      }

      // send error message if fields are empty
      if (!this.fullname) {
        this.contactErroes.push("Fullname is required");
        return false;
      }
      if (!this.email) {
        this.contactErroes.push("E-mail is required");
        return false;
      }

      if (!this.validEmail(this.email)) {
        this.contactErroes.push("Valid email is required");
        return false;
      }

      if (!this.subject) {
        this.contactErroes.push("Subject is required");
        return false;
      }

      if (!this.message) {
        this.contactErroes.push("Please fill out your message");
        return false;
      } else {
        // send form if fields are not empty
        this.successContactMessage = true;
        // clear error messages
        this.contactErroes = [];
        this.clearFormMsg();
        // remove success message after 8seconds
        setTimeout(() => (this.successContactMessage = false), 8000);
        return true;
      }
    },

    // email validation
    validEmail: function(email) {
      var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test(email);
    },
    clearFormMsg() {
      this.fullname = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    }
  }
};
</script>

<style></style>
