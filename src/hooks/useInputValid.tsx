import { ChangeEvent, useState } from "react";
import { emailChecker, pswChecker } from "@/utils/checkReg";

const SIGNUP = {
  email: "",
  password: "",
  passwordRepeat: "",
};

const SIGNUP_HAS_ERROR = {
  email: { hasError: false, errorMsg: "" },
  password: { hasError: false, errorMsg: "" },
  passwordRepeat: { hasError: false, errorMsg: "" },
};

function useInputValid(inputs = "signin") {
  const [inputValue, setValue] = useState(SIGNUP);
  const [hasError, setHasError] = useState(SIGNUP_HAS_ERROR);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValue((prev) => {
      return { ...prev, [id]: value };
    });

    if (id === "email") {
      if (!value) {
        setHasError((prev) => {
          return {
            ...prev,
            [id]: { hasError: true, errorMsg: "이메일을 입력해주세요!" },
          };
        });
      } else if (!emailChecker(value)) {
        setHasError((prev) => {
          return {
            ...prev,
            [id]: { hasError: true, errorMsg: "올바른 이메일이 아닙니다!" },
          };
        });
      } else {
        setHasError((prev) => {
          return { ...prev, [id]: { hasError: false, errorMsg: "" } };
        });
      }
    } else if (id === "password" && inputs === "signup") {
      if (!value) {
        setHasError((prev) => {
          return {
            ...prev,
            [id]: { hasError: true, errorMsg: "비밀번호를 입력해주세요!" },
          };
        });
      } else if (!pswChecker(value)) {
        setHasError((prev) => {
          return {
            ...prev,
            [id]: {
              hasError: true,
              errorMsg: "비밀번호는 8자 이상, 숫자와 영어가 포함되게 해주세요!",
            },
          };
        });
      } else {
        setHasError((prev) => {
          return { ...prev, [id]: { hasError: false, errorMsg: "" } };
        });
      }
    } else if (id === "password" && inputs === "signin") {
      if (!value) {
        setHasError((prev) => {
          return {
            ...prev,
            [id]: { hasError: true, errorMsg: "비밀번호를 입력해주세요!" },
          };
        });
      } else {
        setHasError((prev) => {
          return { ...prev, [id]: { hasError: false, errorMsg: "" } };
        });
      }
    } else if (id === "passwordRepeat") {
      if (!value) {
        setHasError((prev) => {
          return {
            ...prev,
            [id]: { hasError: true, errorMsg: "비밀번호를 확인해주세요!" },
          };
        });
      } else if (inputValue?.password !== inputValue?.passwordRepeat) {
        setHasError((prev) => {
          return {
            ...prev,
            [id]: { hasError: true, errorMsg: "비밀번호가 틀립니다!!" },
          };
        });
      } else {
        setHasError((prev) => {
          return { ...prev, [id]: { hasError: false, errorMsg: "" } };
        });
      }
    }
  };

  return { inputValue, onChange, hasError };
}

export default useInputValid;
