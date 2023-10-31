import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Logo({ className }) {
  return (
    <h1 className={className}>
      <Link to="/">
        <img src={logo} alt="Linkbrary의 로고" />
      </Link>
    </h1>
  );
}

export default Logo;
