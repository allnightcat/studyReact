import React from "react";
import { Navigate } from "react-router-dom";

const MyPages = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>마이 페이지</div>;
};

export default MyPages;
