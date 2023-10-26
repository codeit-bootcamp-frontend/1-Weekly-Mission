import { Background, AuthContainer } from 'pages/Auth/components/Layout';
import Header from '../components/Header';
import Form from '../components/Form';
import Social from '../components/Social';

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
