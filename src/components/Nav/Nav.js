import React from "react";
import * as S from "./NavStyle";
import Profile from "./Profile";
import LoginButton from "./LoginButton";
import logoImg from "../../assets/logo.png";
import getSample from "../../api";
import useAsync from "../../Hooks/useAsync";

function Nav() {
  const [data] = useAsync(() =>
    getSample("user")
  );
  if (!data) return null;
  const { email, profileImageSource } = data;

  return (
    <S.NavContainer>
      <S.NavContent className="container">
        <S.LogoImage src={logoImg} alt="로고 이미지" />

        {email && profileImageSource ? (
          <Profile email={email} profileImage={profileImageSource} />
        ) : (
          <LoginButton />
        )}
      </S.NavContent>
    </S.NavContainer>
  );
}

export default Nav;
