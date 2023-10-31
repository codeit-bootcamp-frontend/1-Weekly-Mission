import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Nav.css";
import logoImg from "../img/logo.png";

const INIT_USER = {
  image_source: "",
  email: "",
};

const Nav = ({ user = INIT_USER }) => {
  const { email, image_source } = user;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const [isSticky, setIsSticky] = useState("sticky");
  const urlPath = useLocation().pathname;

  useEffect(() => {
    if (urlPath === "/folder") {
      setIsSticky("static");
    } else {
      setIsSticky("sticky");
    }
  }, [urlPath]);

  return (
    <header className={isSticky}>
      <div className="inner">
        <h1>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </h1>
        <div className="header-login">
          {!user ? (
            <button type="button">로그인</button>
          ) : (
            <>
              <img
                className="profile-logo"
                src={image_source}
                alt="프로필 이미지"
              />
              {windowWidth > 390 ? (
                <span className="profile-id">{email}</span>
              ) : null}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
