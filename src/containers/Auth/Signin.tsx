import { ChangeEvent, FocusEvent, SyntheticEvent, useState } from 'react';
import Button from '@/components/Button';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Social from './components/Social';
import useRequest from '@/hooks/useRequest';
import { useRouter } from 'next/router';
import { ERROR_MESSAGES, validateEmail, validatePassword } from './validation';

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

  const onSignin = async (e: SyntheticEvent) => {
    e.preventDefault();
    const newEmailErrorMessage = validateEmail(email);
    const newPasswordErrorMessage = validatePassword(password, router.pathname);
    if (newEmailErrorMessage || newPasswordErrorMessage) {
      setEmailErrorMessage(newEmailErrorMessage);
      setPasswordErrorMessage(newPasswordErrorMessage);
      return;
    }

    const { data: accessToken, error } = await signin();
    if (error) {
      setEmailErrorMessage(ERROR_MESSAGES.email.invalidLogin);
      setPasswordErrorMessage(ERROR_MESSAGES.password.invalidLogin);
      return;
    }
    router.push('/folder');
  };

  const onEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
    const errorMessage = validateEmail(e.target.value);
    setEmailErrorMessage(errorMessage);
  };

  const onPasswordBlur = (e: FocusEvent<HTMLInputElement>) => {
    const errorMessage = validatePassword(e.target.value, router.pathname);
    setPasswordErrorMessage(errorMessage);
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-background'>
      <main className='flex w-[40rem] flex-col items-center justify-center gap-30pxr'>
        <Header />
        <form
          onSubmit={onSignin}
          noValidate
          className='flex w-full flex-col gap-18pxr'
        >
          <InputContainer
            id='email'
            type='email'
            placeholder='codeit@codeit.com'
            errorMessage={emailErrorMessage}
            onChange={onEmailChange}
            onBlur={onEmailBlur}
          >
            이메일
          </InputContainer>
          <InputContainer
            id='password'
            type='password'
            placeholder='• • • • • • • •'
            errorMessage={passwordErrorMessage}
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
          >
            비밀번호
          </InputContainer>
          <Button size='lg' type='submit'>
            로그인
          </Button>
        </form>
        <Social />
      </main>
    </div>
  );
}

export default Signin;
