import styled from 'styled-components';
import Input from '../Input';
import { ErrorMsg } from '@/constant/constants';
import { useState, KeyboardEvent, MouseEvent } from 'react';
import axios from '@/pages/api/axios';
import { useRouter } from 'next/router';
import SignButton from '../Button';

interface SigninProps {
  error?: {
    name: string;
    message: string;
    status: number;
  };
  data?: {
    accessToken: string;
    refreshToen: string;
  };
}

export default function SigninMain() {
  const router = useRouter();
  const [signinToken, setSigninToken] = useState<SigninProps>();
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [signError, setSignError] = useState(0);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailErrorStatus, setEmailErrorStatus] = useState(1);

  async function handleEmailSubmit(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setSignError(0);
    const res: any = await axios.post('/check-email', {
      email: signinEmail,
    });
    if (res.status === 200) {
      console.log('성공');
      alert('사용 가능한 이메일 입니다.');
      setEmailErrorStatus(0);
    } else if (res === 400) {
      console.log('올바른 이메일 아님');
      setEmailErrorStatus(res);
    } else {
      console.log('이메일 중보');
      console.log(res);
      setEmailErrorStatus(res);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSignError(0);
    if (emailErrorStatus === 409 || emailErrorStatus === 400) {
      alert('이메일을 확인해 주세요.');
      setEmailErrorStatus(400);
      return;
    }
    if (router.pathname.includes('signin')) {
      console.log('1');
      const res: any = await axios.post('/sign-in', {
        email: signinEmail,
        password: signinPassword,
      });
      if (res !== 400) {
        const signinData = res.data.data;
        setSigninToken(signinData);
        setSignError(0);
        router.push('/folder');
      } else {
        setSignError(res);
      }
    } else if (router.pathname.includes('signup')) {
      console.log('2');
      const res: any = await axios.post('/sign-up', {
        email: signinEmail,
        password: signinPassword,
      });
      if (emailErrorStatus === 0 && res !== 400) {
        console.log(res);
        console.log(emailErrorStatus);
        const signinData = res.data.data;
        setSigninToken(signinData);
        setSignError(0);
        router.push('/folder');
      } else {
        setSignError(res);
      }
    }
  }

  const handleOnKeyPress = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} onKeyDown={handleOnKeyPress}>
        <SigninMainWrapper>
          <InputContainer>
            <InputDiv>이메일</InputDiv>
            <Input
              inputType={'email'}
              emailChange={setSigninEmail}
              passwordChange={setSigninPassword}
              signError={signError}
              setPasswordCheck={setPasswordCheck}
              passwordCheck={passwordCheck}
              emailErrorStatus={emailErrorStatus}
              setEmailErrorStatus={setEmailErrorStatus}
            />
            {router.pathname.includes('signup') ? (
              <EmailButton onClick={handleEmailSubmit}>
                이메일 중복 확인
              </EmailButton>
            ) : (
              <></>
            )}
          </InputContainer>
          <InputContainer>
            <InputDiv>비밀번호</InputDiv>
            <Input
              inputType={'password'}
              emailChange={setSigninEmail}
              passwordChange={setSigninPassword}
              signError={signError}
              setPasswordCheck={setPasswordCheck}
              passwordCheck={passwordCheck}
              emailErrorStatus={emailErrorStatus}
              setEmailErrorStatus={setEmailErrorStatus}
            />
          </InputContainer>
          {router.pathname.includes('signup') ? (
            <InputContainer>
              <InputDiv>비밀번호 확인</InputDiv>
              <Input
                inputType={'passwordCheck'}
                emailChange={setSigninEmail}
                passwordChange={setSigninPassword}
                signError={signError}
                setPasswordCheck={setPasswordCheck}
                passwordCheck={passwordCheck}
                emailErrorStatus={emailErrorStatus}
                setEmailErrorStatus={setEmailErrorStatus}
              />
            </InputContainer>
          ) : (
            <></>
          )}
        </SigninMainWrapper>
        <SignButton
          check={emailErrorStatus}
          text={router.pathname.includes('signin') ? '로그인' : '회원가입'}
        />
      </form>
    </>
  );
}

const SigninMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputDiv = styled.div`
  font-size: 14px;
`;

const EmailButton = styled.div`
  width: 100%;
  margin-top: 30px;
  font-size: 18px;
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  padding: 16px 20px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
`;
