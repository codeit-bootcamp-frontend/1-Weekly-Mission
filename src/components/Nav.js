import "./Nav.css";
import logo from "../assets/logo.svg";
import Button from "../components/Button";

const INIT_USER = {
  profileImageSource: "",
  email: "",
};

const Account = ({ user = INIT_USER }) => {
  return (
    <div className="user-account">
      <img src={user.profileImageSource} alt="프로필 사진" />
      <div className="user-email">{user.email}</div>
    </div>
  );
};

export default function Nav({ user }) {
  return (
    <div className="nav-bar">
      <div className="nav-wrapper">
        <img src={logo} alt="로고" className="nav-logo" />
        {user.email ? <Account user={user} /> : <Button name="로그인" />}
      </div>
    </div>
  );
}
