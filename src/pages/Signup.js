import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button/Button';
import { Navigate, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import postSign from '../apis/auth/postSign';
import {
  signupEmail,
  signupPassword,
  signupPasswordCheck,
} from '../utils/signError';
import useInputController from '../hooks/useInputController';

function Signup() {
  const { isAuth } = useAuth();

  const {
    values: emailValues,
    errorText: emailErrorText,
    setErrorText: setEmailErrorText,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    handleFocus: handleEmailFocus,
  } = useInputController(signupEmail);

  const {
    values: passwordValues,
    errorText: passwordErrorText,
    setErrorText: setPasswordErrorText,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    handleFocus: handlePasswordFocus,
  } = useInputController(signupPassword);

  const {
    values: passwordCheckValues,
    errorText: passwordCheckErrorText,
    setErrorText: setPasswordCheckErrorText,
    handleChange: handlePasswordCheckChange,
    handleBlur: handlePasswordCheckBlur,
    handleFocus: handlePasswordCheckFocus,
  } = useInputController(signupPasswordCheck);

  const navigate = useNavigate();

  if (isAuth()) {
    return <Navigate to="/folder" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: emailValues,
      password: passwordValues,
    };

    const response = await postSign('up', data);

    if (response.ok) {
      navigate('/folder');
    } else {
      setEmailErrorText('이메일을 확인해주세요');
      setPasswordErrorText('비밀번호를 확인해주세요');
      setPasswordCheckErrorText('');
    }
  };

  const signInputConfig = [
    {
      idfor: 'signupEmail',
      name: 'email',
      type: 'email',
      value: `${emailValues}`,
      children: '이메일',

      errorText: emailErrorText,

      onChange: handleEmailChange,
      onBlur: handleEmailBlur,
      onFocus: handleEmailFocus,
      eyes: false,
    },
    {
      idfor: 'signupPassword',
      name: 'password',
      type: 'password',
      value: `${passwordValues}`,
      children: '비밀번호',

      errorText: passwordErrorText,

      onChange: handlePasswordChange,
      onBlur: handlePasswordBlur,
      onFocus: handlePasswordFocus,
      eyes: true,
    },
    {
      idfor: 'signupPasswordCheck',
      name: 'passwordCheck',
      type: 'password',
      value: `${passwordCheckValues}`,
      children: '비밀번호 확인',

      errorText: passwordCheckErrorText,

      onChange: handlePasswordCheckChange,
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
