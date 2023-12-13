import { EmailInput } from "@/src/components/Sign/EmailInput";
import { PasswordInput } from "@/src/components/Sign/PasswordInput";
import { SignButton } from "@/src/components/Sign/SignButton";
import { SignHeader } from "@/src/components/Sign/SignHead";
import { SocialSign } from "@/src/components/Sign/SocialSign";
import * as React from "react";
import styled from "styled-components";

function SignIn() {
  return (
    <Container>
      <RegularLoginSection>
        <SignHeader type="로그인" />
        <EmailInput />
        <PasswordInput type="기본" />
        <SignButton type="로그인" />
      </RegularLoginSection>
      <SocialSign type="로그인" />
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  background: #f0f6ff;
  padding-top: 23.8rem;
  padding-bottom: 25.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 1199px) {
    padding: 20rem 40rem 29rem;
  }

  @media (max-width: 767px) {
    padding: 12rem 3.2rem 23.2rem 3.2rem;
    gap: 3.2rem;
  }
`;

const RegularLoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
