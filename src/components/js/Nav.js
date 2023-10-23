import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAccount } from "../../api/apiUrl";
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

function Nav() {
  const [account, setAccount] = useState({});

  const handleLoad = async () => {
    const nextAccount = await getAccount();
    setAccount(nextAccount);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="Nav_wrapper">
      <div className="Nav">
        <div className="Nav_left">
          <a href="/">
            <img className="Nav_logo" src={logoImg} alt={logoImg} />
          </a>
        </div>
        <div className="Nav_right">
          {account.email ? (
            <Profile className="Nav_profile" account={account} />
          ) : (
            <Link to="/" className="Nav_signIn_button">
              로그인
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
