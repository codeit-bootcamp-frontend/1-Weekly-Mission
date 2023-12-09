import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { requestSignIn } from "@/lib/utils/api";
import { useLogin } from "@/lib/utils/LoginContext";
import SignInput from "./SignInput";
import * as Styled from "./Sign.styled";
import { setLocalStorage } from "@/lib/utils/localStorage";

interface Props {
  signUp: boolean;
  btnText: string;
}

const SignForm = ({ signUp, btnText }: Props) => {
  const { isLogin, setIsLogin } = useLogin();
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

  const HandleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (signUp) {
      // signUp Page일 경우
    } else {
      // signIp Page일 경우
      try {
        if (!emailValue.errMsg && !passwordValue.errMsg) {
          const result = await requestSignIn(
            emailValue.value,
            passwordValue.value
          );
          const {
            data: { accessToken },
          } = result;
          setLocalStorage(accessToken);
          setIsLogin(true);
          router.push("/folder");
        }
      } catch {
        setEmailValue((prev) => ({
          ...prev,
          errMsg: "이메일을 확인해주세요.",
        }));
        setPasswordValue((prev) => ({
          ...prev,
          errMsg: "비밀번호를 확인해주세요.",
        }));
        setIsLogin(false);
      }
    }
  };

  if (isLogin) {
    router.push("/folder");
  }

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
        />
        <SignInput
          placeholder={"비밀번호를 입력해주세요."}
          type="password"
          first={false}
          label={"비밀번호"}
          setter={setPasswordValue}
          errMsg={passwordValue.errMsg}
        />
        {signUp && (
          <SignInput
            placeholder={"비밀번호를 입력해주세요."}
            type="passwordConfirm"
            first={false}
            label={"비밀번호 확인"}
            setter={setPasswordConfirmValue}
            errMsg={passwordConfirmValue.errMsg}
          />
        )}
      </Styled.Inputs>
      <Styled.Button>{btnText}</Styled.Button>
    </Styled.Form>
  );
};

export default SignForm;
