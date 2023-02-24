import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const [login, setLogin] = useState(true);

  return login ? <Outlet /> : <Navigate exact to={`${process.env.PUBLIC_URL}/login`} />;
};

export default PrivateRoute;
