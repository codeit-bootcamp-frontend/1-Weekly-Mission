import React from "react";
import styled from "styled-components";
import colors from "../style/colors";

function Header({ name = "", owner = {} }) {
  return (
    <HeaderContainer>
      <HeaderOwner>
        <HeaderOwnerImg
          src={owner?.profileImageSource}
          alt="유저 프로필 사진"
        />
        <HeaderOwnerName>{`@${owner?.name}`}</HeaderOwnerName>
      </HeaderOwner>

      <HeaderName>{name}</HeaderName>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 17rem;
  padding: 4rem 3rem;
  flex-direction: column;
  gap: 1.25rem;
  background: ${colors.background};
`;

const HeaderOwner = styled.div`
  gap: 0.75rem;
`;

const HeaderOwnerImg = styled.img`
  height: 3.75rem;
  border-radius: 70%;
`;

const HeaderOwnerName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
`;

const HeaderName = styled.h1`
  color: #000;
  text-align: center;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default Header;
