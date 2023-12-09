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
  } = useForm<IFormInput>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();

  const onSubmit = async (data: IFormInput) => {
    try {
      const {
        data: {
          data: { accessToken },
        },
      } = await axiosInstance.post<IFormInput, ResultType>(`sign-in`, data);
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
            placeholder='비밀번호를 입력해 주세요'
            rules={{
              required: '비밀번호를 입력해주세요.',
            }}
            type='password'
          />
          <p className={cx('error')}>{errors?.password?.message}</p>
        </div>
      </div>
      <button className={cx('button')} type='submit'>
        로그인
      </button>
    </form>
  );
}
