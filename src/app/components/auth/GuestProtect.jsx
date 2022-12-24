import React from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from 'app/hooks/useAuth';
import LoadingScreen from 'app/components/loadingScreen';

const GuestProtect = ({ children }) => {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    return <Redirect to="/schedule" />;
  }

  return <>{children}</>;
};

export default GuestProtect;
