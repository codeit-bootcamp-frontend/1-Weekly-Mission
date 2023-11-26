import React from "react";

import styled, { css } from "styled-components";
import colors from "../../style/colors";
import { device } from "../../style/device";
import { flexCenter } from "../../style/common";

import logoImg from "../../assets/logo.png";
import Button from "../Button";

function Profile({ email, profileImage }) {
  return (
    <StyledProfile>
      <ProfileImg src={profileImage} alt="프로필 사진" />
      <ProfileEmail className="flex-center">{email}</ProfileEmail>
    </StyledProfile>
  );
}
function Nav({ path, email, profileImageSource }) {
  return (
    <NavContainer path={path}>
      <NavContent className="container">
        <LogoImage src={logoImg} alt="로고 이미지" />

        {email && profileImageSource ? (
          <Profile email={email} profileImage={profileImageSource} />
        ) : (
          <Button>로그인</Button>
        )}
      </NavContent>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  padding: 2rem 12rem;
  background: ${colors.background};
  ${(props) =>
    props.path === "shared" &&
    css`
      position: sticky;
      top: 0;
    `};

  @media ${device.tablet} {
    padding: 2rem 70px;
  }
  @media ${device.mobile} {
    padding: 2rem 32px;
  }
  z-index: 1;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
  }
`;

const LogoImage = styled.img`
  width: 8.3125rem;
  height: 1.5rem;
`;

const StyledProfile = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 70%;
`;

const ProfileEmail = styled.span`
  display: none;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: none;
  }
  ${flexCenter};
`;
export default Nav;
