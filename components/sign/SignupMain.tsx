import styled from 'styled-components';
import Input from '../Input';
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

export default function SignMain() {
  const router = useRouter();
  const [signinToken, setSigninToken] = useState<SigninProps>();
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [signError, setSignError] = useState(0);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailErrorStatus, setEmailErrorStatus] = useState(1);
  const [pwErrorStatus, setPwErrorStatus] = useState(1);

  async function handleEmailSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSignError(0);
    //이메일 오류 있을 경우
    if (emailErrorStatus === 3) return;
    const res: any = await axios.post('/check-email', {
      email: signinEmail,
    });
    if (res.status === 200) {
      alert('사용 가능한 이메일 입니다.');
      setEmailErrorStatus(0);
    } else if (res === 400) {
      setEmailErrorStatus(res);
    } else {
      setEmailErrorStatus(res);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSignError(0);
    const res: any = await axios.post('/sign-up', {
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
              pwErrorStatus={emailErrorStatus}
              setPwErrorStatus={setEmailErrorStatus}
            />
            <EmailButton
              disabled={emailErrorStatus !== 0 ? false : true}
              onClick={handleEmailSubmit}
              check={emailErrorStatus}
            >
              {emailErrorStatus !== 0
                ? '이메일 중복 확인'
                : '이메일 중복 확인 완료'}
            </EmailButton>
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
              pwErrorStatus={emailErrorStatus}
              setPwErrorStatus={setEmailErrorStatus}
            />
          </InputContainer>
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
              pwErrorStatus={pwErrorStatus}
              setPwErrorStatus={setPwErrorStatus}
            />
          </InputContainer>
        </SigninMainWrapper>
        <SignButton
          pwCheck={pwErrorStatus}
          check={emailErrorStatus}
          text={'회원가입'}
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

const EmailButton = styled.button<{ check: number }>`
  width: 100%;
  margin-top: 30px;
  font-size: 18px;
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  padding: 16px 20px;
  border-radius: 8px;
  background: ${(props) =>
    props.check !== 0
      ? 'linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)'
      : '#808080'};
  cursor: pointer;
  text-align: center;
`;
