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
import SetSignInput from '../classes/SetSignInput';

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
      console.log('실패란다');
    }
  };

  const SignInputArray = [
    new SetSignInput(
      'signiupEmail',
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
      'signupPassword',
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
    new SetSignInput(
      'signupPasswordCheck',
      'passwordCheck',
      'password',
      `${values.passwordCheck}`,
      '비밀번호 확인',

      passwordCheckError,
      passwordCheckErrorText,

      handleChange,
      handlePasswordCheckBlur,
      handlePasswordCheckFocus,
      true
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
