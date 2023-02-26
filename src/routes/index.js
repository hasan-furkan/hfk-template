import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import authRoutes from './AuthRoutes';
import LayoutRoutes from './LayoutRoutes';
// setup fake backend

// eslint-disable-next-line react/prop-types
function Routers({ isLoggedIn }) {
  return (
    <BrowserRouter basename="/">
      <Suspense>
        <Routes>
          <Route path="/" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/login" element={<Navigate to="/dashboard" />} />
                <Route path="/register" element={<Navigate to="/dashboard" />} />
              </>
            ) : (
              <Route path="/" element={<Navigate to="/login" />} />
            )}
            <Route path={'/*'} element={<LayoutRoutes />} />
          </Route>
          {authRoutes.map(({ path, Component }, i) => (
            <Route path={path} element={Component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routers;
