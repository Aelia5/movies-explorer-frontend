import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, loggedIn, ...props }) => {
  console.log(loggedIn);
  return loggedIn ? (
    <Component loggedIn={loggedIn} {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
