import React from "react";
import * as S from "./NavStyle";
import Profile from "./Profile";

import logoImg from "../../assets/logo.png";
import getSample from "../../api";
import useAsync from "../../Hooks/useAsync";
import { Button } from "../Button/Button";

function Nav() {
  const [data] = useAsync(() => getSample("user"));
  if (!data) return;
  const { email, profileImageSource } = data;

  return (
    <S.NavContainer>
      <S.NavContent className="container">
        <S.LogoImage src={logoImg} alt="로고 이미지" />

        {email && profileImageSource ? (
          <Profile email={email} profileImage={profileImageSource} />
        ) : (
          <Button>로그인</Button>
        )}
      </S.NavContent>
    </S.NavContainer>
  );
}

export default Nav;
