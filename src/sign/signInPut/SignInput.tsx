import React, { useEffect, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './SignInput.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const eyeOff = 'images/eye-off.svg';
const eyeOn = 'images/eye-on.svg';

const cx = classNames.bind(styles);

interface FormInputProps<TFormValues extends FieldValues> {
  label: string;
  name: string;
  register: UseFormRegister<TFormValues>;
  rules: any;
  type?: string;
  placeholder: string;
}

const SignInput = ({
  label,
  name,
  register,
  rules,
  type = 'text',
  placeholder,
}: FormInputProps<FieldValues>) => {
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();
  const [eye, setEye] = useState(false);

  const handleEyeClick = () => {
    setEye((prev) => !prev);
  };

  return (
    <div className={cx('container')}>
      <label className={cx('label')} htmlFor={name}>
        {label}
      </label>
      <div className={cx('input-box')}>
        <input
          className={cx('input')}
          placeholder={placeholder}
          type={eye ? 'text' : type}
          {...register(name, { ...rules })}
          autoComplete={type === 'password' ? 'off' : 'on'}
        />
        {type === 'password' && (
          <button type='button' onClick={handleEyeClick}>
            <Image
              src={eye ? eyeOn : eyeOff}
              alt='보이기'
              width={16}
              height={16}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default SignInput;
