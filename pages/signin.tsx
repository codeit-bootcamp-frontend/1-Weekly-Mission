import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import InputBox from '@/components/common/Input/InputBox';
import SocialBox from '@/components/sign/SocialBox';
import Header from '@/components/sign/Header';
import { signInEmailRules, signInPwRules } from '@/constants/validations';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onValidSignIn = () => {
    alert('성공!');
  };

  return (
    <Background>
      <Container onSubmit={handleSubmit(onValidSignIn)}>
        <Header type="signin" />
        <InputBox type="이메일" placeholder="이메일을 입력해 주세요." register={register('email', signInEmailRules)} error={errors.email} />
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
