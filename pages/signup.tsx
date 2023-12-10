import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Header from '@/components/sign/Header';
import Button from '@/components/common/Button';
import InputBox from '@/components/common/Input/InputBox';
import { emailRules, signUpPwRules } from '@/lib/constants/validations';
import SocialBox from '@/components/sign/SocialBox';
import { onSignUp } from '@/lib/utils/onValid';
import { checkToken } from '@/lib/utils/checkToken';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  checkToken(false);

  return (
    <Background>
      <Container onSubmit={handleSubmit((data) => onSignUp(data, setError))}>
        <Header type="signup" />
        <InputBox type="이메일" placeholder="이메일을 입력해 주세요." register={register('email', emailRules)} error={errors.email} />
        <InputBox
          type="비밀번호"
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          register={register('password', signUpPwRules)}
          error={errors.password}
        />
        <InputBox type="비밀번호 확인" placeholder="비밀번호와 일치하는 값을 입력해 주세요." register={register('pwCheck')} error={errors.pwCheck} />
        <Button>회원가입</Button>
        <SocialBox type="signup" />
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
