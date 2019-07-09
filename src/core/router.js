import VueRouter from "vue-router";

// Routes From Components
import loginRegisterRoutes from "../modules/loginRegister/routes/router.js";

export default new VueRouter({
  mode: "history",
  routes: [...loginRegisterRoutes.routes]
});
