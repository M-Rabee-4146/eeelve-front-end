// components/ProtectedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const token = useSelector((state)=>state.auth.token);
  console.log(token)
  const role = useSelector((state)=>state.auth.role);

  if (!token || !allowedRoles.includes(role)) {
    return <Navigate to="/api/Login" replace />;
  }

  return children;
};

export default ProtectedRoute;
