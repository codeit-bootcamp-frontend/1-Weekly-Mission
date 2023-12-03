import * as S from './Input.style';
import { FocusEventHandler, useState } from 'react';

interface Props {
  id: string;
  passwordType?: boolean;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  errorMessage?: string;
  hasError?: boolean;
}

export default function Input({
  id,
  passwordType = false,
  placeholder,
  onBlur,
  errorMessage,
  hasError = false,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Input
          id={id}
          $error={hasError}
          $passwordType={passwordType}
          type={passwordType && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          onBlur={onBlur}
        />
        {passwordType && (
          <S.Button
            src={`/assets/images/eye-${showPassword ? 'on' : 'off'}.svg`}
            alt='비밀번호 표시 전환'
            onClick={togglePasswordVisibility}
          />
        )}
      </S.Wrapper>
      {hasError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
