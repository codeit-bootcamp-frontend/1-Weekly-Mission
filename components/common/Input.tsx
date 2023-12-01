import styled from 'styled-components';
import eyeOffIcon from '@/public/assets/images/eye-off.svg';
import eyeOnIcon from '@/public/assets/images/eye-on.svg';
import Image from 'next/image';
import { useState, MouseEvent } from 'react';

interface Props {
  visibleMode: boolean;
  errorMessage: string;
  placeholder: string;
}

export default function Input({ visibleMode, errorMessage = '', placeholder }: Props) {
  const [password, setPassword] = useState(true);

  function isPassword(event: MouseEvent) {
    setPassword((prev) => !prev);
  }

  return (
    <>
      <Container>
        <InputWrapper placeholder={placeholder} type={password ? 'password' : ''} className={errorMessage ? 'error' : ''} />
        {visibleMode &&
          (password ? (
            <EyeIcon alt="비밀번호 보이기 아이콘" src={eyeOffIcon} width={16} height={16} onClick={isPassword} />
          ) : (
            <EyeIcon alt="비밀번호 가리기 아이콘" src={eyeOnIcon} width={16} height={16} onClick={isPassword} />
          ))}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    </>
  );
}

const Container = styled.form`
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
  &.error .errorMessage {
    display: block;
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
