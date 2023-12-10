import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { INPUT_TYPE } from "src/constants/input";
import { validateEmail, validatePassword } from "src/utils/inputValidate";

type Return = {
  isError: boolean;
  errorMsg: string;
  handleErrorCheck: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const useErrorCheck = (
  type: string,
  status: number,
  account: { email: string; password: string; passwordCheck: string }
): Return => {
  const router = useRouter();
  const [isError, setIsError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const { email, password, passwordCheck } = INPUT_TYPE;

  const handleErrorCheck = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsError(true);
      setErrorMsg("");
    }
    if (!e.target.value) {
      setIsError(false);
      switch (type) {
        case "email":
          setErrorMsg(email.errorMsg1);
          break;
        case "password":
          setErrorMsg(password.errorMsg1);
          break;
      }
    } else if (type === "email" && !validateEmail(e.target.value)) {
      setIsError(false);
      setErrorMsg(email.errorMsg2);
    }
    if (router.asPath === "/signup") {
      if (type === "password" && !validatePassword(e.target.value)) {
        setIsError(false);
        setErrorMsg(password.errorMsg2);
      } else if (
        type === "passwordCheck" &&
        account.password !== e.target.value
      ) {
        setIsError(false);
        setErrorMsg(passwordCheck.errorMsg1);
      }
    }
  };

  useEffect(() => {
    switch (status) {
      case 400:
        if (type === "email" && account.email.length === 0) {
          setIsError(false);
          setErrorMsg(email.errorMsg1);
          break;
        }
        if (type === "password" && account.password.length === 0) {
          setIsError(false);
          setErrorMsg(password.errorMsg1);
          break;
        }
        if (type === "passwordCheck" && account.passwordCheck.length === 0) {
          setIsError(false);
          setErrorMsg(password.errorMsg1);
          break;
        }
        if (type === "passwordCheck" && account.password === account.password) {
          setIsError(false);
          setErrorMsg(passwordCheck.errorMsg1);
          break;
        }
        break;
      case 422:
        if (type === "password") {
          setIsError(false);
          setErrorMsg(password.errorMsg1);
          break;
        }
        if (type === "passwordCheck") {
          setIsError(false);
          setErrorMsg(password.errorMsg1);
          break;
        }
        break;
      case 409:
        if (type === "email") {
          setIsError(false);
          setErrorMsg(email.errorMsg3);
          break;
        }
    }
  }, [status]);

  return { isError, errorMsg, handleErrorCheck };
};
