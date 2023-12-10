import { SignLayout } from '@/src/page-layout/SignLayout/SignLayout';
import Logo from '@/public/images/linkbrary.svg';
import Link from 'next/link';
import { SnsLogin } from '@/src/sign/ui-sns/SnsLogin';
import { FormInput } from '@/src/sign/ui-form-input/FormInput';
import { FormButton } from '@/src/sign/ui-form-button/FormButton';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { axiosInstance } from '@/src/sharing/util/axiosInstance';
import { useState } from 'react';

interface FormInput {
  email: string;
  password: string;
}

interface ResultType {
  data: {
    data: {
      accessToken: string;
    };
  };
}

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormInput>({ mode: 'onBlur' });
  const router = useRouter();
  const [isEyeOn, setIsEyeOn] = useState(false);

  const handleChangeEyes = () => {
    setIsEyeOn((prev) => !prev);
  };

  // 여기가 작동이 잘 안 되네요
  const onSubmit = handleSubmit(async (data: FormInput) => {
    try {
      const {
        data: {
          data: { accessToken },
        },
      } = await axiosInstance.post<FormInput, ResultType>(`sign-in`, { email: data.email, password: data.password });
      localStorage.setItem('accessToken', accessToken);
      router.push('/folder');
    } catch (err) {
      setError('email', { type: 'pattern', message: '이메일을 확인해주세요' });
      setError('password', {
        type: 'pattern',
        message: '비밀번호를 확인해주세요',
      });
    } finally {
      console.log('로그인 시도');
    }
  });

  return (
    <SignLayout
      logo={
        <Link href="/">
          <Logo alt="홈으로 연결된 Linkbrary 로고" width={210} height={38} />
        </Link>
      }
      message={
        <p>
          회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
        </p>
      }
      form={
        <form onSubmit={onSubmit}>
          <FormInput
            label="이메일"
            type="text"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: '이메일은 필수 입력 항목입니다.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: '올바른 이메일 주소가 아닙니다/',
              },
            })}
            error={errors.email} // error의 email 부분에 값이 있다면 true 반환, 그렇지 않으면 false 반환
          />
          <FormInput
            label="비밀번호"
            type={isEyeOn ? 'text' : 'password'}
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '비밀번호를 8자 이상 입력해주세요.',
              },
            })}
            error={errors.password}
            isEyeOn={isEyeOn}
            onChangeEyes={handleChangeEyes}
          />
          <button type="submit">
            <FormButton>로그인</FormButton>
          </button>
        </form>
      }
      sns={<SnsLogin />}
    />
  );
};

export default Signin;
