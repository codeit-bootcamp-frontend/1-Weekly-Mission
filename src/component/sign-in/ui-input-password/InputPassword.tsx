import { RefCallBack } from 'react-hook-form';
import classNames from 'classnames/bind';
import Input, { InputProps } from '../ui-input/Input';
import useToggle from '@/src/hooks/useToggle';
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
  const { isOn, toggle } = useToggle();
  const type = isOn ? 'text' : 'password';

  return (
    <div className={cx('container')}>
      <Input
        ref={ref}
        type={type}
        placeholder={placeholder}
        hasError={hasError}
        errorMessage={errorMessage}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button className={cx('icon')} onClick={toggle}>
        {isOn ? (
          <IconEyeON alt="비밀번호 보이기 버튼" />
        ) : (
          <IconEyeOff alt="비밀번호 숨기기 버튼" />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
