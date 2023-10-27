import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/icons/Logo";

const Navbar = ({ isFolderPage }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/users/1")
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          setUserData(data.data[0]);
        }
      });
  }, []);

  return (
    <header className={`header ${isFolderPage ? "folder-page" : "share-page"}`}>
      <div className="header-content">
        <a href="/">
          <Logo className="logo" alt="logo" />
        </a>
        {userData ? (
          <div className="profile">
            <img
              src={userData.image_source}
              alt="profile"
              className="profile-image"
            />
            <span className="email">{userData.email}</span>
          </div>
        ) : (
          <a href="signin">
            <button className="loginBtn">로그인</button>
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
