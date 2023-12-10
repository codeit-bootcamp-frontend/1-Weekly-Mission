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
  passwordConfirm: string;
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
    getValues,
  } = useForm<FormInput>({ mode: 'onBlur' });
  const router = useRouter();
  const [isEyeOn, setIsEyeOn] = useState(false);

  const handleChangeEyes = () => {
    setIsEyeOn((prev) => !prev);
  };

  // 작동이 안 됩니다...
  const onSubmit = handleSubmit(async (data: FormInput) => {
    try {
      const {
        data: {
          data: { accessToken },
        },
      } = await axiosInstance.post<FormInput, ResultType>(`sign-up`, { email: data.email, password: data.password });
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
          이미 회원이신가요? <Link href="/signin">로그인하기</Link>
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
            error={errors.email}
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
          <FormInput
            label="비밀번호 확인"
            type={isEyeOn ? 'text' : 'password'}
            placeholder="비밀번호와 일치한 값을 입력해주세요"
            {...register('passwordConfirm', {
              required: '비밀번호와 일치한 값을 입력해주세요.',
              validate: {
                check: (val) => {
                  if (getValues('password') !== val) {
                    return '비밀번호가 일치하지 않습니다.';
                  }
                },
              },
            })}
            error={errors.passwordConfirm}
            isEyeOn={isEyeOn}
            onChangeEyes={handleChangeEyes}
          />
          <button type="submit">
            <FormButton>회원가입</FormButton>
          </button>
        </form>
      }
      sns={<SnsLogin />}
    />
  );
};

export default Signin;
