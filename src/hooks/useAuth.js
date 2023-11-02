import { useState } from 'react';

const useAuth = () => {
  const [token, setToken] = useState({
    access: localStorage.getItem('accessToken'),
    refresh: localStorage.getItem('refreshToken'),
  });

  const isAuth = () => {
    if (token.access) return true;
  };

  const setAccessToken = (token) => {
    setToken((prevToken) => {
      return {
        ...prevToken,
        access: token,
      };
    });
  };

  const setRefreshToken = (token) => {
    setToken((prevToken) => {
      return {
        ...prevToken,
        refresh: token,
      };
    });
  };

  return { isAuth, setAccessToken, setRefreshToken };
};

export default useAuth;
