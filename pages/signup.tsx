import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import Google from '@/public/assets/images/social_google.svg';
import Kakao from '@/public/assets/images/social_kakao.svg';
import InputBox from '@/components/common/Input/InputBox';

const emailRules = {
  required: '이메일을 입력해주세요.',
  pattern: {
    value: /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/i,
    message: '올바른 이메일 주소가 아닙니다.',
  },
};

const pwRules = {
  required: '비밀번호를 입력해주세요.',
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
    message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  },
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  function onValidSignUp(data: any): void {
    if (data.password !== data.pwCheck) {
      setError('pwCheck', { message: '비밀번호가 일치하지 않아요.' }, { shouldFocus: true });
    } else {
      alert('성공~!');
    }
  }

  return (
    <Background>
      <Container onSubmit={handleSubmit(onValidSignUp)}>
        <Header>
          <Logo width={210.6} height={38} />
          <Signin>
            <Description>이미 회원이신가요?</Description>
            <GoSignIn href={'/signin'}>로그인 하기</GoSignIn>
          </Signin>
        </Header>
        <InputBox type="이메일" placeholder="이메일을 입력해 주세요." register={register('email', emailRules)} error={errors.email} />
        <InputBox
          type="비밀번호"
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          register={register('password', pwRules)}
          error={errors.password}
        />
        <InputBox type="비밀번호 확인" placeholder="비밀번호와 일치하는 값을 입력해 주세요." register={register('pwCheck')} error={errors.pwCheck} />
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

const Container = styled.form`
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
