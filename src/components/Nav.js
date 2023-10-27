// nav 레이아웃 구성
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import { getUser } from '../api';
import './Nav.css';
import './App.css';


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
      <Link to="/"><img className="logo-img" src={logoImg} alt="Linkbrary Logo"/></Link>
      <Profile userData={userData} />
    </div>
  );
}

export default Nav;