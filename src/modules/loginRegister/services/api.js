import request from "request";
import { reject } from "q";

const ROOT = "http://171.22.27.104/panjnoosh/public";

export default {
  // login interface
  // inputs: credential object containing { email, password }
  // output: {
  // statusCode: respone status code
  // errors: object, its undefined when no error
  // token: string, undefined when error
  // userId: int, undefined when error
  // }
  login({ email, password }) {
    let result = {
      errors: undefined,
      token: undefined,
      userId: undefined
    };
    return new Promise((resolve, reject) => {
      request.post(
        `${ROOT}/auth/login`,
        {
          form: { email, password }
        },
        function(err, httpResponse, body) {
          const response = JSON.parse(body);
          result.statusCode = httpResponse.statusCode;
          result.errors = response.errors;
          if (response.data) {
            result.token = response.data.token;
            result.userId = response.data.userId;
            resolve(result);
          }
          reject(result);
        }
      );
    });
  },
  // register interface
  // inputs: credential object containing { email, password, phone, address, zipCode, password, password_confirmation }
  // output: {
  // errors: object, its undefined when no error
  // }
  async register({
    name,
    email,
    phone,
    address,
    zipcode,
    password,
    password_confirmation
  }) {
    let result = {
      errors: undefined
    };
    await new Promise(resolve => {
      request.post(
        `${ROOT}/auth/register`,
        {
          form: {
            name,
            email,
            phone,
            address,
            zipcode,
            password,
            password_confirmation
          }
        },
        function(err, httpResponse, body) {
          const response = JSON.parse(body);
          result.errors = response.errors;
          resolve("done");
        }
      );
    });
    console.log(result);
    return result;
  }
};
