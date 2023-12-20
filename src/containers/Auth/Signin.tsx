import { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useRequest from '@/hooks/useRequest';
import Button from '@/components/Button';
import { InputContainer } from '@/components/Input';
import Header from './components/Header';
import Social from './components/Social';
import { EMAIL_REGEX, ERROR_MESSAGES } from './validation';

interface FormValues {
  email: string;
  password: string;
}

interface Signin {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

function Signin() {
  const router = useRouter();

  const { handleSubmit, control, watch, setError } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const { fetch: signin } = useRequest<Signin>({
    skip: true,
    options: {
      url: `/sign-in`,
      method: 'post',
      data: { email: watch('email'), password: watch('password') },
    },
  });

  const onSignin = async () => {
    const { data, error } = await signin();

    if (error) {
      setError('email', {
        type: 'invalid',
        message: ERROR_MESSAGES.email.invalidLogin,
      });
      setError('password', {
        type: 'invalid',
        message: ERROR_MESSAGES.password.invalidLogin,
      });
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
          onSubmit={handleSubmit(onSignin, onError)}
          noValidate
          className='flex w-full flex-col gap-18pxr'
        >
          <InputContainer<FormValues>
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
          <InputContainer<FormValues>
            control={control}
            name='password'
            type='password'
            placeholder='• • • • • • • •'
            rules={{
              required: ERROR_MESSAGES.password.emptyInput,
            }}
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
