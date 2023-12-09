import { useState } from 'react';
import { RefCallBack } from 'react-hook-form';
import classNames from 'classnames/bind';
import Input, { InputProps } from '../ui-input/Input';
import { IconEyeON, IconEyeOff } from '@/public/svgs';
import styles from './InputPassword.module.css';

const cx = classNames.bind(styles);

interface InputPasswordProps extends InputProps {
  ref: RefCallBack;
}

const InputPassword = ({
  ref,
  placeholder,
  hasError,
  errorMessage,
  onChange,
  onBlur,
}: InputPasswordProps) => {
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const EyeIcon = () => {
    return isVisible ? (
      <IconEyeON className={cx('icon')} onClick={handleToggle} />
    ) : (
      <IconEyeOff className={cx('icon')} onClick={handleToggle} />
    );
  };

  return (
    <div className={cx('container')}>
      <Input
        ref={ref}
        placeholder={placeholder}
        hasError={hasError}
        errorMessage={errorMessage}
        onChange={onChange}
        onBlur={onBlur}
      />
      {EyeIcon()}
    </div>
  );
};

export default InputPassword;
