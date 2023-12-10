import router from "next/router";
import { postLogin } from "pages/api/api";
import { useState } from "react";
import { getToken } from "src/utils/aboutToken";

type Return = {
  status: number;
  account: any;
  setAccount: any;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handleEnter: (e: React.KeyboardEvent<HTMLFormElement>) => void;
};

export const useLogin = (): Return => {
  const [status, setStatus] = useState(0);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(0);
    const loginInfo = await postLogin(account);

    if (loginInfo.data) {
      getToken("access-token", loginInfo.data.accessToken);
      router.push("/folder");
    } else {
      setStatus(loginInfo.error.status);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      handleLogin(e);
      setStatus(0);
    }
  };

  return {
    handleEnter,
    handleLogin,
    account,
    setAccount,
    status,
  };
};
