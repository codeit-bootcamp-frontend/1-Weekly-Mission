import React from "react";
import logoImage from "/public/icon/logo.svg";
import Image from "next/image";
import styled from "styled-components";
import Input from "@/components/Inputs/Input";
import BlueGradationBtn from "@/components/Buttons/BlueGradationBtn";
import googleButton from "/public/image/googleButton.png";
import kakaoButton from "/public/image/kakaoButton.png";
import Link from "next/link";

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

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const Text2 = styled.h4`
  color: var(--black, #000);

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const EmailLabel = styled(Text2)`
  margin-bottom: 12px;
`;
const PwdLabel = styled(Text2)`
  margin-bottom: 12px;
  margin-top: 24px;
`;

const BlueText = styled.h4`
  color: #6d6afe;

  /* Linkbrary/body 1-semibold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: underline;
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
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-gray-10, #e7effb);
`;

const SocialButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
function Login() {
  return (
    <LoginWrapper>
      <LogoContainer>
        <Image src={logoImage} width={210} height={38} alt="logo" />
        <TextWrapper>
          <Text1>회원이 아니신가요?</Text1>
          <BlueText>회원 가입하기</BlueText>
        </TextWrapper>
      </LogoContainer>
      <div>
        <EmailLabel>이메일</EmailLabel>
        <Input />
        <PwdLabel>비밀번호</PwdLabel>
        <Input password />
        <BlueGradationBtn width="100%" margin="30px 0 32px">
          로그인
        </BlueGradationBtn>
      </div>
      <SocialLoginContainer>
        <Text2>소셜 로그인</Text2>
        <SocialButtonWrapper>
          <Link rel="icon" href="https://www.naver.com/">
            <Image
              src={googleButton}
              alt="googleButton"
              width={42}
              height={42}
            />
          </Link>
          <Link rel="icon" href="https://www.google.com/">
            <Image src={kakaoButton} alt="kakaoButton" width={42} height={42} />
          </Link>
        </SocialButtonWrapper>
      </SocialLoginContainer>
    </LoginWrapper>
  );
}

export default Login;
