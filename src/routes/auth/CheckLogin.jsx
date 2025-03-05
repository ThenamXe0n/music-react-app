import React from "react";
import { Navigate } from "react-router-dom";

const CheckLogin = ({ children }) => {
  let loginCheck = sessionStorage.getItem("isLoggedIn");

  if (loginCheck !== 'true') {
    return <div>{children}</div>;
  }
  return <Navigate to={"/"} />;
};

export default CheckLogin;
