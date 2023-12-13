import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import Input from '@/src/component/sign-in/ui-input/Input';
import InputPassword from '@/src/component/sign-in/ui-input-password/InputPassword';
import Cta from '@/src/component/common/ui-cta/Cta';
import styles from './SignInForm.module.css';
import axios from '@/src/utils/axios';
import { SignInRawData } from '@/types/type';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export interface IAuthForm {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { control, handleSubmit, setError } = useForm<IAuthForm>({
    mode: 'onBlur',
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<IAuthForm> = async (value) => {
    try {
      const response = await axios.post<SignInRawData>('/api/sign-in', value);
      const accessToken = response?.data?.accessToken ?? null;
      if (accessToken !== null) {
        localStorage.setItem('accessToken', accessToken);
      }
      router.push('/folder');
    } catch (error) {
      [
        {
          type: '400',
          name: 'email' as const,
          message: '이메일을 확인해 주세요',
        },
        {
          type: '400',
          name: 'password' as const,
          message: '비밀번호를 확인해 주세요',
        },
      ].forEach(({ name, type, message }) => setError(name, { type, message }));
    }
  };

  return (
    <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className={cx('label')}>이메일</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: '이메일을 입력해주세요',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,}$/i,
              message: '올바른 이메일 주소가 아닙니다.',
            },
          }}
          render={({
            field: { ref, onChange, onBlur },
            fieldState: { error },
          }) => (
            <Input
              ref={ref}
              placeholder="이메일을 입력해 주세요"
              hasError={error ? true : false}
              errorMessage={error?.message}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </div>
      <div>
        <label className={cx('label')}>비밀번호</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: '비밀번호를 입력해주세요',
          }}
          render={({
            field: { ref, onChange, onBlur },
            fieldState: { error },
          }) => (
            <InputPassword
              ref={ref}
              placeholder="비밀번호를 입력해 주세요"
              hasError={error ? true : false}
              errorMessage={error?.message}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </div>
      <button type="submit">
        <Cta>로그인</Cta>
      </button>
    </form>
  );
}
