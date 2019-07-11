import api from "../../services/api";

const state = {
  token: window.localStorage.getItem("token")
};

const getters = {
  isLoggedIn: state => {
    if (!state.token) return false;
    const { authenticated } = api.getUserInfo(state.token);
    return authenticated;
  }
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("token");
  },
  login: (context, credentials) => {
    api.login(credentials);
    // const { token, message } = api.login(credentials);
    // if (token) {
    //   commit("setToken", token);
    //   localStorage.setItem("token", token);
    //   console.log(`logged in with token: ${token}`);
    //   // redirect
    // } else {
    //   console.log(message);
    //   // show message
    // }
  },
  register(context, credentials) {
    const { successful, message } = api.register(credentials);
    if (successful) {
      console.log(message);
      //do something
    } else {
      console.log(message);
      //do something
    }
  }
};

const mutations = {
  setToken: (state, token) => (state.token = token)
};

export default { state, getters, actions, mutations };
