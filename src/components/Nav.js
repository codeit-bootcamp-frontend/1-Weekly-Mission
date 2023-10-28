import "./Nav.css";
import logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import React, { useState, useEffect } from "react";
import { getUserData } from "../services/api";

export default function Nav({ user }) {
  const [userData, setUserData] = useState([]);

  const INIT_USER = {
    profileImageSource: "",
    email: "",
  };

  const getUserInfo = async () => {
    const userInfo = await getUserData();
    setUserData(userInfo);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const Account = ({ user = INIT_USER }) => {
    return (
      <div className="user-account">
        <img src={user.profileImageSource} alt="프로필 사진" />
        <div className="user-email">{user.email}</div>
      </div>
    );
  };

  return (
    <div className="nav-bar">
      <div className="nav-wrapper">
        <img src={logo} alt="로고" className="nav-logo" />
        {userData.email ? (
          <Account user={userData} />
        ) : (
          <Button name="로그인" />
        )}
      </div>
    </div>
  );
}
