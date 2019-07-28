import axios from "axios";
import { ROOT_ADDRESS } from "../../../core/config/config";

export default {
  login({ email, password }) {
    return axios.post(`${ROOT_ADDRESS}/auth/login`, {
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
    return axios.post(`${ROOT_ADDRESS}/auth/register`, {
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
