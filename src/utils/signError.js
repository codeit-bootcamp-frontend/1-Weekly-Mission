import postCheckEmail from '../apis/user/postCheckEmail';
import { isEmail, isPassword } from './validation';

const errorText = {
  email: {
    null: '이메일을 입력해주세요',
    wrong: '올바른 이메일 주소가 아닙니다',
    dup: '이미 사용 중인 이메일입니다',
  },
  password: {
    null: '비밀번호를 입력해주세요',
    wrong: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요',
  },
  passwordCheck: {
    wrong: '비밀번호가 일치하지 않아요',
  },
};

const signinEmail = (values, setError, setErrorText) => {
  if (values.email === '') {
    setError(true);
    setErrorText(errorText['email']['null']);
  } else if (!isEmail(values.email)) {
    setError(true);
    setErrorText(errorText['email']['wrong']);
  } else {
    setError(false);
  }
};

const signinPassword = (values, setError, setErrorText) => {
  if (values.password === '') {
    setError(true);
    setErrorText(errorText['password']['null']);
  } else {
    setError(false);
  }
};

const signupEmail = async (values, setError, setErrorText) => {
  if (values.email === '') {
    setError(true);
    setErrorText(errorText['email']['null']);
  } else if (!isEmail(values.email)) {
    setError(true);
    setErrorText(errorText['email']['wrong']);
  } else if (await postCheckEmail(values.email)) {
    setError(true);
    setErrorText(errorText['email']['dup']);
  } else {
    setError(false);
  }
};

const signupPassword = (values, setError, setErrorText) => {
  if (values.password === '') {
    setError(true);
    setErrorText(errorText['password']['null']);
  } else if (!isPassword(values.password)) {
    setError(true);
    setErrorText(errorText['password']['wrong']);
  } else {
    setError(false);
  }
};

const signupPasswordCheck = (values, setError, setErrorText) => {
  if (values.password !== values.passwordCheck) {
    setError(true);
    setErrorText(errorText['passwordCheck']['wrong']);
  } else {
    setError(false);
  }
};

export {
  signinEmail,
  signinPassword,
  signupEmail,
  signupPassword,
  signupPasswordCheck,
};
