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

function SignUp() {
  const [emailVal, setEmailVal] = useState("");
  const [pwdVal, setPwdVal] = useState("");
  const [pwdCheckVal, setPwdCheckVal] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwdCheckError, setPwdCheckError] = useState("");

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

  // <-- Pwd, Pwd Check Input 관리 -->
  const handlePwdValChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const inputVal = e.target.value;

    if (type === "pwd") {
      setPwdVal(inputVal);
      handlePwdError(inputVal, pwdCheckVal);
    } else if (type === "pwd_check") {
      setPwdCheckVal(inputVal);
      handlePwdError(pwdVal, inputVal);
    }
  };

  async function checkEmailUnique(email: string) {
    const formData = JSON.stringify({
      email: email,
    });
    const response = await axios.post("check-email", formData);

    if (response.status === 200) return true;
    else return false;
  }

  const handlePwdError = (pwd: string, pwdCheck: string) => {
    const checkPwdFormat = /[a-zA-Z]/g.test(pwd) && /\d/g.test(pwd);

    const hasPwdFormatError = !checkPwdFormat && pwd;
    const hasPwdCheckFormatError =
      pwd !== "" && pwdCheck !== "" && pwd !== pwdCheck;

    hasPwdFormatError
      ? setPwdError("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요")
      : setPwdError("");

    hasPwdCheckFormatError
      ? setPwdCheckError("비밀번호가 일치하지 않아요.")
      : setPwdCheckError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!checkEmailUnique(emailVal)) {
      setEmailError("이미 사용 중인 이메일 입니다.");
      return;
    }

    const hasNoFormatError = emailError === "" && emailVal && pwdVal;

    if (hasNoFormatError) {
      const formData = JSON.stringify({
        email: emailVal,
        password: pwdVal,
      });

      const signUpResult = await axios.post("sign-up", formData);

      if (signUpResult.status === 200) {
        const assessToken = signUpResult.data.accessToken;
        assessToken && window.localStorage.setItem("accessToken", assessToken);

        router.push("/folder");
      } else {
        setEmailError(
          "회원가입 도중 에러가 발생했습니다. 관리자에게 문의하세요"
        );
        return false;
      }
    }
  };

  return (
    <LoginWrapper>
      <LogoContainer>
        <Image src={logoImage} width={210} height={38} alt="logo" />
        <TextWrapper>
          <Text1>이미 회원이신가요?</Text1>
          <LinkText href="login">로그인 하기</LinkText>
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
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
            errorMessage={pwdError}
          />
        </>
        <>
          <PwdLabel>비밀번호 확인</PwdLabel>
          <Input
            password
            value={pwdCheckVal}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handlePwdValChange(e, "pwd_check")
            }
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
            errorMessage={pwdCheckError}
          />
        </>
        <BlueGradationBtn width="100%" margin="30px 0 32px">
          회원가입
        </BlueGradationBtn>
      </form>
      <SocialLoginContainer>
        <Text2>다른 방식으로 가입하기</Text2>
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

export default SignUp;

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

const LinkText = styled(Link)`
  color: #6d6afe;
  text-decoration: underline;
  ${FONT_STYLE.BODY1_SEMIBOLD}
`;

const EmailLabel = styled(Text2)`
  margin-bottom: 12px;
`;

const PwdLabel = styled(Text2)`
  margin-bottom: 12px;
  margin-top: 24px;
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
