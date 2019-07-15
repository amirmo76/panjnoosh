import VueRouter from "vue-router";

// Routes From Components
import loginRegisterRoutes from "../modules/loginRegister/routes/router.js";
import catalogRoutes from "../modules/catalog/routes/router.js";

// Components
import HomePage from "./pages/HomePage";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: HomePage
    },
    ...loginRegisterRoutes.routes,
    ...catalogRoutes.routes
  ]
});
