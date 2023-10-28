import { useState } from 'react';
import { isEmail, isPassword } from '../utils/validation';

function useInputError(values, signType, signTarget) {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleBlurMethod = {
    in: {
      email: () => {
        if (values.email === '') {
          setErrorText('이메일을 입력해주세요');
        } else if (!isEmail(values.email)) {
          setErrorText('올바른 이메일 주소가 아닙니다');
        } else {
          setError(false);
        }
      },
      password: () => {
        if (values.password === '') {
          setErrorText('비밀번호를 입력해주세요');
        } else {
          setError(false);
        }
      },
    },
    up: {
      email: () => {
        if (values.email === '') {
          setErrorText('이메일을 입력해주세요');
        } else if (!isEmail(values.email)) {
          setErrorText('올바른 이메일 주소가 아닙니다');
        } else if (values.email === 'test@codeit.com') {
          setErrorText('이미 사용 중인 이메일입니다');
        } else {
          setError(false);
        }
      },
      password: () => {
        if (values.password === '') {
          setErrorText('비밀번호를 입력해주세요');
        } else if (!isPassword(values.password)) {
          setErrorText('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
        } else {
          setError(false);
        }
      },
      passwordCheck: () => {
        if (values.password !== values.passwordCheck) {
          setErrorText('비밀번호가 일치하지 않아요');
        } else {
          setError(false);
        }
      },
    },
  };

  const handleBlur = () => {
    setError(true);
    handleBlurMethod[signType][signTarget]();
  };

  const handleFocus = () => {
    if (error) {
      setError(false);
    }
  };

  return [error, errorText, handleBlur, handleFocus];
}

export default useInputError;
