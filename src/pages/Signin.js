import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button/Button';
import { Navigate, useNavigate } from 'react-router';
import postSign from '../apis/auth/postSign';
import useAuth from '../hooks/useAuth';
import { signinEmail, signinPassword } from '../utils/signError';
import useInputController from '../hooks/useInputController';

function Signin() {
  const {
    values: emailValues,
    errorText: emailErrorText,
    setErrorText: setEmailErrorText,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    handleFocus: handleEmailFocus,
  } = useInputController(signinEmail);

  const {
    values: passwordValues,
    errorText: passwordErrorText,
    setErrorText: setPasswordErrorText,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    handleFocus: handlePasswordFocus,
  } = useInputController(signinPassword);

  const { isAuth } = useAuth();

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

    const response = await postSign('in', data);

    if (response.ok) {
      navigate('/folder');
    } else {
      setEmailErrorText('이메일을 확인해주세요');
      setPasswordErrorText('비밀번호를 확인해주세요');
    }
  };

  const signInputConfig = [
    {
      idfor: 'signinEmail',
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
      idfor: 'signinPassword',
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
            {signInputConfig.map((SignInputs) => {
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
