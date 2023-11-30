import React from "react";
import styled from "styled-components";
import colors from "../style/colors";

// ?를 안 붙여주면 Folder에서 Type 'string | undefined' is not assignable to type 'string'.
//   Type 'undefined' is not assignable to type 'string'.ts(2322)
//   Header.tsx(8, 3)가 나서 붙였는데  이게 정답인가?
interface HeaderProps {
  name?: string;
  owner?: {
    name: string;
    profileImageSource: string;
  };
}
function Header({ name, owner }: HeaderProps) {
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
