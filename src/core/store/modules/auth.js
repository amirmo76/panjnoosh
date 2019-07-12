import api from "../../services/api";

const state = {
  token: window.localStorage.getItem("token"),
  userId: window.localStorage.getItem("userId")
};

const getters = {
  isLoggedIn: state => {
    return state.token ? true : false;
  },
  getUserId: state => state.userId
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("token");
    commit("setUserId", null);
    window.localStorage.removeItem("userId");
  },
  async login({ commit }, credentials) {
    const { token, userId } = await api.login(credentials);
    if (token) {
      commit("setToken", token);
      localStorage.setItem("token", token);
      commit("setUserId", userId);
      localStorage.setItem("userId", userId);
      // redirect
    } else {
      // show message
    }
  },
  async register(context, credentials) {
    const { errors } = await api.register(credentials);
    if (errors) {
      if (errors.email) {
        console.log("ایمیل موجود می باشد");
      } else {
        console.log(
          "خطا در اتصال به سرور. لطفا دقایقی دیگر دوباره امتحان کنید"
        );
      }
    }
  }
};

const mutations = {
  setToken: (state, token) => (state.token = token),
  setUserId: (state, id) => (state.userId = id)
};

export default { state, getters, actions, mutations };
