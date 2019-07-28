import axios from "axios";
import { ROOT_ADDRESS } from "../../../core/config/config";

export default {
  getCategories() {
    return axios.get(`${ROOT_ADDRESS}/categories`);
  }
};
