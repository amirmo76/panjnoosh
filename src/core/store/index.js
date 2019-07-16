import Vue from "vue";
import Vuex from "vuex";
import loginRegister from "../../modules/loginRegister/store/index";
import catalog from "../../modules/catalog/store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...[...catalog, ...loginRegister]
  }
});
