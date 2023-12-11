import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FONT_STYLE } from "styles/fontStyle";
import axios from "@/lib/axios";
import Input from "@/components/Inputs/Input";
import BlueGradationBtn from "@/components/Buttons/BlueGradationBtn";
import logoImage from "/public/icon/logo.svg";
import googleButton from "/public/image/googleButton.png";
import kakaoButton from "/public/image/kakaoButton.png";

function Login() {
  const [emailVal, setEmailVal] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdVal, setPwdVal] = useState("");

  const router = useRouter();

  if (typeof window !== "undefined") {
    window.localStorage.getItem("accessToken") && router.push("/folder");
  }

  // <-- Email Input 관리 -->
  const handleEmailValChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailVal(e.target.value);

    checkEmailFormat(emailVal)
      ? setEmailError("")
      : setEmailError("올바른 이메일 주소가 아닙니다");
  };

  function checkEmailFormat(str: string) {
    const pattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 형식 검사 정규식
    return pattern.test(str);
  }

  // <-- Pwd Input 관리 -->
  const handlePwdValChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const inputVal = e.target.value;

    setPwdVal(inputVal);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const hasNoFormatError =
      emailVal != "" && pwdVal !== "" && emailError === "";

    if (hasNoFormatError) {
      const isLoginSucess = await handleLogin(emailVal, pwdVal);
      isLoginSucess && router.push("/folder");
    }
  }

  async function handleLogin(email: string, pwd: string) {
    const formData = JSON.stringify({
      email: email,
      password: pwd,
    });

    const loginResult = await axios.post("/sign-in", formData);

    if (loginResult.status === 200) {
      const assessToken = loginResult.data.accessToken;
      console.log(assessToken);
      assessToken && window.localStorage.setItem("accessToken", assessToken);
      console.log(window.localStorage.getItem("accessToken"));

      router.push("/folder");
    } else {
      setEmailError(
        "해당 아이디로 등록된 계정이 없거나 비밀번호가 맞지 않습니다."
      );
      return false;
    }
  }

  return (
    <LoginWrapper>
      <LogoContainer>
        <Image src={logoImage} width={210} height={38} alt="logo" />
        <TextWrapper>
          <Text1>회원이 아니신가요?</Text1>
          <LinkText href="signup">회원 가입하기</LinkText>
        </TextWrapper>
      </LogoContainer>
      <form onSubmit={handleSubmit}>
        <>
          <EmailLabel>이메일</EmailLabel>
          <Input
            value={emailVal}
            onChange={handleEmailValChange}
            placeholder="이메일을 입력해 주세요."
            errorMessage={emailError}
          />
        </>
        <>
          <PwdLabel>비밀번호</PwdLabel>
          <Input
            password
            value={pwdVal}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handlePwdValChange(e, "pwd")
            }
            placeholder="비밀번호를 입력해 주세요."
          />
        </>
        <BlueGradationBtn width="100%" margin="30px 0 32px">
          로그인
        </BlueGradationBtn>
      </form>
      <SocialLoginContainer>
        <Text2>소셜 로그인</Text2>
        <SocialButtonWrapper>
          <Link rel="icon" href="https://www.google.com/">
            <Image
              src={googleButton}
              alt="googleButton"
              width={42}
              height={42}
            />
          </Link>
          <Link rel="icon" href="https://www.kakaocorp.com/page">
            <Image src={kakaoButton} alt="kakaoButton" width={42} height={42} />
          </Link>
        </SocialButtonWrapper>
      </SocialLoginContainer>
    </LoginWrapper>
  );
}

export default Login;

// <-- styled-comonents-->
const LoginWrapper = styled.div`
  background: #f0f6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
`;

const Text1 = styled.h4`
  color: #000;
  ${FONT_STYLE.BODY1_REGULAR}
`;

const Text2 = styled.h4`
  color: #000;
  ${FONT_STYLE.BODY2_REGULAR}
`;

const EmailLabel = styled(Text2)`
  margin-bottom: 12px;
`;

const PwdLabel = styled(Text2)`
  margin-bottom: 12px;
  margin-top: 24px;
`;

const LinkText = styled(Link)`
  color: #6d6afe;
  text-decoration: underline;
  ${FONT_STYLE.BODY1_SEMIBOLD}
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  width: 400px;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background: #e7effb;
`;

const SocialButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const ErrorText = styled.h4`
  color: #ff5b56;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;
`;
