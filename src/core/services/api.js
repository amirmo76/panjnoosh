import axios from "axios";

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
        result = response.data;
      })
      .catch(error => {
        result = error.data;
      });
    return result;
  },
  async login({ email, password }) {
    let result = {};
    await axios
      .get("/api/login", {
        email,
        password
      })
      .then(response => {
        result = {
          token: response.data.data.accessToken,
          message: "Successfull login!"
        };
      })
      .catch(error => {
        result = { token: null, message: error.response.data };
      });
    return result;
  },
  async register({ name, email, phone, address, postalCode, password }) {
    let result = null;
    await axios
      .get("/api/register", {
        name,
        email,
        phone,
        address,
        postalCode,
        password
      })
      .then(response => {
        result = response.data;
      })
      .catch(error => {
        result.data = error.data;
      });
    return result;
  }
};
