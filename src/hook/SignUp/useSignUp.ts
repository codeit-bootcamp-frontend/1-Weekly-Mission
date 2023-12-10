import router from "next/router";
import { postDuplicationEmail, postSignUp } from "pages/api/api";
import { useState } from "react";
import { INPUT_TYPE } from "src/constants/input";
import { getToken } from "src/utils/aboutToken";

type Return = {
  status: number;
  setStatus: any;
  account: { email: string; password: string; passwordCheck: string };
  setAccount: any;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const useSignup = (): Return => {
  const { email } = INPUT_TYPE;
  const [status, setStatus] = useState(0);
  const [account, setAccount] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const duplicateEmail = await postDuplicationEmail(account);

    if (duplicateEmail.error?.message) {
      setStatus(409);
      return;
    }

    if (
      account.passwordCheck.length === 0 ||
      account.password !== account.passwordCheck
    ) {
      setStatus(400);
      return;
    }

    const signUp = await postSignUp(account);

    if (signUp.error) {
      setStatus(400);
    }

    if (signUp.data && account.password === account.passwordCheck) {
      getToken("access-token", signUp.data.accessToken);
      router.push("/folder");
    }
  };

  return { account, setAccount, status, setStatus, handleSignUp };
};
