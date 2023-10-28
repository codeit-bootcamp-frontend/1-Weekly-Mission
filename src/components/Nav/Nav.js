import Profile from "./Profile";
import LoginButton from "./LoginButton";
import logoImg from "../../assets/logo.png";
import { useState, useEffect } from "react";
import getSample from "../../api";
import "../../style/style.css";
import "./Nav.css";
import useAsync from "../../Hooks/useAsync";

function Nav() {
  const [data, isLoading, LoadingError, getUserAsync] = useAsync(() =>
    getSample("user")
  );
  if (!data) return;
  const { email, profileImageSource } = data;

  return (
    <nav className="Nav">
      <div className="container">
        <img className="logo" src={logoImg} alt="로고 이미지"></img>

        {email && profileImageSource ? (
          <Profile email={email} profileImage={profileImageSource} />
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
}

export default Nav;
