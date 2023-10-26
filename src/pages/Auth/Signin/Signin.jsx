import { Background, AuthContainer } from 'pages/Auth/components/Layout';
import Header from '../components/Header';
import Form from '../components/Form';
import Social from '../components/Social';

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
