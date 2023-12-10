import styled from "styled-components";
import Logo from "../../images/logo.svg";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import kakao from "../../images/Kakao.svg";
import google from "../../images/google.png";
interface SignLayoutProps {
  children: ReactNode;
  formType: "in" | "up";
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function SignLayout({
  children,
  formType,
  handleSubmit,
}: SignLayoutProps) {
  return (
    <SignContainer>
      <Sign>
        <SignHeader>
          <Link href="/">
            <Image src={Logo} width={200} height={40} alt="회사로고" />
          </Link>
        </SignHeader>
        <HeaderContent formType={formType} />
        <SignForm onSubmit={handleSubmit}>{children}</SignForm>

        <SignFooter>
          <SnsSignWrapper>
            <SnsText>쇼셜 로그인</SnsText>
            <Sns>
              <Link href="https://www.google.com/">
                <Image src={google} width={42} height={42} alt="구글 로고" />
              </Link>
              <Link href="https://www.kakao.com">
                <Image src={kakao} width={42} height={42} alt="카카오 로고" />
              </Link>
            </Sns>
          </SnsSignWrapper>
        </SignFooter>
      </Sign>
    </SignContainer>
  );
}

export function HeaderContent({ formType }: { formType: string }) {
  if (formType === "in") {
    return (
      <HeaderMessage>
        회원이 아니신가요?
        <HeaderContentLink href="/signup">회원 가입하기</HeaderContentLink>
      </HeaderMessage>
    );
  } else {
    <HeaderMessage>
      이미 회원이신가요?
      <HeaderContentLink href="/signin">로그인 하기</HeaderContentLink>
    </HeaderMessage>;
  }
}

export function SignButton({ children }: { children: ReactNode }) {
  return <SignButtonWrapper>{children}</SignButtonWrapper>;
}

const SignContainer = styled.div`
  display: flex;
  width: 1440px;
  padding: 238px 0px 252px 0px;
  justify-content: center;
  align-items: center;
  background: var(--linkbrary-bg, #f0f6ff);
`;

const Sign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const SignForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`;

const SignHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const HeaderMessage = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000;
`;

const SignFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SnsSignWrapper = styled.div`
  display: flex;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-gray-10, #e7effb);
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  font-family: Pretendard;
`;

const Sns = styled.div`
  display: flex;
  gap: 16px;
`;

const SnsText = styled.p`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SignButtonWrapper = styled.button`
  display: flex;
  width: 400px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );

  color: #f5f5f5;
`;

const HeaderContentLink = styled(Link)`
  color: var(--linkbrary-primary-color, #6d6afe);

  /* Linkbrary/body 1-semibold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
