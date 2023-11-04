import React from "react";
import * as S from "./HeaderStyle";

function Header({ name = "", owner = {} }) {
  return (
    <S.HeaderContainer>
      <S.HeaderOwner>
        <S.HeaderOwnerImg
          src={owner?.profileImageSource}
          alt="유저 프로필 사진"
        />
        <S.HeaderOwnerName>{`@${owner?.name}`}</S.HeaderOwnerName>
      </S.HeaderOwner>

      <S.HeaderName>{name}</S.HeaderName>
    </S.HeaderContainer>
  );
}

export default Header;
