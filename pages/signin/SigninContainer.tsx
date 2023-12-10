import Link from "next/link";
import Image from "next/image";

import * as S from "../signup/SignupContainerStyles";
import SigninForm from "@/components/SignInForm";

export default function SignUpContainer() {
  return (
    <S.Layout>
      <S.Container>
        <S.Title>
          <Link href="/">
            <Image src="/images/logo.svg" alt="logo" fill />
          </Link>
        </S.Title>
        <S.Description>
          <span>회원이 아니신가요?</span>
          <div>
            <S.StyledLink href="/signup">회원 가입하기</S.StyledLink>
            <S.UnderLine />
          </div>
        </S.Description>
        <SigninForm />
        <S.OAuth>
          <S.OAuthTitle>소셜 로그인</S.OAuthTitle>
          <S.OAuthLinks>
            <Link href="https://www.google.com/" target="_blank">
              <Image src="/social/google.svg" alt="구글로그인" width={50} height={50} />
            </Link>
            <Link href="https://www.kakaocorp.com/page/" target="_blank">
              <Image src="/social/kakao.svg" alt="카카오로그인" width={50} height={50} />
            </Link>
          </S.OAuthLinks>
        </S.OAuth>
      </S.Container>
    </S.Layout>
  );
}
