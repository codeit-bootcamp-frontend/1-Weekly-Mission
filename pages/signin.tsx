import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import InputBox from '@/components/common/Input/InputBox';
import SocialBox from '@/components/sign/SocialBox';
import Header from '@/components/sign/Header';
import { emailRules, signInPwRules } from '@/lib/constants/validations';
import { onSignIn } from '@/lib/utils/onValid';
import { checkToken } from '@/lib/utils/checkToken';

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  if (checkToken(false)) router.push('/folder');

  return (
    <Background>
      <Container onSubmit={handleSubmit((data) => onSignIn(data, setError))}>
        <Header type="signin" />
        <InputBox type="이메일" placeholder="이메일을 입력해 주세요." register={register('email', emailRules)} error={errors.email} />
        <InputBox type="비밀번호" placeholder="비밀번호를 입력해 주세요." register={register('password', signInPwRules)} error={errors.password} />
        <Button>로그인</Button>
        <SocialBox type="signin" />
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
