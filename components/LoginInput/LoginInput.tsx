import { useState } from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import inputType from './inputType';
import * as Style from './LoginInput.style';
import { theme } from '@/styles/theme';

export default function LoginInput({ type }) {
  const { label, id, placeholder, message, Regex, confirm, src } =
    inputType(type);
  const {
    register,
    formState: { errors },
    trigger,
    clearErrors,
  } = useFormContext();
  const [color, setColor] = useState<string | null>(null);
  const [value, setValue] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [srcToggle, setSrcToggle] = useState(src?.eyeOff);
  const togglePasswordVisible = () => {
    setPasswordShown((prevPasswordShown) => !prevPasswordShown);
    setSrcToggle((prevSrcToggle) =>
      prevSrcToggle === src.eyeOff ? src.eyeOn : src.eyeOff
    );
  };

  const handleInputFocus = () => {
    setColor(`${theme.color.purpleblue}`);
  };

  const handleInputBlur = async () => {
    if (value.length === 0) {
      setColor(`${theme.color.linkbraryred}`);
      clearErrors(id);
    } else {
      const valid = await trigger(id);
      if (valid) {
        setColor(`${theme.color.purpleblue}`);
      } else {
        setColor(`${theme.color.linkbraryred}`);
      }
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Style.Container>
      <label htmlFor={id}>{label}</label>
      <Style.InputBox color={color}>
        <Style.Input
          id={id}
          type={id === 'password' ? (passwordShown ? 'text' : 'password') : id}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          value={value}
          {...register(id, {
            pattern: {
              value: Regex,
              message: message,
            },

            onBlur: handleInputBlur,
            onChange: handleInputChange,
          })}
        />
        {src && (
          <Image
            className="eyeImage"
            src={srcToggle}
            alt="보기"
            width={16}
            height={16}
            onClick={togglePasswordVisible}
          />
        )}
      </Style.InputBox>
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => <span>{message}</span>}
      />
    </Style.Container>
  );
}
