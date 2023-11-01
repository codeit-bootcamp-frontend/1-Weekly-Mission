import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../api";
import logo from "../assets/img/logo.svg";
import ProfileImg from "./ProfileImg";
import CTA from "./CTA";
import * as Styled from "../style/Gnb";

function Gnb({ isFixed }) {
  const [userData, setUserData] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  async function getUserData() {
    try {
      const { id, email, name, image_source } = await getUser();
      setUserData({
        id,
        email,
        name,
        profile: image_source,
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
    <>
      <Styled.Gnb isFixed={isFixed} />
      <header>
        <div className="headerContainer">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          {isLogin ? (
            <div className="profile">
              <ProfileImg src={userData.profile} />
              <span>{userData.email}</span>
            </div>
          ) : (
            <CTA href="">로그인</CTA>
          )}
        </div>
      </header>
    </>
  );
}

export default Gnb;
