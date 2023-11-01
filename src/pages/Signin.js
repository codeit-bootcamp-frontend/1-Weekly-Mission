import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button/Button';
import { Navigate, useNavigate } from 'react-router';
import postSign from '../apis/auth/postSign';
import useAuth from '../hooks/useAuth';
import useSignInputValue from '../hooks/useSignInputValue';
import useSignInputError from '../hooks/useSignInputError';
import { signinEmail, signinPassword } from '../utils/signError';

function Signin() {
  const [values, handleChange] = useSignInputValue();
  const { token } = useAuth();

  const {
    error: emailError,
    setError: setEmailError,
    errorText: emailErrorText,
    setErrorText: setEmailErrorText,
    handleBlur: handleEmailBlur,
    handleFocus: handleEmailFocus,
  } = useSignInputError(values, signinEmail);

  const {
    error: passwordError,
    setError: setPasswordError,
    errorText: passwordErrorText,
    setErrorText: setPasswordErrorText,
    handleBlur: handlePasswordBlur,
    handleFocus: handlePasswordFocus,
  } = useSignInputError(values, signinPassword);

  const navigate = useNavigate();

  if (token.access) {
    return <Navigate to="/folder" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = values;

    const response = await postSign('in', data);

    if (response.ok) {
      navigate('/folder');
    } else {
      setEmailError(true);
      setEmailErrorText('이메일을 확인해주세요');
      setPasswordError(true);
      setPasswordErrorText('비밀번호를 확인해주세요');
    }
  };

  const signInputConfig = [
    {
      idfor: 'signinEmail',
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
      idfor: 'signinPassword',
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
