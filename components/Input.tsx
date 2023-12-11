import Image from 'next/image';
import { ChangeEvent, useState, MouseEvent, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ErrorMsg } from '@/constant/constants';
import { verifyEmail, verifyPassword } from '../utils/validationCheck';
import { useRouter } from 'next/router';

interface InputProps {
  inputType: string;
  emailChange: React.Dispatch<React.SetStateAction<string>>;
  passwordChange: React.Dispatch<React.SetStateAction<string>>;
  signError: number;
  setPasswordCheck: React.Dispatch<React.SetStateAction<string>>;
  passwordCheck: string;
  emailErrorStatus: number;
  setEmailErrorStatus: React.Dispatch<React.SetStateAction<number>>;
  pwErrorStatus: number;
  setPwErrorStatus: React.Dispatch<React.SetStateAction<number>>;
}

function Input({
  inputType,
  emailChange,
  passwordChange,
  signError,
  setPasswordCheck,
  passwordCheck,
  emailErrorStatus,
  setEmailErrorStatus,
  pwErrorStatus,
  setPwErrorStatus,
}: InputProps) {
  const router = useRouter();
  const url = router.pathname;
  const [isError, setIsError] = useState(false);
  const [isErrorMsg, setIsErrorMsg] = useState('');
  const [isVisible, setIsVisible] = useState(url === '/signup' ? true : false);
  const [value, setValue] = useState('');

  const handleVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setValue(e.target.value);
    if (inputType === 'email') {
      emailChange(e.target.value);
    } else if (url === '/signup' && inputType === 'password') {
      setPasswordCheck(e.target.value);
    } else {
      passwordChange(e.target.value);
    }
  };

  function handleEmail() {
    setEmailErrorStatus(1);
    //빈칸일때
    if (value === '') {
      setIsError(true);
      setIsErrorMsg(ErrorMsg.emptyEmail);
    }
    // 이메일 형식 안맞을 때
    else if (value && verifyEmail(value) !== true) {
      setIsError(true);
      setEmailErrorStatus(3);
      setIsErrorMsg(ErrorMsg.inValidEmail);
    } else {
      setIsError(false);
    }
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    if (value === '') {
      setIsError(true);
      setPwErrorStatus(3);
      setIsErrorMsg(ErrorMsg.emptyPassword);
    } else if (url === '/signup' && verifyPassword(value) !== true) {
      setIsError(true);
      setPwErrorStatus(3);
      setIsErrorMsg(ErrorMsg.inValidPassword);
    } else if (url === '/signup') {
      if (passwordCheck !== e.target.value) {
        setIsError(true);
        setPwErrorStatus(3);
        setIsErrorMsg(ErrorMsg.notEqualPassword);
      } else if (value) {
        setIsError(false);
        setPwErrorStatus(0);
      }
    }
  }

  useEffect(() => {
    //signup 오류
    if (emailErrorStatus === 409) {
      setIsError(true);
      if (inputType === 'email') setIsErrorMsg(ErrorMsg.duplicatedEmail);
      if (inputType.includes('password')) setIsError(false);
      return;
    }
  }, [emailErrorStatus]);

  useEffect(() => {
    //signin 오류
    if (signError === 400) {
      setIsError(true);
      if (url === '/signup') {
        if (inputType.includes('email')) setIsError(false);
        if (inputType.includes('password'))
          setIsErrorMsg(ErrorMsg.wrongPassword);
      } else {
        setIsError(true);
        if (inputType === 'email') setIsErrorMsg(ErrorMsg.wrongEmail);
        if (inputType.includes('password'))
          setIsErrorMsg(ErrorMsg.wrongPassword);
      }
    }
  }, [signError]);

  return (
    <div>
      <StyledDiv>
        <StyledInput
          placeholder={
            inputType.includes('email')
              ? ErrorMsg.emptyEmail
              : ErrorMsg.emptyPassword
          }
          isError={isError}
          type={
            inputType === 'email' ? 'text' : isVisible ? 'text' : 'password'
          }
          value={value}
          onChange={handleChange}
          onBlur={inputType === 'email' ? handleEmail : handlePassword}
        />
        {inputType.includes('password') ? (
          <StyledButton onClick={handleVisibility}>
            <Image
              src={isVisible ? '/eye-on.svg' : '/eye-off.svg'}
              width={16}
              height={16}
              alt="비밀번호 숨기기 버튼"
            />
          </StyledButton>
        ) : (
          <></>
        )}
      </StyledDiv>
      {isError ? <ErrorText>{isErrorMsg}</ErrorText> : <></>}
    </div>
  );
}

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
`;

const StyledInput = styled.input<{ isError: boolean }>`
  display: flex;
  width: 100%;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #373740;
  border: 1px solid #ccd5e3;
  outline: none;
  &:focus {
    border-color: #6d6afe;
  }

  ${({ isError }: any) =>
    isError &&
    css`
      border-color: #ff5b56;

      &:focus {
        border-color: #ff5b56;
      }
    `}
`;

const ErrorText = styled.h4`
  color: #ff5b56;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;
`;

const StyledButton = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  right: 15px;
  background-color: #fff;
`;

export default Input;
