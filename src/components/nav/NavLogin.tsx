import { ReactNode } from "react";
import styled from "styled-components";

interface NavLoginProps {
  children: ReactNode;
}

const NavLogin = ({ children }: NavLoginProps) => {
  return <LoginButton href="/">{children}</LoginButton>;
};

const LoginButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background-image: var(--graBlueToSkyBlue);
  color: var(--grayLight);
  font-size: 1.8rem;
  font-weight: 600;
  width: 12.8rem;
  padding: 1.6rem 2rem;

  @media (max-width: 767px) and (min-width: 375px) {
    width: 8rem;
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
  }
`;

export default NavLogin;
