import { forwardRef } from 'react';
import { Noop } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Input.module.css';

let cx = classNames.bind(styles);

export interface InputProps {
  placeholder: string;
  hasError?: boolean;
  errorMessage?: string | undefined;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, hasError, errorMessage, onChange, onBlur }, ref) => {
    return (
      <div className={cx('container')}>
        <input
          className={cx('input', { error: hasError })}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {hasError && <p className={cx('error')}>{errorMessage}</p>}
      </div>
    );
  }
);

export default Input;
