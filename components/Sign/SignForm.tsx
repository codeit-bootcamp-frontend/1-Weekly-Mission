import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { requestSignIn, requestSignUp } from "@/lib/utils/api";
import { useLogin } from "@/lib/utils/AuthContext";
import SignInput from "./SignInput";
import * as Styled from "./Sign.styled";
import { setLocalStorage } from "@/lib/utils/localStorage";
import {
  validateEmailInput,
  validatePasswordInput,
  validatePasswordConfirmInput,
} from "@/lib/utils/checkSign";

interface Props {
  signUpPage: boolean;
  btnText: string;
}

const SignForm = ({ signUpPage, btnText }: Props) => {
  const { login, signUp } = useLogin();
  const router = useRouter();

  const [emailValue, setEmailValue] = useState({
    value: "",
    errMsg: "",
  });
  const [passwordValue, setPasswordValue] = useState({
    value: "",
    errMsg: "",
  });
  const [passwordConfirmValue, setPasswordConfirmValue] = useState({
    value: "",
    errMsg: "",
  });
  const [isOverlap, setIsOverlap] = useState(true);

  const checkOutSignIn = () => {
    if (validateEmailInput(emailValue.value)) {
      const errorMsg = validateEmailInput(emailValue.value);
      setEmailValue((prev) => ({
        ...prev,
        errMsg: errorMsg,
      }));
    }
    if (validatePasswordInput(passwordValue.value)) {
      const errorMsg = validatePasswordInput(passwordValue.value);
      setPasswordValue((prev) => ({
        ...prev,
        errMsg: errorMsg,
      }));
    }
  };

  const checkOutSignUp = () => {
    if (validatePasswordInput(passwordValue.value)) {
      const errorMsg = validatePasswordInput(passwordValue.value);
      setPasswordValue((prev) => ({
        ...prev,
        errMsg: errorMsg,
      }));
    }
    if (
      validatePasswordConfirmInput(
        passwordValue.value,
        passwordConfirmValue.value
      )
    ) {
      const errorMsg = validatePasswordConfirmInput(
        passwordValue.value,
        passwordConfirmValue.value
      );
      setPasswordConfirmValue((prev) => ({
        ...prev,
        errMsg: errorMsg,
      }));
    }
  };

  const HandleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (signUpPage) {
      // signUp Page일 경우
      if (isOverlap) {
        // 이메일 중복검사하지 않았거나 검사 후 중복인 경우
        setEmailValue((prev) => ({
          ...prev,
          errMsg: "이메일 중복 검사를 해주세요.",
        }));
        return;
      }
      checkOutSignUp();
      if (
        !validatePasswordInput(passwordValue.value) &&
        !validatePasswordConfirmInput(
          passwordValue.value,
          passwordConfirmValue.value
        )
      ) {
        // 검사에 이상이 없는 경우
        signUp(
          emailValue.value,
          passwordValue.value,
          setEmailValue,
          setPasswordValue,
          setIsOverlap
        );
      }
    } else {
      // signIn Page일 경우
      checkOutSignIn();
      if (
        !validateEmailInput(emailValue.value) &&
        !validatePasswordInput(passwordValue.value)
      ) {
        // 검사에 이상이 없는 경우
        setEmailValue((prev) => ({
          ...prev,
          errMsg: "",
        }));
        setPasswordValue((prev) => ({
          ...prev,
          errMsg: "",
        }));
        login(
          emailValue.value,
          passwordValue.value,
          setEmailValue,
          setPasswordValue
        );
      }
    }
  };

  return (
    <Styled.Form onSubmit={HandleFormSubmit}>
      <Styled.Inputs>
        <SignInput
          placeholder={"이메일을 입력해주세요."}
          type="email"
          first={true}
          label={"이메일"}
          setter={setEmailValue}
          errMsg={emailValue.errMsg}
          isOverlap={isOverlap}
          setIsOverlap={setIsOverlap}
          emailValue={emailValue.value}
          passwordValue={passwordValue.value}
          disabled={!isOverlap}
        />
        <SignInput
          placeholder={"비밀번호를 입력해주세요."}
          type="password"
          first={false}
          label={"비밀번호"}
          setter={setPasswordValue}
          errMsg={passwordValue.errMsg}
          setIsOverlap={setIsOverlap}
          emailValue={emailValue.value}
          passwordValue={passwordValue.value}
        />
        {signUpPage && (
          <SignInput
            placeholder={"비밀번호를 입력해주세요."}
            type="password"
            first={false}
            label={"비밀번호 확인"}
            setter={setPasswordConfirmValue}
            errMsg={passwordConfirmValue.errMsg}
            setIsOverlap={setIsOverlap}
            emailValue={emailValue.value}
            passwordValue={passwordValue.value}
          />
        )}
      </Styled.Inputs>
      <Styled.Button>{btnText}</Styled.Button>
    </Styled.Form>
  );
};

export default SignForm;
