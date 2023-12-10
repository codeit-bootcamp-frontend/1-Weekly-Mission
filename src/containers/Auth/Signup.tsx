import {
  ChangeEvent,
  FocusEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import useRequest from '@/hooks/useRequest';
import Button from '@/components/Button';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Social from './components/Social';
import {
  ERROR_MESSAGES,
  validateEmail,
  validatePassword,
  validatePasswordCheck,
} from './validation';

interface Signup {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

interface CheckEmail {
  data: {
    isUsableNickname: boolean;
  };
}

function Signup() {
  const router = useRouter();
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] =
    useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setEmail(nextValue);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setPassword(nextValue);
  };

  const onPasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setPasswordCheck(nextValue);
  };

  const { fetch: checkEmail } = useRequest<CheckEmail>({
    skip: true,
    options: {
      url: `/check-email`,
      method: 'post',
      data: { email },
    },
  });

  const { fetch: signup } = useRequest<Signup>({
    skip: true,
    options: {
      url: `/sign-up`,
      method: 'post',
      data: { email, password },
    },
  });

  const onSignup = async (e: SyntheticEvent) => {
    e.preventDefault();
    const newEmailErrorMessage = validateEmail(email);
    const newPasswordErrorMessage = validatePassword(password, router.pathname);
    const newPasswordCheckErrorMessage = validatePasswordCheck(
      passwordCheck,
      password,
    );
    if (
      newEmailErrorMessage ||
      newPasswordErrorMessage ||
      newPasswordCheckErrorMessage
    ) {
      setEmailErrorMessage(newEmailErrorMessage);
      setPasswordErrorMessage(newPasswordErrorMessage);
      setPasswordCheckErrorMessage(newPasswordCheckErrorMessage);
    }

    if (!newEmailErrorMessage) {
      const { error: duplicateEmailError } = await checkEmail();
      if (duplicateEmailError) {
        setEmailErrorMessage(ERROR_MESSAGES.email.unavailableEmail);
        return;
      }
    }

    if (
      newEmailErrorMessage ||
      newPasswordErrorMessage ||
      newPasswordCheckErrorMessage
    )
      return;

    const {
      data: {
        data: { accessToken },
      },
      error: signupError,
    } = await signup();

    if (signupError) {
      console.error('회원가입에 실패하였습니다.');
      return;
    }

    localStorage.setItem('accessToken', accessToken);
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

  const onPasswordCheckBlur = (e: FocusEvent<HTMLInputElement>) => {
    const errorMessage = validatePasswordCheck(e.target.value, password);
    setPasswordCheckErrorMessage(errorMessage);
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  });

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-background'>
      <main className='flex w-[40rem] flex-col items-center justify-center gap-30pxr'>
        <Header />
        <form
          onSubmit={onSignup}
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
          <InputContainer
            id='password-check'
            type='password'
            placeholder='• • • • • • • •'
            errorMessage={passwordCheckErrorMessage}
            onChange={onPasswordCheckChange}
            onBlur={onPasswordCheckBlur}
          >
            비밀번호 확인
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

export default Signup;
