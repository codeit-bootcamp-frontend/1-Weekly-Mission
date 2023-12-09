import { FocusEvent, useState } from 'react';
import * as S from './SigninForm.style';
import Input from '@components/Input';

function SigninForm() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (!email) {
      setEmailError('이메일을 입력해 주세요.');
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('올바른 이메일 주소가 아닙니다.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = (e: FocusEvent<HTMLInputElement>) => {
    const password = e.target.value;
    if (!password) {
      setPasswordError('비밀번호를 입력해 주세요.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <>
      <S.Form>
        <S.InputWrapper>
          <S.Label htmlFor='email'>이메일</S.Label>
          <Input
            id='email'
            placeholder='이메일을 입력해 주세요.'
            onBlur={handleEmailBlur}
            errorMessage={emailError}
            hasError={!!emailError}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor='password'>비밀번호</S.Label>
          <Input
            id='password'
            passwordType
            placeholder='비밀번호를 입력해 주세요.'
            onBlur={handlePasswordBlur}
            errorMessage={passwordError}
            hasError={!!passwordError}
          />
        </S.InputWrapper>
        <S.Button type='submit'>로그인</S.Button>
      </S.Form>
    </>
  );
}

export default SigninForm;
