import React, { FormEvent, ReactNode } from "react";
import * as S from "@/layouts/auth/AuthLayout.style";
import kakaoIcon from "@/images/auth/kakao-login-icon.png";
import googleIcon from "@/images/auth/google-login-icon.png";

const AuthLayout = ({
  children,
  handleSubmit,
  mode,
}: {
  children: ReactNode;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  mode: string;
}) => {
  return (
    <S.AuthWrap>
      <S.Auth>
        <S.AuthHeader>
          <S.LogoLink href="/">
            <S.LogoImage />
          </S.LogoLink>

          {mode === "signin" ? (
            <S.HeaderText>
              회원이 아니신가요? <S.HeaderLink href="/user/signup">회원 가입하기</S.HeaderLink>
            </S.HeaderText>
          ) : (
            <S.HeaderText>
              이미 회원이신가요? <S.HeaderLink href="/user/signin">로그인 하기</S.HeaderLink>
            </S.HeaderText>
          )}
        </S.AuthHeader>
        <S.AuthForm onSubmit={handleSubmit} noValidate>
          {children}
        </S.AuthForm>
        <S.AuthFooter>
          <S.AuthSocialWrap>
            <S.SocialText>소셜 로그인</S.SocialText>
            <S.AuthSocial>
              <S.SocialLink href="https://www.kakaocorp.com/page/">
                <S.SocialImage src={googleIcon} width={42} height={42} alt="구글로 로그인" />
              </S.SocialLink>
              <S.SocialLink href="https://www.google.com/">
                <S.SocialImage src={kakaoIcon} width={42} height={42} alt="카카오로 로그인" />
              </S.SocialLink>
            </S.AuthSocial>
          </S.AuthSocialWrap>
        </S.AuthFooter>
      </S.Auth>
    </S.AuthWrap>
  );
};

const AuthButton = ({ children }: { children: ReactNode }) => {
  return <S.AuthButton>{children}</S.AuthButton>;
};

AuthLayout.AuthButton = AuthButton;

export default AuthLayout;
