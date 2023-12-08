import { SignLayout } from '@/src/page-layout/SignLayout/SignLayout';
import Logo from '@/public/images/linkbrary.svg';
import styles from '@/src/page-layout/SignLayout/SignLayout.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { SnsLogin } from '@/src/sign/ui-sns/SnsLogin';
import { FormInput } from '@/src/sign/ui-form-input/FormInput';
import { FormButton } from '@/src/sign/ui-form-button/FormButton';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(styles);

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="이메일"
            type="text"
            {...register('email', {
              required: '이메일은 필수 입력 항목입니다.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: '유효한 이메일 주소를 입력하세요.',
              },
            })}
          />
          {errors.email && <p>{errors.email.message as string}</p>}
          <FormInput
            label="비밀번호"
            type="password"
            {...register('password', {
              required: '비밀번호는 필수 입력 항목입니다.',
              minLength: {
                value: 6,
                message: '비밀번호는 최소 6자 이상이어야 합니다.',
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*])/,
                message: '유효한 이메일 주소를 입력하세요.',
              },
            })}
          />
          {errors.password && <p>{errors.password.message as string}</p>}
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
