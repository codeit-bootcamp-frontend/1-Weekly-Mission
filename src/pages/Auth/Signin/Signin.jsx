import * as S from './Signin.style';
import Header from 'pages/Auth/components/Header';
import Form from 'pages/Auth/components/Form';
import Social from 'pages/Auth/components/Social';

function Signin() {
  return (
    <S.Background>
      <S.AuthContainer>
        <Header />
        <Form />
        <Social />
      </S.AuthContainer>
    </S.Background>
  );
}

export default Signin;
