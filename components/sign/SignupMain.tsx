import styled from 'styled-components';
import Input from '../Input';
import { ErrorMsg } from '@/constant/constants';
import { useState } from 'react';
import axios from '@/pages/api/axios';
import { useRouter } from 'next/router';
import SignButton from '../Button';

export interface SigninProps {
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res: any = await axios.post('/sign-in', {
      email: signinEmail,
      password: signinPassword,
    });
    if (res !== 400) {
      const signinData = res.data.data;
      setSigninToken(signinData);
      setSignError(0);
      // router.push('/folderPage');
    } else {
      setSignError(res);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <SigninMainWrapper>
          <InputContainer>
            <InputDiv>이메일</InputDiv>
            <Input
              inputType={'email'}
              text={ErrorMsg.emptyEmail}
              emailChange={setSigninEmail}
              passwordChange={setSigninPassword}
              signError={signError}
            />
          </InputContainer>
          <InputContainer>
            <InputDiv>비밀번호</InputDiv>
            <Input
              inputType={'password'}
              text={ErrorMsg.emptyPassword}
              emailChange={setSigninEmail}
              passwordChange={setSigninPassword}
              signError={signError}
              pageCheck={'signup'}
            />
          </InputContainer>
          <InputContainer>
            <InputDiv>비밀번호 확인</InputDiv>
            <Input
              inputType={'passwordCheck'}
              text={ErrorMsg.emptyPassword}
              emailChange={setSigninEmail}
              passwordChange={setSigninPassword}
              signError={signError}
              pageCheck={'signup'}
            />
          </InputContainer>
        </SigninMainWrapper>
        <SignButton text={'로그인'} />
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

const Button = styled.button`
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
