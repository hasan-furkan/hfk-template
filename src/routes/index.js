import React from 'react';
import { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/authentication/Login';
import PrivateRoute from './PrivateRoute';
import authRoutes from "./AuthRoutes";
import LayoutRoutes from './LayoutRoutes';

// setup fake backend
const Routers = () => {
  const login = true;
  return (
    <BrowserRouter basename={"/"}>
      <Suspense>
        <Routes>
          <Route path={"/"} element={<PrivateRoute />}>
            {login ? (
              <>
                <Route path={"/"} element={<Navigate to={"/dashboard"} />} />
              </>
            ) : (
              ""
            )}
            <Route path={"/*"} element={<LayoutRoutes />} />
          </Route>
          <Route exact path={"/login"} element={<Login />} />
          {authRoutes.map(({ path, Component }, i) => (
            <Route path={path} element={Component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
