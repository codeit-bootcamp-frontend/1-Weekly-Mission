import { ChangeEvent, useState } from "react";
import { emailChecker, pswChecker } from "@/utils/checkReg";

const INITIAL_ERROR_STATUS = { hasError: false, errorMsg: "" };

const INITIAL_INPUT = {
  email: "",
  password: "",
  passwordRepeat: "",
};

const INITIAL_ERROR = {
  email: INITIAL_ERROR_STATUS,
  password: INITIAL_ERROR_STATUS,
  passwordRepeat: INITIAL_ERROR_STATUS,
};

function useInputValid(inputs = "signin") {
  const [inputValue, setValue] = useState(INITIAL_INPUT);
  const [hasError, setHasError] = useState(INITIAL_ERROR);

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
        setHasError(() => {
          return { ...INITIAL_ERROR };
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
        setHasError(() => {
          return { ...INITIAL_ERROR };
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
        setHasError(() => {
          return { ...INITIAL_ERROR };
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
        setHasError(() => {
          return { ...INITIAL_ERROR };
        });
      }
    }
  };

  return { inputValue, onChange, hasError };
}

export default useInputValid;
