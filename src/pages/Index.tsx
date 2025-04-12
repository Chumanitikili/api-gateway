
import React from 'react';
import { Navigate } from 'react-router-dom';

// Redirect users to the dashboard
const Index = () => {
  return <Navigate to="/dashboard" replace />;
};

export default Index;
