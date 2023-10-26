import { Background, AuthContainer } from 'pages/Auth/components/Layout';
import Header from 'pages/Auth/components/Header';
import Form from 'pages/Auth/components/Form';
import Social from 'pages/Auth/components/Social';

function Signin() {
  return (
    <Background>
      <AuthContainer>
        <Header type='signin' />
        <Form type='signin' />
        <Social type='signin' />
      </AuthContainer>
    </Background>
  );
}

export default Signin;
