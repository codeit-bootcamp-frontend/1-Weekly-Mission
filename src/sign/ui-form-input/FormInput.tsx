import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from '@/src/sign/ui-form-input/FormInput.module.scss';

type FormInputProps = {
  type: HTMLInputAttribute;
  label: ReactNode;
  error: string | undefined | FieldError;
  placeholder: string;
};

const cx = classNames.bind(styles);

export const FormInput = ({ type, label, error, placeholder }: FormInputProps) => {
  return (
    <div className={cx('sign-input-box')}>
      <label className={cx('sign-input-label')}>{label}</label>
      <input id="email" className={cx('sign-input', { error: error })} type={type} placeholder={placeholder} />
      <p id="email-error-message" className={cx('error-message')}>
        {error?.message}
      </p>
    </div>
  );
};
