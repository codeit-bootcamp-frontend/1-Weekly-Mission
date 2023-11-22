import styled, { css } from "styled-components";
import colors from "../../style/colors";
import { device } from "../../style/device";
import { flexCenter } from "../../style/common";

export const NavContainer = styled.nav`
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

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
  }
`;

export const LogoImage = styled.img`
  width: 8.3125rem;
  height: 1.5rem;
`;

export const Profile = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 70%;
`;

export const ProfileEmail = styled.span`
  display: none;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: none;
  }
  ${flexCenter};
`;
