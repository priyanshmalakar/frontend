import React from 'react';
import { Navigate } from 'react-router-dom';

const CheckAuth = ({ children }) => {
  const token = localStorage.getItem('token');

  // Check if token exists
  if (!token) {
    // If token doesn't exist, redirect to login page
    return <Navigate to="/goback" />;
  }

  // If token exists, render the children components
  return <>{children}</>;
};

export default CheckAuth;