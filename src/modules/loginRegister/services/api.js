import axios from "axios";
const ROOT = "http://171.22.27.104/panjnoosh/public";

export default {
  login({ email, password }) {
    return axios.post(`${ROOT}/auth/login`, {
      email,
      password
    });
  },
  register({
    name,
    email,
    phone,
    address,
    zipcode,
    password,
    password_confirmation
  }) {
    return axios.post(`${ROOT}/auth/register`, {
      name,
      email,
      phone,
      address,
      zipcode,
      password,
      password_confirmation
    });
  }
};
