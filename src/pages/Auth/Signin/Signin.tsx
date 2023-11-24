import { Background, AuthContainer } from '../components/Layout';
import Header from '../components/Header';
import Form from '../components/Form';
import Social from '../components/Social';

function Signin() {
  return (
    <Background>
      <AuthContainer>
        <Header />
        <Form />
        <Social />
      </AuthContainer>
    </Background>
  );
}

export default Signin;
