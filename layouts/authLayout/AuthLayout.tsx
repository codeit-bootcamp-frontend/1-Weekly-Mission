import googleIcon from "@/images/auth/google-login-icon.png";
import kakaoIcon from "@/images/auth/kakao-login-icon.png";
import * as S from "@/layouts/authLayout/AuthLayout.style";
import { useUser } from "@/utils/AuthProvider";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  mode: "signIn" | "signUp";
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthLayout = ({ children, mode, handleSubmit }: AuthLayoutProps) => {
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (user) router.push("/folder");
  }, [user, router]);
  return (
    <S.AuthWrap>
      <S.Auth>
        <S.AuthHeader>
          <S.LogoLink href="/">
            <S.LogoImage />
          </S.LogoLink>
          {mode === "signIn" ? (
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
              <S.SocialLink href="https://www.google.com/">
                <S.SocialImage src={googleIcon} width={42} height={42} alt="구글로 로그인" />
              </S.SocialLink>
              <S.SocialLink href="https://www.kakaocorp.com/page/">
                <S.SocialImage src={kakaoIcon} width={42} height={42} alt="카카오로 로그인" />
              </S.SocialLink>
            </S.AuthSocial>
          </S.AuthSocialWrap>
        </S.AuthFooter>
      </S.Auth>
    </S.AuthWrap>
  );
};

const AuthButton = ({ children, disabled }: { children: ReactNode; disabled: boolean }) => {
  return <S.AuthButton disabled={disabled}>{children}</S.AuthButton>;
};

AuthLayout.AuthButton = AuthButton;

export default AuthLayout;
