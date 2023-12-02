import { useEffect, useState } from "react";

interface Token {
  accessToken: string;
  refreshToken: string;
}

const useAuth = () => {
  const [value, setValue] = useState<Token>();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") as string;
    const refreshToken = localStorage.getItem("refreshToken") as string;
    setValue({
      accessToken,
      refreshToken,
    });
  }, []);

  const isAuth = () => {
    if (value?.accessToken) return true;
  };

  return { isAuth, setValue };
};

export default useAuth;
