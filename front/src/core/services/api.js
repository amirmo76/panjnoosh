import axios from "axios";

const ROOT = "https://be3afc9a-7503-41c0-b23c-c51ac800f979.mock.pstmn.io";

export default {
  async getUserInfo(token) {
    let result = {};
    await axios
      .get("/api/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        result = {
          data: response.data,
          authenticated: true
        };
      })
      .catch(error => {
        result = {
          error,
          authenticated: false
        };
      });
    return result;
  },
  async login({ email, password }) {
    let result = {};
    await axios
      .post(`${ROOT}/auth/login`, {
        email,
        password,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        result = {
          token: response.data.data.token,
          userId: response.data.data.userId,
          message: "Successfull login!",
          error: null
        };
      })
      .catch(error => {
        result = {
          token: null,
          message: "ورودی های خود را کنترل کنید",
          error,
          userId: null
        };
      });
    return result;
  },
  async register({
    name,
    email,
    phone,
    address,
    zipCode,
    password,
    password_confirmation
  }) {
    let result = null;
    await axios
      .get("/auth/register", {
        name,
        email,
        phone,
        address,
        zipCode,
        password,
        password_confirmation,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        result = {
          successful: true,
          message: "با موفقیت ثبت نام شد",
          error: null,
          data: response.data
        };
      })
      .catch(error => {
        result = {
          successful: false,
          message: "ثبت نام ناموفق بود",
          error
        };
      });
    return result;
  }
};
