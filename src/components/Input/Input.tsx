import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import * as S from './Input.style';

interface Props {
  id: string;
  passwordType?: boolean;
  placeholder?: string;
}

const Input = ({ id, passwordType = false, placeholder }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Input
          id={id}
          $error={!!errors[id]}
          $passwordType={passwordType}
          type={passwordType && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          {...register(id)}
        />
        {passwordType ? (
          <S.Button
            src={`/assets/images/eye-${showPassword ? 'on' : 'off'}.svg`}
            alt='비밀번호 표시 전환'
            onClick={handleTogglePasswordVisibility}
          />
        ) : null}
      </S.Wrapper>
      {errors[id] ? (
        <S.ErrorMessage>{String(errors[id]?.message)}</S.ErrorMessage>
      ) : null}
    </S.Container>
  );
};

export default Input;
