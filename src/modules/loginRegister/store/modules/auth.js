import api from "../../services/api";

const state = {
  token: window.localStorage.getItem("token"),
  userId: window.localStorage.getItem("userId"),
  authErrors: undefined
};

const getters = {
  isLoggedIn: state => {
    return state.token ? true : false;
  },
  getUserId: state => state.userId,
  authErrors: state => state.authErrors
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("token");
    commit("setUserId", null);
    window.localStorage.removeItem("userId");
  },
  async login({ commit }, credentials) {
    await api
      .login(credentials)
      .then(response => {
        const { token, userId } = response;
        commit("setToken", token);
        localStorage.setItem("token", token);
        commit("setUserId", userId);
        localStorage.setItem("userId", userId);
      })
      .catch(error => {
        const { statusCode } = error;
        if (statusCode === 400) {
          commit("setAuthErrors", "ایمیل یا رمزعبور اشتباه می باشد!");
        } else {
          commit("setAuthErrors", "خطا در اتصال به سرور!");
        }
      });
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
  setUserId: (state, id) => (state.userId = id),
  setAuthErrors: (state, errors) => (state.authErrors = errors)
};

export default { state, getters, actions, mutations };
