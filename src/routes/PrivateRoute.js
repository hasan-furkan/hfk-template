import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ isLoggedIn }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
