import { PropsWithChildren } from "react";
import logo from "src/assets/icons/logo.svg";
import SocialButton from "src/components/Button/SocialButton";
import SubmitButton from "src/components/Button/SubmitButton";
import RegisterFormProvider from "src/components/FormProvider";
import Icon from "src/components/Icon";
import AuthIntro from "src/components/Link/AuthIntro";
import theme from "src/styles/Theme/theme";
import { AuthLayoutType } from "src/types/Layout";
import styled from "styled-components";

function AuthLayout({
  submitBtnTitle,
  submitBtnLink,
  socialBtnTitle,
  memberStatus,
  linkTitle,
  link,
  children,
}: PropsWithChildren<AuthLayoutType>) {
  return (
    <RegisterFormProvider>
      <StyledWrapper>
        <Icon src={logo} alt="로고" width={210} height={38} />
        <AuthIntro
          memberStatus={memberStatus}
          linkTitle={linkTitle}
          link={link}
        />
        <StyledInputWrapper>
          {children}
          <StyledButtonWrapper>
            <SubmitButton name={submitBtnTitle} link={submitBtnLink} />
            <SocialButton title={socialBtnTitle} />
          </StyledButtonWrapper>
        </StyledInputWrapper>
      </StyledWrapper>
    </RegisterFormProvider>
  );
}

export default AuthLayout;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.blueBackground};
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 15px;
`;
