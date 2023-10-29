import React from "react";
import * as S from "./NavStyle";
import Profile from "../../../../components/Nav/Profile";

import logoImg from "../../../../assets/logo.png";

import { getUser } from "../../../../api";
import useAsync from "../../../../Hooks/useAsync";
import { Button } from "../../../../components/Button/Button";

function Nav() {
  const [data, isLoading, hasError, getUserAysnc] = useAsync(() => getUser(1));
  if (!data) return;
  const { email, image_source } = data.data[0];

  return (
    <S.NavContainer>
      <S.NavContent className="container">
        <S.LogoImage src={logoImg} alt="로고 이미지" />

        {email && image_source ? (
          <Profile email={email} profileImage={image_source} />
        ) : (
          <Button>로그인</Button>
        )}
      </S.NavContent>
    </S.NavContainer>
  );
}

export default Nav;
