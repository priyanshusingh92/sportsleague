import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import Button from 'app/components/button';
import useAuth from 'app/hooks/useAuth';

const Auth = () => {
  const dispatch = useDispatch();
  const { login } = useAuth();

  const getToken = async () => {
    const response = await axios.get('http://localhost:3001/api/v1/getAccessToken');
    if (response.data.success) dispatch(login(response.data.access_token));
  };

  return <Button getToken={getToken} />;
};

export default Auth;
