import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import Google from '@/public/assets/images/social_google.svg';
import Kakao from '@/public/assets/images/social_kakao.svg';
import InputBox from '@/components/common/Input/InputBox';
import { validateEmail, validatePassword } from '@/lib/utils/validations';

export default function SignUp() {
  return (
    <Background>
      <Container>
        <Header>
          <Logo width={210.6} height={38} />
          <Signin>
            <Description>이미 회원이신가요?</Description>
            <GoSignIn href={'/signin'}>로그인 하기</GoSignIn>
          </Signin>
        </Header>
        <InputBox type="이메일" placeholder="이메일을 입력해 주세요." validationFunc={validateEmail} />
        <InputBox type="비밀번호" placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요." validationFunc={validatePassword} />
        <InputBox type="비밀번호 확인" placeholder="비밀번호와 일치하는 값을 입력해 주세요." validationFunc={validatePassword} />
        <Button>회원가입</Button>
        <SocialBox>
          다른 방식으로 가입하기
          <IconWrapper>
            <Link href="https://www.google.com/">
              <Image src={Google} alt="구글 홈페이지 바로가기" width={42} height={42} />
            </Link>
            <Link href="https://www.kakaocorp.com/page/">
              <Image src={Kakao} alt="카카오 홈페이지 바로가기" width={42} height={42} />
            </Link>
          </IconWrapper>
        </SocialBox>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;

  background-color: var(--bg);
`;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Header = styled.div`
  width: 218px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Signin = styled.div`
  display: flex;
  gap: 8px;
`;

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 150%;
`;

const GoSignIn = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--primary-color);
`;

const SocialBox = styled.div`
  width: 100%;
  padding: 12px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--gray-20);
  background-color: var(--gray-10);

  font-size: 1.4rem;
`;

const IconWrapper = styled.div`
  width: 100px;

  display: flex;
  justify-content: space-between;
`;
