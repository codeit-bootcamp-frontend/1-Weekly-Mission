import styled from "styled-components";
import UserInfo from "./UserInfo";
import Button from "../atoms/Button";
import { Link, useLocation } from "react-router-dom";
import LogoImage from "../atoms/LogoImage";
import DeviceSizes from "../../utils/DeviceSizes";
import { useUser } from "../../utils/UserContext";
const StyledDiv = styled.div`
  display: flex;
  position: ${({ $isFolder }) => ($isFolder ? "static" : "sticky")};
  top: 0;
  padding: 2rem 0;
  background: var(--linkbrary-zircon);
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  height: 9.4rem;
  z-index: 1;
  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    max-width: 20rem;
  }
  ${DeviceSizes.tablet} {
    &::before,
    &::after {
      flex: 1 0 3.2rem;
      max-width: none;
    }
  }
  ${DeviceSizes.mobile} {
    &::before,
    &::after {
      display: none;
    }
  }
`;

const NavInner = styled.div`
  display: flex;
  max-width: 152rem;
  flex: 1 0 79.9rem;
  justify-content: space-between;
  align-items: center;
  ${DeviceSizes.tablet} {
    max-width: calc(100% - 6.4rem);
    flex: 1 0 79.9rem;
  }
  ${DeviceSizes.mobile} {
    flex: 1 0 32.6rem;
  }
`;

const GlobalNav = () => {
  const { user: userInfo } = useUser() ?? {};
  const { email, profileImageSource, image_source } = userInfo || {};
  const { pathname } = useLocation();

  return (
    <StyledDiv $isFolder={pathname.startsWith("/folder")}>
      <NavInner>
        <Link to="/">
          <LogoImage alt="Linkbrary 로고" />
        </Link>
        {userInfo ? (
          <UserInfo userEmail={email} userProfileImg={profileImageSource || image_source} />
        ) : (
          <Link to="/folder">
            <Button>로그인</Button>
          </Link>
        )}
      </NavInner>
    </StyledDiv>
  );
};

export default GlobalNav;
