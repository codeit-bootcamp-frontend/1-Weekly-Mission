import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from '@/src/sign/ui-form-input/FormInput.module.scss';
import Image from 'next/image';

// img src에 넣는 방식 사용
const eyeOff = 'images/eye-off.svg';
const eyeOn = 'images/eye-on.svg';

type FormInputProps = {
  type: HTMLInputAttribute;
  label: ReactNode;
  error: string | undefined | FieldError;
  placeholder: string;
  isEyeOn?: boolean;
  onChangeEyes?(): void;
};

const cx = classNames.bind(styles);

export const FormInput = ({ type, label, error, placeholder, isEyeOn, onChangeEyes }: FormInputProps) => {
  return (
    <div className={cx('sign-input-box')}>
      <label className={cx('sign-input-label')}>{label}</label>
      <div className={cx('sign-input-container')}>
        <input id="email" className={cx('sign-input', { error: error })} type={type} placeholder={placeholder} />
        {label === '비밀번호' ? (
          <button className={cx('eye-container')} onClick={onChangeEyes}>
            <Image src={isEyeOn ? eyeOn : eyeOff} alt="패스워드 보기 여부" width={16} height={16} />
          </button>
        ) : undefined}
      </div>
      <p id="email-error-message" className={cx('error-message')}>
        {error?.message}
      </p>
    </div>
  );
};
