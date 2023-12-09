import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import Input from '@/src/component/sign-in/ui-input/Input';
import InputPassword from '@/src/component/sign-in/ui-input-password/InputPassword';
import Cta from '@/src/component/common/ui-cta/Cta';
import styles from './SignInForm.module.css';

const cx = classNames.bind(styles);

export interface IAuthForm {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { control, handleSubmit } = useForm<IAuthForm>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<IAuthForm> = (data) => console.log(data);
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
              message: '이메일을 확인해주세요',
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
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
              message: '비밀번호를 확인해주세요',
            },
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
