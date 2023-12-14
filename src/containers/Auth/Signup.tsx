import { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useRequest from '@/hooks/useRequest';
import Button from '@/components/Button';
import { InputContainer } from '@/components/Input';
import Header from './components/Header';
import Social from './components/Social';
import { EMAIL_REGEX, ERROR_MESSAGES, PASSWORD_REGEX } from './validation';

interface FormValues {
  email: string;
  password: string;
  passwordCheck: string;
}

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

  const { handleSubmit, control, watch, setError } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
    mode: 'onBlur',
  });

  const { fetch: checkEmail } = useRequest<CheckEmail>({
    skip: true,
    options: {
      url: `/check-email`,
      method: 'post',
      data: { email: watch('email') },
    },
  });

  const { fetch: signup } = useRequest<Signup>({
    skip: true,
    options: {
      url: `/sign-up`,
      method: 'post',
      data: { email: watch('email'), password: watch('password') },
    },
  });

  const checkPasswordMatch = (value: string) => {
    if (value !== watch('password')) {
      return ERROR_MESSAGES.passwordCheck.invalidInput;
    }
    return true;
  };

  const onSignup = async () => {
    const { error: duplicateEmailError } = await checkEmail();
    if (duplicateEmailError) {
      setError('email', {
        type: 'unavailable',
        message: ERROR_MESSAGES.email.unavailableEmail,
      });
      return;
    }

    const { data, error: signupError } = await signup();
    if (signupError) {
      console.error('회원가입에 실패하였습니다.');
      return;
    }

    const accessToken = data?.data?.accessToken;
    localStorage.setItem('accessToken', accessToken);
    router.push('/folder');
  };

  const onError = (error: FieldErrors) => {
    console.error(error);
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
          onSubmit={handleSubmit(onSignup, onError)}
          noValidate
          className='flex w-full flex-col gap-18pxr'
        >
          <InputContainer
            control={control}
            name='email'
            type='email'
            placeholder='codeit@codeit.com'
            rules={{
              required: ERROR_MESSAGES.email.emptyInput,
              pattern: {
                value: EMAIL_REGEX,
                message: ERROR_MESSAGES.email.invalidInput,
              },
            }}
          >
            이메일
          </InputContainer>
          <InputContainer
            control={control}
            name='password'
            type='password'
            placeholder='• • • • • • • •'
            rules={{
              required: ERROR_MESSAGES.password.emptyInput,
              pattern: {
                value: PASSWORD_REGEX,
                message: ERROR_MESSAGES.password.invalidInput,
              },
            }}
          >
            비밀번호
          </InputContainer>
          <InputContainer
            control={control}
            name='passwordCheck'
            type='password'
            placeholder='• • • • • • • •'
            rules={{
              validate: checkPasswordMatch,
            }}
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
