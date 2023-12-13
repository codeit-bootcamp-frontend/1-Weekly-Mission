import styled from "styled-components";
import Input from "./Input";
import { FormEvent, useEffect, useState } from "react";
import { isValidEmail, isValidPW, isValidPWCheck } from "@/utils/validators";
import { checkEmail } from "@/utils/signInUp";
import { useRouter } from "next/router";

interface FormType {
  type: "sign-in" | "sign-up";
  apiCall: (email: string, password: string) => Promise<boolean>;
  apiCall2?: (email: string) => Promise<boolean>;
}

export default function Form({ type, apiCall, apiCall2 }: FormType) {
  const [email, setEmail] = useState("1");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [pw, setPW] = useState("2");
  const [pwError, setPWError] = useState(false);
  const [pwErrorMsg, setPWErrorMsg] = useState("");

  const [pw2, setPW2] = useState("3");
  const [pw2Error, setPW2Error] = useState(false);
  const [pw2ErrorMsg, setPW2ErrorMsg] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const f_email = formdata.get("email") as string;
    const f_pw = formdata.get("password") as string;
    const f_pwCheck = formdata.get("passwordCheck") as string;

    console.log(f_email);
    console.log(f_pw);

    setEmail(formdata.get("email") as string);
    setPW(formdata.get("password") as string);
    setPW2(formdata.get("passwordCheck") as string);

    // console.log(email);
    // console.log(pw);

    if (type == "sign-in") {
      const succ = await apiCall(f_email, f_pw);
      if (succ) {
        console.log("로그인 성공");
        router.push("/folder");
        return;
      }
      setEmailError(true);
      setEmailErrorMsg("이메일을 확인해주세요.");
      setPWError(true);
      setPWErrorMsg("비밀번호를 확인해주세요.");
      return;
    }

    if (type == "sign-up" && apiCall2) {
      if (!emailError && !pwError && !pw2Error) {
        const availableEmail = await apiCall2(email);
        if (availableEmail) {
          console.log("회원가입 성공");
          router.push("/folder");
          return;
        }
        setEmailError(true);
        setEmailErrorMsg("이미 가입한 이메일입니다.");
      }
      return;
    }
  };

  useEffect(() => {
    if (email === "") {
      setEmailError(true);
      setEmailErrorMsg("이메일을 입력해주세요.");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError(true);
      setEmailErrorMsg("올바른 이메일 주소가 아닙니다.");
      return;
    }
    setEmailError(false);
  }, [email]);

  useEffect(() => {
    if (pw === "") {
      setPWError(true);
      setPWErrorMsg("비밀번호를 입력해주세요.");
      return;
    }
    if (!isValidPW(pw)) {
      setPWError(true);
      setPWErrorMsg("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
      return;
    }
    setPWError(false);
  }, [pw]);

  useEffect(() => {
    if (pw2 === "") {
      setPW2Error(true);
      setPW2ErrorMsg("비밀번호를 입력해주세요.");
      return;
    }
    if (isValidPW(pw) && !isValidPWCheck(pw, pw2)) {
      setPW2Error(true);
      setPW2ErrorMsg("비밀번호가 다릅니다.");
      return;
    }
    setPW2Error(false);
  }, [pw2]);

  useEffect(() => {
    setEmailError(false);
    setPWError(false);
    setPW2Error(false);
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Container>
        <Label>이메일</Label>
        <Input
          name="email"
          type="email"
          placeHolder="이메일을 입력해주세요."
          setValue={setEmail}
        ></Input>
        {emailError && <ErrorMsg>{emailErrorMsg}</ErrorMsg>}
      </Container>
      <Container>
        <Label>비밀번호</Label>
        <Input
          name="password"
          type="password"
          placeHolder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          setValue={setPW}
        ></Input>
        {pwError && <ErrorMsg>{pwErrorMsg}</ErrorMsg>}
      </Container>
      {type === "sign-up" && (
        <Container>
          <Label>비밀번호 확인</Label>
          <Input
            name="passwordCheck"
            type="password"
            placeHolder="비밀번호와 일치하는 값을 입력해 주세요."
            setValue={setPW2}
          ></Input>
          {pw2Error && <ErrorMsg>{pw2ErrorMsg}</ErrorMsg>}
        </Container>
      )}
      <Button type="submit">
        {type === "sign-in" ? "로그인" : "회원가입"}
      </Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
`;

const Label = styled.div`
  display: block;
  font: 400 1.4rem Pretendard;
  color: black;
  margin-bottom: 1.2rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.4rem;
  margin-top: 3rem;
  padding: 1.6rem 2rem;

  border: none;
  border-radius: 0.8rem;
  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);

  font-size: 1.8rem;
  font-weight: 600;
  color: #f5f5f5;
`;

const ErrorMsg = styled.div`
  color: #ff5b56;
  font: 400 1.4rem Pretendard;
  height: fit-content;
`;
