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
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      api
        .login(credentials)
        .then(response => {
          const { token, userId } = response.data.data;
          commit("setToken", token);
          localStorage.setItem("token", token);
          commit("setUserId", userId);
          localStorage.setItem("userId", userId);
          resolve({ message: "با موفقیت وارد شدید" });
        })
        .catch(error => {
          const { status } = error.response;
          if (status === 400 || status === 404) {
            reject({ message: "ایمیل یا رمزعبور اشتباه می باشد!" });
          } else {
            reject({ message: "خطا در اتصال به سرور! دقایقی دیگر تلاش کنید." });
          }
        });
    });
  },
  register(context, credentials) {
    return new Promise((resolve, reject) => {
      api
        .register(credentials)
        .then(() => {
          resolve({ message: "ثبت نام با موفقیت انجام شد" });
        })
        .catch(error => {
          const { status } = error.response;
          console.log(status);
          if (status === 400) {
            reject({ message: "این ایمیل قبلا در سیستم ثبت شده است!" });
          } else {
            reject({ message: "خطا در اتصال به سرور! دقایقی دیگر تلاش کنید." });
          }
        });
    });
  }
};

const mutations = {
  setToken: (state, token) => (state.token = token),
  setUserId: (state, id) => (state.userId = id)
};

export default { state, getters, actions, mutations };
