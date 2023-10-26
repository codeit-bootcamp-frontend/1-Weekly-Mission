import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button/Button';
import useInputValue from '../hooks/useInputValue';
import { Navigate, useNavigate } from 'react-router';
import { requestSign, saveAccessTokenToLocalStorage } from '../apis/api';
import { isEmail } from '../utils/validation';
import { useState } from 'react';

function Signin() {
  const navigate = useNavigate();

  const [values, handleChange] = useInputValue();

  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState('');

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
      setPasswordErrorText('비밀번호를 입력해주세요');
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: `${values.email}`,
      password: `${values.password}`,
    };

    const response = await requestSign('in', data);

    saveAccessTokenToLocalStorage(response);

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
  ];

  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo className={styles.logo} />

          <SignLink
            to="/signup"
            subtitle="회원이 아니신가요?"
            children="회원 가입하기"
          />
        </header>

        <section className={styles.sign}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {SignInputArray.map((SignInputs) => {
              return <SignInput {...SignInputs} key={SignInputs.name} />;
            })}

            <Button className={styles.button}>로그인</Button>
          </form>
        </section>

        <SignFooter>소셜 로그인</SignFooter>
      </div>
    </main>
  );
}

export default Signin;
