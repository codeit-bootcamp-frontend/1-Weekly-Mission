import logo from "../assets/img/logo.svg";
import ProfileImg from "./ProfileImg";
import defaultProfile from "../assets/img/img-profile-default.png";
import "../assets/css/Gnb.css";

function Gnb() {
  const email = "codeit@condeit.com";

  return (
    <div className="headerContainer">
      <img className="logo" src={logo} alt="logo" />
      <div className="profile">
        <ProfileImg src={defaultProfile} />
        <span>{email}</span>
      </div>
    </div>
  );
}

export default Gnb;
