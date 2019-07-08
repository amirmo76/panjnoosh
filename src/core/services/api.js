import axios from "axios";

export default {
  async getUserInfo(token) {
    try {
      return await axios.get("/api/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async login(email, password) {
    axios
      .get("/api/login", {
        email,
        password
      })
      .then(response => {
        return {
          token: response.data.data.accessToken,
          message: "Successfull login!"
        };
      })
      .catch(error => {
        console.log(error.response.data);
        return { token: null, message: error.response.data };
      });
  }
};
