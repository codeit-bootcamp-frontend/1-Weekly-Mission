import "./Nav.css";
import logo from "../assets/logo.svg";
import profileImg from "../assets/my-profile.svg";

export default function Nav() {
  return (
    <div className="nav-bar">
      <div className="nav-wrapper">
        <img src={logo} alt="로고" className="nav-logo" />
        <div className="user-account">
          <img src={profileImg} alt="프로필 사진" />
          <div className="user-email">Codeit@codeit.com</div>
        </div>
      </div>
    </div>
  );
}
