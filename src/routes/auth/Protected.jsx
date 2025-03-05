import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  let isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    return <div>{children}</div>;
  }
  return <Navigate to={"/login"} />;
};

export default Protected;
