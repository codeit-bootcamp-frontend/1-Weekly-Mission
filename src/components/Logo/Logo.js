import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

function Logo({ className }) {
  return (
    <h1 className={className}>
      <Link to="/">
        <img src={logoImg} alt="Linkbrary의 로고" />
      </Link>
    </h1>
  );
}

export default Logo;
