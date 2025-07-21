// src/utils/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from './auth';

const PrivateRoute = ({ children }) => {
  const token = getToken();

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // If token exists, render the protected component
  return children;
};

export default PrivateRoute;
