import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";
import { ReactComponent as logoImg } from "../../images/logo.svg";

export const GlobalNavWrapper = styled.div`
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
    flex-grow: 1;k
    max-width: 20rem;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    &::before,
    &::after {
      flex: 1 0 3.2rem;
      max-width: none;
    }
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const GlobalNav = styled.div`
  display: flex;
  max-width: 152rem;
  flex: 1 0 79.9rem;
  justify-content: space-between;
  align-items: center;
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    max-width: calc(100% - 6.4rem);
    flex: 1 0 79.9rem;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    flex: 1 0 32.6rem;
  }
`;

export const LogoImage = styled(logoImg)`
  width: 13.3rem;
  height: 2.4rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    width: 8.8rem;
    height: 1.6rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.6rem;
  height: 2.8rem;
  & p {
    color: #373740;
    font-size: 1.4rem;
    ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
      display: none;
    }
  }
`;

export const ProfileImg = styled.img`
  width: 2.8rem;
  border-radius: 1.4rem;
`;

export const LoginButton = styled.button`
  display: flex;
  width: 12.8rem;
  height: 5.4rem;
  padding: 1.6rem 2rem;
  border: 0;
  background: var(--button-bg-purpleblue-to-skyblue);
  color: var(--button-grey-light);
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.8rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    width: 8rem;
    height: 3.7rem;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
  }
`;

export const UserEmail = styled.p`
  color: #373740;
  font-size: 1.4rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    display: none;
  }
`;
