import Vue from "vue";
import VueRouter from "vue-router";
import App from "./core/App";
import router from "./core/router";
import store from "./core/store/index";
import "./plugins/quasar";

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
