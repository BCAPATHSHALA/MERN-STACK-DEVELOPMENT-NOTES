import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const isLoggedIn = false;

  return (
    <>
      <h1>ProtectedRoute</h1>
      {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}

export default ProtectedRoute;
