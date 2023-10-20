import "./header.css";
import LogoImg from "../../assets/common/img_logo.png";

const Header = () => {
  return (
    <header>
      <nav class="contentContainer">
        <img src={LogoImg} width="133" height="24" id="logoImg" alt="logoImg" />
        <a href="./html/login.html">
          <button class="defaultBtn" id="loginBtn">
            로그인
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
