import Nav from "./Nav";
import Profile from "./Profile";
import "../css/index.css";

function Header({ userInfo }) {
  return (
    <div className="header">
      <Nav userInfo={userInfo} />
      <Profile userInfo={userInfo} />
    </div>
  );
}

export default Header;
