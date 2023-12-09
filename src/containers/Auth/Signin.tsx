import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import Button from '@/components/Button';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Social from './components/Social';
import useRequest from '@/hooks/useRequest';
import { useRouter } from 'next/router';

export const ERROR_MESSAGES = {
  email: {
    emptyInput: '이메일을 입력해주세요.',
    invalidInput: '올바른 이메일 주소가 아닙니다.',
    invalidLogin: '이메일을 확인해주세요.',
    unavailableEmail: '이미 사용 중인 이메일입니다.',
  },
  password: {
    emptyInput: '비밀번호를 입력해주세요.',
    invalidInput: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    invalidLogin: '비밀번호를 확인해주세요.',
  },
  passwordCheck: {
    invalidInput: '비밀번호가 일치하지 않아요.',
  },
};

interface Signin {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

function Signin() {
  const router = useRouter();
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setEmail(nextValue);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setPassword(nextValue);
  };

  const { fetch: signin } = useRequest<Signin>({
    skip: true,
    options: {
      url: `/sign-in`,
      method: 'post',
      data: { email, password },
    },
  });

  const onSignin = async () => {
    const { data: accessToken, error } = await signin();
    if (error) {
      setEmailErrorMessage(ERROR_MESSAGES.email.invalidLogin);
      setPasswordErrorMessage(ERROR_MESSAGES.password.invalidLogin);
      return;
    }
    router.push('/folder');
  };

  const clearErrorMessage = () => {
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-background'>
      <main className='flex w-[40rem] flex-col items-center justify-center gap-30pxr'>
        <Header />
        <form noValidate className='flex w-full flex-col gap-18pxr'>
          <InputContainer
            id='email'
            type='email'
            placeholder='codeit@codeit.com'
            errorMessage={emailErrorMessage}
            onChange={onEmailChange}
            clearErrorMessage={clearErrorMessage}
          >
            이메일
          </InputContainer>
          <InputContainer
            id='password'
            type='password'
            placeholder='• • • • • • • •'
            errorMessage={passwordErrorMessage}
            onChange={onPasswordChange}
            clearErrorMessage={clearErrorMessage}
          >
            비밀번호
          </InputContainer>
          <Button size='lg' type='button' onClick={onSignin}>
            로그인
          </Button>
        </form>
        <Social />
      </main>
    </div>
  );
}

export default Signin;
