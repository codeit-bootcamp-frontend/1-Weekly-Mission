import { useState, useEffect } from "react";
import { getUser } from "../api";
import logo from "../assets/img/logo.svg";
import ProfileImg from "./ProfileImg";
import "../assets/css/Gnb.css";

function Gnb() {
  const [userData, setUserData] = useState({});

  async function getUserData() {
    const { id, email, name, profileImageSource } = await getUser();
    setUserData({
      id,
      email,
      name,
      profile: profileImageSource,
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="headerContainer">
      <img className="logo" src={logo} alt="logo" />
      <div className="profile">
        <ProfileImg src={userData.profile} />
        <span>{userData.email}</span>
      </div>
    </div>
  );
}

export default Gnb;
