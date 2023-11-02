import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button/Button';
import { Navigate, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useSignInputValue from '../hooks/useSignInputValue';
import useSignInputError from '../hooks/useSignInputError';
import postSign from '../apis/auth/postSign';
import {
  signupEmail,
  signupPassword,
  signupPasswordCheck,
} from '../utils/signError';

function Signup() {
  const [values, handleChange] = useSignInputValue();
  const { isAuth } = useAuth();

  const {
    error: emailError,
    setError: setEmailError,
    errorText: emailErrorText,
    setErrorText: setEmailErrorText,
    handleBlur: handleEmailBlur,
    handleFocus: handleEmailFocus,
  } = useSignInputError(values, signupEmail);

  const {
    error: passwordError,
    setError: setPasswordError,
    errorText: passwordErrorText,
    setErrorText: setPasswordErrorText,
    handleBlur: handlePasswordBlur,
    handleFocus: handlePasswordFocus,
  } = useSignInputError(values, signupPassword);

  const {
    error: passwordCheckError,
    setError: setPasswordCheckError,
    errorText: passwordCheckErrorText,
    setErrorText: setPasswordCheckErrorText,
    handleBlur: handlePasswordCheckBlur,
    handleFocus: handlePasswordCheckFocus,
  } = useSignInputError(values, signupPasswordCheck);

  const navigate = useNavigate();

  if (isAuth()) {
    return <Navigate to="/folder" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: `${values.email}`,
      password: `${values.password}`,
    };

    const response = await postSign('up', data);

    if (response.ok) {
      navigate('/folder');
    } else {
      setEmailError(true);
      setEmailErrorText('이메일을 확인해주세요');
      setPasswordError(true);
      setPasswordErrorText('비밀번호를 확인해주세요');
      setPasswordCheckError(true);
      setPasswordCheckErrorText('');
    }
  };

  const signInputConfig = [
    {
      idfor: 'signupEmail',
      name: 'email',
      type: 'email',
      value: `${values.email}`,
      children: '이메일',

      errorState: emailError,
      errorText: emailErrorText,

      onChange: handleChange,
      onBlur: handleEmailBlur,
      onFocus: handleEmailFocus,
      eyes: false,
    },
    {
      idfor: 'signupPassword',
      name: 'password',
      type: 'password',
      value: `${values.password}`,
      children: '비밀번호',

      errorState: passwordError,
      errorText: passwordErrorText,

      onChange: handleChange,
      onBlur: handlePasswordBlur,
      onFocus: handlePasswordFocus,
      eyes: true,
    },
    {
      idfor: 'signupPasswordCheck',
      name: 'passwordCheck',
      type: 'password',
      value: `${values.passwordCheck}`,
      children: '비밀번호 확인',

      errorState: passwordCheckError,
      errorText: passwordCheckErrorText,

      onChange: handleChange,
      onBlur: handlePasswordCheckBlur,
      onFocus: handlePasswordCheckFocus,
      eyes: true,
    },
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
            {signInputConfig.map((SignInputs) => {
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
