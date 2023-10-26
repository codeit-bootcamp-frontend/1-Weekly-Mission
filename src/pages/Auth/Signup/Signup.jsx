import { Background, AuthContainer } from 'pages/Auth/components/Layout';
import Header from 'pages/Auth/components/Header';
import Form from 'pages/Auth/components/Form';
import Social from 'pages/Auth/components/Social';

function Signup() {
  return (
    <Background>
      <AuthContainer>
        <Header type='signup' />
        <Form type='signup' />
        <Social type='signup' />
      </AuthContainer>
    </Background>
  );
}

export default Signup;
