import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <Link className="login" to="/">
      로그인
    </Link>
  );
}

export default Login;
