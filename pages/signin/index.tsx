import { SignLayout } from '@/src/page-layout/SignLayout/SignLayout';
import Logo from '@/public/images/linkbrary.svg';
import styles from '@/src/page-layout/SignLayout/SignLayout.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { SnsLogin } from '@/src/sign/ui-sns/SnsLogin';
import { FormInput } from '@/src/sign/ui-form-input/FormInput';
import { FormButton } from '@/src/sign/ui-form-button/FormButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

interface FormInput {
  email: string;
  password: string;
}

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const router = useRouter();

  const onBlur = () => {
    // validate? react-hook-form에서 포커스아웃했을 때 어떻게 유효성 검사해야 할까요?
  };

  const onSubmit = handleSubmit((data: FormInput) => {
    console.log(data);
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
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 6,
                message: '비밀번호를 6자 이상 입력해주세요.',
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*])/,
                message: '특수 기호를 넣어주세요.',
              },
            })}
            error={errors.password}
          />
          <button>
            <FormButton>로그인</FormButton>
          </button>
        </form>
      }
      sns={<SnsLogin />}
    />
  );
};

export default Signin;
