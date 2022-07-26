import axios from "axios";
import API, { AuthApi } from ".";

export const loginApi = (data) => {
  return AuthApi({
    url: `signin`,
    method: "POST",
    data: data,
  });
};

export const signUpApi = (data) => {
  return API({
    url: "register",
    method: "POST",
    data: data,
  });
};

export const logoutApi = () => {
  return API({
    url: "signout",
    method: "POST",
  });
};

export const getUserListApi = () => {
  return API({
    url: "allusers",
    method: "GET",
  });
};
