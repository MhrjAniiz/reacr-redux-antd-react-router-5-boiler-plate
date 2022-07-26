import axios from "axios";
import { getLocalSession } from "../Utils/localStorage";

const apiUrl = "http://65.0.98.19:8080";

const API = axios.create({
  baseURL: `${apiUrl}/api`,
});
export const AuthApi = axios.create({
  baseURL: `${apiUrl}/api`,
});

API.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${getLocalSession().token}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

AuthApi.interceptors.request.use(
  async (config) => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// AuthApi.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log(error.response);,en;q=0.8
//     if (error.response?.status === 401) {
//       sessionStorage.removeItem("learning");
//       sessionStorage.removeItem("role");
//       window.location.reload();
//     }
//     return Promise.reject(error.message);
//   }
// );

export default API;
