import logoImg from "../../Assets/logo.svg";
import profileImg from "../../Assets/profile.svg";
import "../css/Nav.css";

function Profile({ account }) {
  const { email, profileImageSource } = account;

  const imgSrc = profileImageSource;

  return (
    <div className="Profile">
      <img className="profile_logo" src={imgSrc} alt={profileImg} />
      <span className="profile_id">{email}</span>
    </div>
  );
}

function Nav({ account }) {
  return (
    <div className="Nav_wrapper">
      <div className="Nav">
        <div className="Nav_left">
          <img className="Nav_logo" src={logoImg} alt={logoImg} />
        </div>
        <div className="Nav_right">
          <Profile className="Nav_profile" account={account} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
