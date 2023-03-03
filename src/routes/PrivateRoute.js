import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
function PrivateRoute() {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
