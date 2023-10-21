import "./Nav.css";
import logo from "../image/logo.svg";
// import NavProfile from "./NavProfile";
import NavLogin from "./NavLogin";

const Nav = () => {
  return (
    <nav className="nav_bar">
      <a className="logo_button" href="/">
        <img className="logo" src={logo} alt="로고 이미지" />
      </a>
      {/* 수정 예정 */}
      {/* {true ? <NavProfile /> : <NavLogin>로그인</NavLogin>} */}
      <NavLogin>로그인</NavLogin>
    </nav>
  );
};

export default Nav;
