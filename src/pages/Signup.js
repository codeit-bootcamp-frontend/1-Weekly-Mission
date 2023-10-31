import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button/Button';
import useInputValue from '../hooks/useInputValue';
import { requestSign } from '../apis/api';
import { Navigate, useNavigate } from 'react-router';
import useInputError from '../hooks/useInputError';

function Signup() {
  const [values, handleChange] = useInputValue();

  const [emailError, emailErrorText, handleEmailBlur, handleEmailFocus] =
    useInputError(values, 'up', 'email');

  const [
    passwordError,
    passwordErrorText,
    handlePasswordBlur,
    handlePasswordFocus,
  ] = useInputError(values, 'up', 'password');

  const [
    passwordCheckError,
    passwordCheckErrorText,
    handlePasswordCheckBlur,
    handlePasswordCheckFocus,
  ] = useInputError(values, 'up', 'passwordCheck');

  const navigate = useNavigate();

  if (localStorage.getItem('accessToken')) {
    return <Navigate to="/folder" />;
  }

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
      console.log(response);
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
      children: '비밀번호',

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
