import { useState, useEffect } from "react";
import { getUser } from "../api";
import logo from "../assets/img/logo.svg";
import ProfileImg from "./ProfileImg";
import CTA from "./CTA";
import "../assets/css/Gnb.css";

function Gnb() {
  const [userData, setUserData] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  async function getUserData() {
    try {
      const { id, email, name, profileImageSource } = await getUser();
      setUserData({
        id,
        email,
        name,
        profile: profileImageSource,
      });
      setIsLogin(true);
    } catch (error) {
      console.log(error);
      setIsLogin(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="headerContainer">
      <img className="logo" src={logo} alt="logo" />
      {isLogin ? (
        <div className="profile">
          <ProfileImg src={userData.profile} />
          <span>{userData.email}</span>
        </div>
      ) : (
        <CTA href="">로그인</CTA>
      )}
    </div>
  );
}

export default Gnb;
