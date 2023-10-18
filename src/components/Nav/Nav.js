import logoImg from "../../assets/images/logo.png";
import Button from "../Button/Button.js";
import "./Nav.css";
const Nav = () => {
  return (
    <>
      <nav>
        <span className="logo">
          <a href="/">
            <img src={logoImg} alt="로고" />
          </a>
        </span>
        <Button className="btn login">로그인</Button>
      </nav>
    </>
  );
};

export default Nav;
