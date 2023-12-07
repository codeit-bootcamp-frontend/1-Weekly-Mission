import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '@/components/common/Logo';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Google from '@/public/assets/images/social_google.svg';
import Kakao from '@/public/assets/images/social_kakao.svg';

export default function Signin() {
  function handleEmailBlur() {}

  return (
    <Background>
      <Container>
        <Header>
          <Logo width={210.6} height={38} />
          <Signup>
            <Description>회원이 아니신가요?</Description>
            <GoSignUp href={'/signup'}>회원 가입하기</GoSignUp>
          </Signup>
        </Header>
        <InputWrapper>
          <Text>이메일</Text>
          <Input passwordMode={false} placeholder="codeit@codeit.com" handleInputBlur={handleEmailBlur} />
        </InputWrapper>
        <InputWrapper>
          <Text>비밀번호</Text>
          <Input passwordMode={true} placeholder="●●●●●●●●" handleInputBlur={handleEmailBlur} />
        </InputWrapper>
        <Button>로그인</Button>
        <SocialBox>
          소셜 로그인
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

const Signup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 150%;
`;

const GoSignUp = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--primary-color);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Text = styled.div`
  font-size: 1.4rem;
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
