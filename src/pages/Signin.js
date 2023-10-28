import Logo from '../components/Logo/Logo';
import styles from './sign.module.css';
import SignFooter from '../components/SignFooter/SignFooter';
import SignLink from '../components/SignLink/SignLink';
import SignInput from '../components/SignInput/SignInput';
import Button from '../components/Button/Button';
import useInputValue from '../hooks/useInputValue';
import { Navigate, useNavigate } from 'react-router';
import { requestSign, saveAccessTokenToLocalStorage } from '../apis/api';
import useInputError from '../hooks/useInputError';

function Signin() {
  const navigate = useNavigate();

  const [values, handleChange] = useInputValue();

  const [emailError, emailErrorText, handleEmailBlur, handleEmailFocus] =
    useInputError(values, 'in', 'email');

  const [
    passwordError,
    passwordErrorText,
    handlePasswordBlur,
    handlePasswordFocus,
  ] = useInputError(values, 'in', 'password');

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
      children,

      errorState,
      errorText,

      onChange,
      onBlur,
      onFocus,
      eyes
    ) {
      this.idfor = idfor;
      this.name = name;
      this.type = type;
      this.value = value;
      this.children = children;

      this.errorState = errorState;
      this.errorText = errorText;

      this.onChange = onChange;
      this.onBlur = onBlur;
      this.onFocus = onFocus;
      this.eyes = eyes;
    }
  }

  const SignInputArray = [
    new SignInputMaker(
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
    new SignInputMaker(
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
