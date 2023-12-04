import { useState } from 'react';
import styles from './PasswordInput.module.scss';
import { ReactComponent as EyeOff } from './eye-off.svg';
import { ReactComponent as EyeOn } from './eye-on.svg';
import { ChangeEventHandler } from 'react';
import classNames from 'classnames';
const cx = classNames.bind(styles);

type PasswordInputProps = {
  type: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
  isPasswordSame: boolean;
};

export const PasswordInput = ({
  type,
  value,
  onChange,
  isPasswordSame,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? 'password' : 'text');
  };

  const isError = value && !isPasswordSame;
  let classType = !isError ? 'input-default' : 'input-error';
  console.log(classType);
  return (
    <>
      <input
        className={cx('input-default')}
        placeholder=""
        value={value}
        onChange={onChange}
        type={inputType}
      />
      <button
        className="eye-button"
        type="button"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <EyeOn /> : <EyeOff />}
      </button>
    </>
  );
};
