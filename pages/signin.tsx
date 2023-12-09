import * as S from "@/styles/SignIn.styled";
import Link from "next/link";
import Image from 'next/image';
import logoImage from "@/public/images/logo.svg";
import InputForm from "@/components/InputForm";
import Button from "@/components/Button";

export default function SignIn() {

  return (
    <S.Container>
      <S.Wrapper>
        <Image src={logoImage} width={210} height={38} alt="로고이미지" />
        <S.Header>
          회원이 아니신가요? <S.LinkText><Link href="/signup">회원 가입하기</Link></S.LinkText>
        </S.Header>
        <S.SignInForm>
          <S.SignInContainer>
            <InputForm
              name="이메일"
              type="email"
              placeholder="이메일을 입력해 주세요"
            />
            <InputForm
              name="비밀번호"
              type="password"
              placeholder="비밀번호가 일치하지 않아요"
            />
          </S.SignInContainer>
          <Button>로그인</Button>
        </S.SignInForm>
      </S.Wrapper>
    </S.Container>
  );
}
