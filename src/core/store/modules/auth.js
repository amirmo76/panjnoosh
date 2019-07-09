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
  login: ({ commit }, credentials) => {
    const { token, message } = api.login(credentials);
    if (token) {
      commit("setToken", token);
      // redirect
    } else {
      console.log(message);
      // show message
    }
  },
  register(context, credentials) {
    const result = api.register(credentials);
    if (result) {
      //do something
    } else {
      //do something
    }
  }
};

const mutations = {
  setToken: (state, token) => (state.token = token)
};

export default { state, getters, actions, mutations };
