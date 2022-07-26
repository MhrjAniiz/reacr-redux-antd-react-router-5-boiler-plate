import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../Utils/localStorage";

const PrivateRoutes = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      component={(props) => {
        return isLogin() ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRoutes;
