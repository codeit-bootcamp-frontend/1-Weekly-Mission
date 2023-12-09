import apiRequest from '@api/apiRequest';
import * as S from './SignupForm.style';
import Input from '@components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IFormInput {
  email: string;
  password: string;
  passwordConfirm: string;
}

function SignupForm() {
  const { ...methods } = useForm<IFormInput>({ mode: 'onBlur' });
  const { register, handleSubmit, watch, setError } = methods;
  const router = useRouter();
  const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const password = watch('password');

  const checkEmail = async (email: string) => {
    try {
      const response = await apiRequest({
        url: 'check-email',
        method: 'POST',
        data: { email },
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (error) {
      setError('email', { message: '이미 존재하는 이메일입니다.' });
      return false;
    }
    return true;
  };

  const submitForm = async (data: IFormInput) => {
    const isEmailValid = await checkEmail(data.email);

    if (!isEmailValid) {
      return;
    }

    try {
      const response = await apiRequest({
        url: 'sign-up',
        method: 'POST',
        data,
      });

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        router.push('/folder');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data: IFormInput) => {
    submitForm(data);
  };

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <S.Label htmlFor='email'>이메일</S.Label>
          <Input
            id='email'
            placeholder='이메일을 입력해 주세요.'
            {...register('email', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: EMAIL_REGEX,
                message: '올바른 이메일 주소가 아닙니다.',
              },
            })}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor='password'>비밀번호</S.Label>
          <Input
            id='password'
            passwordType
            placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
            {...register('password', {
              required: '비밀번호를 입력해 주세요.',
              pattern: {
                value: PASSWORD_REGEX,
                message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
              },
            })}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor='passwordConfirm'>비밀번호 확인</S.Label>
          <Input
            id='passwordConfirm'
            passwordType
            placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
            {...register('passwordConfirm', {
              required: '비밀번호 확인을 입력해 주세요.',
              validate: (value) =>
                value === password || '비밀번호가 일치하지 않아요.',
            })}
          />
        </S.InputWrapper>
        <S.Button type='submit'>회원가입</S.Button>
      </S.Form>
    </FormProvider>
  );
}

export default SignupForm;
