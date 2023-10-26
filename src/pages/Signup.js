import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import { useState } from 'react';
import Button from '../components/Button/Button';
import { isEmail, isPassword } from '../utils/validation';
import useInputValue from '../hooks/useInputValue';
import { requestSign } from '../apis/api';
import { Navigate, useNavigate } from 'react-router';

function Signup() {
  const navigate = useNavigate();

  const [values, handleChange] = useInputValue();

  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [passwordCheckErrorText, setPasswordCheckErrorText] = useState('');

  const handleEmailBlur = () => {
    if (values.email === '') {
      setEmailError(true);
      setEmailErrorText('이메일을 입력해주세요');
    } else if (!isEmail(values.email)) {
      setEmailError(true);
      setEmailErrorText('올바른 이메일 주소가 아닙니다');
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordBlur = () => {
    if (values.password === '') {
      setPasswordError(true);
      setPasswordErrorText('이메일을 입력해주세요');
    } else if (!isPassword(values.password)) {
      setPasswordError(true);
      setPasswordErrorText('이메일을 입력해주세요');
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordCheckBlur = () => {
    if (values.password !== values.passwordCheck) {
      setPasswordCheckError(true);
      setPasswordCheckErrorText('비밀번호가 일치하지 않아요');
    } else {
      setEmailError(false);
    }
  };

  const handleEmailFocus = () => {
    if (emailError) {
      setEmailError(false);
    }
  };

  const handlePasswordFocus = () => {
    if (passwordError) {
      setPasswordError(false);
    }
  };

  const handlePasswordCheckFocus = () => {
    if (passwordCheckError) {
      setPasswordCheckError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: `${values.email}`,
      password: `${values.password}`,
    };

    const response = await requestSign('up', data);

    if (response.ok) {
      navigate('/folder');
    } else {
      console.log('실패란다');
    }
  };

  if (localStorage.getItem('accessToken')) {
    return <Navigate to="/folder" />;
  }

  class SignInputMaker {
    constructor(
      idfor,
      name,
      type,
      value,
      onChange,
      children,
      eyes,
      errorState,
      errorText,
      onBlur,
      onFocus
    ) {
      this.idfor = idfor;
      this.name = name;
      this.type = type;
      this.value = value;
      this.onChange = onChange;
      this.children = children;
      this.eyes = eyes;
      this.errorState = errorState;
      this.errorText = errorText;
      this.onBlur = onBlur;
      this.onFocus = onFocus;
    }
  }

  const SignInputArray = [
    new SignInputMaker(
      'signinEmail',
      'email',
      'email',
      `${values.email}`,
      handleChange,
      '이메일',
      false,
      emailError,
      emailErrorText,
      handleEmailBlur,
      handleEmailFocus
    ),
    new SignInputMaker(
      'signinPassword',
      'password',
      'password',
      `${values.password}`,
      handleChange,
      '비밀번호',
      true,
      passwordError,
      passwordErrorText,
      handlePasswordBlur,
      handlePasswordFocus
    ),
    new SignInputMaker(
      'signinPasswordCheck',
      'passwordCheck',
      'passwordCheck',
      `${values.passwordCheck}`,
      handleChange,
      '비밀번호 확인',
      true,
      passwordCheckError,
      passwordCheckErrorText,
      handlePasswordCheckBlur,
      handlePasswordCheckFocus
    ),
  ];

  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo className={styles.logo} />

          <SignLink
            to="/signin"
            subtitle="이미 회원이신가요?"
            children="로그인 하기"
          />
        </header>

        <section className={styles.sign}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {SignInputArray.map((SignInputs) => {
              return <SignInput {...SignInputs} key={SignInputs.name} />;
            })}

            <Button className={styles.button}>회원가입</Button>
          </form>
        </section>

        <SignFooter>다른 방식으로 가입하기</SignFooter>
      </div>
    </main>
  );
}

export default Signup;
