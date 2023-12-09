import styled from 'styled-components';
import Image from 'next/image';
import { useState, FocusEvent } from 'react';
import eyeOffIcon from '@/public/assets/images/eye-off.svg';
import eyeOnIcon from '@/public/assets/images/eye-on.svg';

interface Props {
  passwordMode: boolean;
  placeholder: string;
  handleInputBlur?: (event: FocusEvent<HTMLInputElement>) => string;
  register?: any;
  error?: any;
}

export default function Input({ passwordMode, placeholder, register, error }: Props) {
  const [password, setPassword] = useState(true);

  function handlePwToggle() {
    setPassword((prev) => !prev);
  }

  return (
    <Container>
      <InputWrapper placeholder={placeholder} {...(passwordMode && password && { type: 'password' })} {...(error && { className: 'error' })} {...register} />
      {passwordMode &&
        (password ? (
          <EyeIcon alt="비밀번호 보이기 아이콘" src={eyeOffIcon} width={16} height={16} onClick={handlePwToggle} />
        ) : (
          <EyeIcon alt="비밀번호 가리기 아이콘" src={eyeOnIcon} width={16} height={16} onClick={handlePwToggle} />
        ))}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputWrapper = styled.input`
  width: 100%;
  border: 1px solid #ccd5e3;

  padding: 18px 15px;
  border-radius: 8px;
  outline: none;

  font-size: 16px;

  &:focus {
    border: 1px solid #6d6afe;
  }
  &.error {
    border: 1px solid var(--red);
  }
`;

const EyeIcon = styled(Image)`
  position: absolute;
  top: 19px;
  right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: var(--linkbrary-red, #ff5b56);
`;
