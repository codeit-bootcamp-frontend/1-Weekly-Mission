import logo from '../images/logo.png';

function NavLogo({ className }) {
  return (
    <h1 className={className}>
      <a href="/">
        <img src={logo} alt="Linkbrary의 로고" />
      </a>
    </h1>
  );
}

export default NavLogo;
