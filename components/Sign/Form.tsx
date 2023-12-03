import { useEffect, useState } from "react";
import {
  validateEmailInput,
  validatePasswordInput,
} from "@/lib/utils/checkSign";
import Input from "./Input";
import * as Styled from "./StyledSign";

const Form = () => {
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [pwErrMsg, setPwErrMsg] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  useEffect(() => {
    const checkEmailHandler = (emailValue: string) => {
      if (validateEmailInput(emailValue)) {
        const errMsg = validateEmailInput(emailValue);
        setEmailErrMsg(errMsg);
      } else {
        setEmailErrMsg("");
      }
    };

    checkEmailHandler(emailValue);
  }, [emailValue]);

  useEffect(() => {
    const checkPwHandler = (pwValue: string) => {
      if (validatePasswordInput(pwValue)) {
        const errMsg = validatePasswordInput(pwValue);
        setPwErrMsg(errMsg);
      } else {
        setPwErrMsg("");
      }
    };

    checkPwHandler(pwValue);
  }, [pwValue]);

  return (
    <Styled.Form>
      <Styled.Inputs>
        <Input
          placeholder={"이메일을 입력해주세요."}
          type="email"
          first={true}
          label={"이메일"}
          errMsg={emailErrMsg}
          setValue={setEmailValue}
        />
        <Input
          placeholder={"비밀번호를 입력해주세요."}
          type="password"
          first={false}
          label={"패스워드"}
          errMsg={pwErrMsg}
          setValue={setPwValue}
        />
      </Styled.Inputs>
      <Styled.Button>가입하기</Styled.Button>
    </Styled.Form>
  );
};

export default Form;
