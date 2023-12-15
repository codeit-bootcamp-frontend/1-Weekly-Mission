import { EmailInput } from "@/src/components/auth/Sign/EmailInput";
import { PasswordInput } from "@/src/components/auth/Sign/PasswordInput";
import { SignButton } from "@/src/components/auth/Sign/SignButton";
import { SignHeader } from "@/src/components/auth/Sign/SignHead";
import { SocialSign } from "@/src/components/auth/Sign/SocialSign";
import * as React from "react";
import styled from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "@/src/global/mediaQuery";

function SignIn() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <Container>
      <RegularLoginSection>
        <SignHeader type="로그인" />
        <EmailInput type="로그인" setEmail={setEmail} />
        <PasswordInput type="기본" setPassword={setPassword} />
        <SignButton type="로그인" email={email} password={password} />
      </RegularLoginSection>
      <SocialSign type="로그인" />
    </Container>
  );
}

export default SignIn;

export const Container = styled.div`
  background: #f0f6ff;
  padding-top: 23.8rem;
  padding-bottom: 25.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: ${PC_SIZE}) {
    padding: 20rem 40rem 29rem;
  }

  @media (max-width: ${TABLET_SIZE}) {
    padding: 12rem 3.2rem 23.2rem 3.2rem;
    gap: 3.2rem;
  }
`;

export const RegularLoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
