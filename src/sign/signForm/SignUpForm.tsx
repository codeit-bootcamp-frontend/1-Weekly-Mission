import { useForm } from 'react-hook-form';
import { axiosInstance } from '@/src/sharing/util';
import SignInput from '../signInPut/SignInput';
SignInput;
import style from './SignForm.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

interface IFormInput {
  [key: string]: string;
}

interface ResultType {
  data: {
    data: {
      accessToken: string;
    };
  };
}

const cx = classNames.bind(style);

export default function SignForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
    getValues,
    trigger,
  } = useForm<IFormInput>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
  });
  const router = useRouter();
  const password = watch('password');

  const onSubmit = async (data: IFormInput) => {
    try {
      const {
        data: {
          data: { accessToken },
        },
      } = await axiosInstance.post<IFormInput, ResultType>(`sign-up`, data);
      localStorage.setItem('accessToken', accessToken);
      router.push('/folder');
    } catch (err) {
      setError('email', { type: 'pattern', message: '이메일을 확인해주세요' });
      setError('password', {
        type: 'pattern',
        message: '비밀번호를 확인해주세요',
      });
    }
  };

  console.log('con', errors?.email);

  const onBlur = async () => {
    const isValid = await trigger('email');
    if (isValid) {
      const email = getValues('email');
      const data = { email };
      try {
        const result = await axiosInstance.post('check-email', data);
      } catch (err) {
        setError('email', {
          type: 'custom',
          message: '이미 사용중인 이메일입니다.',
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cx('box')}>
        <div>
          <SignInput
            label='이메일'
            name='email'
            register={register}
            placeholder='이메일을 입력해 주세요'
            rules={{
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: '옳바른 이메일 주소가 아닙니다.',
              },
              onBlur: onBlur,
            }}
            type='text'
          />
          <p className={cx('error')}>{errors?.email?.message}</p>
        </div>
        <div>
          <SignInput
            label='비밀번호'
            name='password'
            register={register}
            placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
            rules={{
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
              },
            }}
            type='password'
          />
          <p className={cx('error')}>{errors?.password?.message}</p>
        </div>
        <div>
          <SignInput
            label='비밀번호 확인'
            name='passwordCheck'
            register={register}
            placeholder='비밀번호와 일치하는 값을 입력해 주세요'
            rules={{
              validate: (value: string) => {
                return value === password || '비밀번호가 일치하지 않아요.';
              },
            }}
            type='password'
          />
          <p className={cx('error')}>{errors?.passwordCheck?.message}</p>
        </div>
      </div>
      <button className={cx('button')} type='submit'>
        로그인
      </button>
    </form>
  );
}
