import logoImg from "../assets/logo.svg";
import { getUser } from "../api";
import { useState, useEffect } from "react";
import './Nav.css';
import './App.css';
import LoginButton from './LoginButton';


function Profile({ userData }) {
  const { email, profileImageSource } = userData;

  return (
    <div className="profile">
      <img className="profile-img" src={profileImageSource} alt="프로필"/>
      <span className="profile-email">{email}</span>
    </div>
  );
}

function Nav() {
  const [userData, setUserData] = useState({}); 

  const handleLoad = async () => {
    const nextUserData = await getUser();
    setUserData(nextUserData);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="nav-container">
      <div className="left">
        <a href="/" className="logo"><img className="logo-img" src={logoImg} alt="로고 이미지" /></a>
      </div>
      <div className="right">
        {(userData) ? <Profile userData={userData} /> : <div>로그인</div>}
        {/* <LoginButton /> */}
      </div>
    </div>
  );
}

export default Nav;