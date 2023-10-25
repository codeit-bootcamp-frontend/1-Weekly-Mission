import "./Nav.css";
import logo from "../assets/logo.svg";

export default function Nav({ profileImageSource, email }) {
  return (
    <div className="nav-bar">
      <div className="nav-wrapper">
        <img src={logo} alt="로고" className="nav-logo" />
        <div className="user-account">
          <img src={profileImageSource} alt="프로필 사진" />
          <div className="user-email">{email}</div>
        </div>
      </div>
    </div>
  );
}
