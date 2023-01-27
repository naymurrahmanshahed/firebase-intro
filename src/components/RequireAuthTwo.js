import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuthTwo = ({ children, user }) => {
  return user?.email ? <Navigate to={"/"} /> : children;
};

export default RequireAuthTwo;
