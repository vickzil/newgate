import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Partner from "../views/Partner.vue";
import Contact from "../views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  routes: [
    {
      path: "/newgate/",
      name: "Home",
      component: Home,
      meta: {
        title: "Welcome to Newgate Technologies"
      }
    },

    {
      path: "/newgate/about",
      name: "About",
      component: About,
      meta: {
        title: "About | Newgate Technologies"
      }
    },

    {
      path: "/newgate/services",
      name: "Services",
      component: Services,
      meta: {
        title: "Services | Newgate Technologies"
      }
    },

    {
      path: "/newgate/partner",
      name: "Partner",
      component: Partner,
      meta: {
        title: "Partner | Newgate Technologies"
      }
    },

    {
      path: "/newgate/contact",
      name: "Contact",
      component: Contact,
      meta: {
        title: "Contact | Newgate Technologies"
      }
    }
  ]
});
