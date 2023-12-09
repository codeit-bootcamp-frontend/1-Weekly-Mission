import apiRequest from '@api/apiRequest';
import * as S from './SigninForm.style';
import Input from '@components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IFormInput {
  email: string;
  password: string;
}

function SigninForm() {
  const { ...methods } = useForm<IFormInput>({ mode: 'onBlur' });
  const { register, handleSubmit, setError } = methods;
  const router = useRouter();
  const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const submitForm = async (data: IFormInput) => {
    try {
      const response = await apiRequest({
        url: 'sign-in',
        method: 'POST',
        data,
      });

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        router.push('/folder');
      }
    } catch (error) {
      setError('email', { message: '이메일을 확인해주세요.' });
      setError('password', { message: '비밀번호를 확인해주세요.' });
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
            placeholder='비밀번호를 입력해 주세요.'
            {...register('password', { required: '비밀번호를 입력해 주세요.' })}
          />
        </S.InputWrapper>
        <S.Button type='submit'>로그인</S.Button>
      </S.Form>
    </FormProvider>
  );
}

export default SigninForm;
