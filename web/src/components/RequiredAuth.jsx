import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const token = useSelector((store) => store.auth.token);
  const { pathname } = useLocation();
  if (token) {
    return children;
  }
    return <Navigate to="/login" state={{ from: pathname }} replace />;
  
};

export default RequiredAuth;
