import { useState } from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import inputType from './inputType';
import { theme } from '@/styles/theme';
import eyeOff from '@/src/assets/Eye-off.svg';
import eyeOn from '@/src/assets/Eye-on.svg';
import * as Style from './LoginInput.style';

export default function LoginInput({ type }) {
  const { label, id, placeholder, message, Regex, confirm} =
    inputType(type);
  const {
    register,
    formState: { errors },
    trigger,
    clearErrors,
  } = useFormContext();
  const [color, setColor] = useState<string | null>(null);
  const [value, setValue] = useState('');
  const [eye, setEye] = useState(false);

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
          type={id.includes('password') ? (eye ? 'text' : 'password') : id}
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
        {id.includes('password') && (
          <Image
            className="eyeImage"
            src={eye ? eyeOn : eyeOff}
            alt="보기"
            width={16}
            height={16}
            onClick={() => setEye(!eye)}
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
