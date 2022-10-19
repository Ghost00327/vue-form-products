import Vue from "vue";
import App from "./App.vue";
import Login from "./components/Login.vue";
import Products from "./components/Products.vue";
import NotFound from "./components/NotFound.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    { path: "/404", component: NotFound },
    { path: "*", redirect: "/404" },
  ],
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
