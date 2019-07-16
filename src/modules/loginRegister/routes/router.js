import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

export default {
  routes: [
    {
      path: "/login",
      component: LoginPage,
      name: "login"
    },
    {
      path: "/signup",
      component: SignupPage,
      name: "signup"
    }
  ]
};
