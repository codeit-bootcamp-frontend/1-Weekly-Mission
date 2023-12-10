import Link from "next/link";
import Image from "next/image";

import * as S from "./SignupContainerStyles";
import SignupForm from "@/components/SignForm";

export default function SignUpContainer() {
  return (
    <S.Layout>
      <S.Container>
        <S.StyledLinkLogo href="/">
          <Image src="/images/logo.svg" alt="logo" fill priority />
        </S.StyledLinkLogo>
        <S.Description>
          <span>이미 회원이신가요?</span>
          <div>
            <S.StyledLink href="/signin">로그인 하기</S.StyledLink>
            <S.UnderLine />
          </div>
        </S.Description>
        <SignupForm />
        <S.OAuth>
          <S.OAuthTitle>다른 방식으로 가입하기</S.OAuthTitle>
          <S.OAuthLinks>
            <Link href="https://www.google.com/" target="_blank">
              <Image src="/social/google.svg" alt="구글로 회원가입" width={50} height={50} />
            </Link>
            <Link href="https://www.kakaocorp.com/page/" target="_blank">
              <Image src="/social/kakao.svg" alt="카카오 회원가입" width={50} height={50} />
            </Link>
          </S.OAuthLinks>
        </S.OAuth>
      </S.Container>
    </S.Layout>
  );
}
