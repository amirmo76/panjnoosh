import axios from "axios";
// import request from "request";

const ROOT = "http://171.22.27.104/panjnoosh/public";

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
    // let result = {};
    // await axios
    //   .post(`${ROOT}/auth/login`, {
    //     email,
    //     password
    //   })
    //   .then(response => {
    //     console.log("response", response);
    //     result = {
    //       token: response.data.data.token,
    //       userId: response.data.data.userId,
    //       message: "با موفقیت وارد شدید",
    //       error: null
    //     };
    //   })
    //   .catch(error => {
    //     console.log("error", error);
    //     result = {
    //       token: null,
    //       message: "ورودی های خود را کنترل کنید",
    //       error,
    //       userId: null
    //     };
    //   });
    const promise = await axios.post(
      `http://171.22.27.104/panjnoosh/public/auth/login`,
      {
        email: "amiramir@gmail.com",
        password: "1231243123"
      }
    );
    console.log(promise);
    // return promise;
    // request("https://reqres.in/api/users?page=2", function(
    //   error,
    //   response,
    //   body
    // ) {
    //   console.log("error:", error); // Print the error if one occurred
    //   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    //   console.log("body:", body); // Print the HTML for the Google homepage.
    // });
    // request.post(`${ROOT}/auth/login`)
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
