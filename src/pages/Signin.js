import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button/Button';
import useInputValue from '../hooks/useInputValue';
import { Navigate, useNavigate } from 'react-router';
import { requestSign } from '../apis/api';
import useInputError from '../hooks/useInputError';
import SetSignInput from '../classes/SetSignInput';

function Signin() {
  const [values, handleChange] = useInputValue();

  const [emailError, emailErrorText, handleEmailBlur, handleEmailFocus] =
    useInputError(values, 'in', 'email');

  const [
    passwordError,
    passwordErrorText,
    handlePasswordBlur,
    handlePasswordFocus,
  ] = useInputError(values, 'in', 'password');

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

    const response = await requestSign('in', data);

    if (response.ok) {
      navigate('/folder');
    } else {
      console.log(response);
    }
  };

  const SignInputArray = [
    new SetSignInput(
      'signinEmail',
      'email',
      'email',
      `${values.email}`,
      '이메일',

      emailError,
      emailErrorText,

      handleChange,
      handleEmailBlur,
      handleEmailFocus,
      false
    ),
    new SetSignInput(
      'signinPassword',
      'password',
      'password',
      `${values.password}`,
      '비밀번호',

      passwordError,
      passwordErrorText,

      handleChange,
      handlePasswordBlur,
      handlePasswordFocus,
      true
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
              return <SignInput {...SignInputs} />;
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
