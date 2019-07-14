import Vue from "vue";
import Vuex from "vuex";
import loginRegister from "../../modules/loginRegister/store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...loginRegister
  }
});
