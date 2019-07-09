import api from "../../services/api";

const state = {
  token: window.localStorage.getItem("token")
};

const getters = {
  isLoggedIn: state => {
    if (!state.token) return false;
    const res = api.getUserInfo(state.token);
    return res ? true : false;
  }
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("token");
  },
  login: ({ commit }, email, password) => {
    const { token, message } = api.login(email, password);
    if (token) {
      commit("setToken", token);
      // redirect
    } else {
      console.log(message);
      // show message
    }
  }
};

const mutations = {
  setToken: (state, token) => (state.token = token)
};

export default { state, getters, actions, mutations };
