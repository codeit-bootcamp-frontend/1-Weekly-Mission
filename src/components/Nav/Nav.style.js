import styled from "styled-components";
import { onMobile, onTablet } from "styles/mediaQuery";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 192rem;
  height: 9.4rem;
  padding: 3.2rem 20rem;
  position: ${({ path }) => (path === "/folder" ? `static` : `sticky`)};
  top: 0;
  z-index: 9999;
  background-color: #edf7ff;

  ${onTablet} {
    padding: 3.2rem;
  }

  ${onMobile} {
    padding: 1.8rem 3.2rem;
  }
`;

export const SignInButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
  width: 12.8rem;
`;
