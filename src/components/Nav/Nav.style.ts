import styled from 'styled-components';
import { onMobile, onTablet } from '@styles/mediaQuery';
import Link from 'next/link';

export const NavContainer = styled.div<{ $path: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${({ $path }) => ($path === '/folder' ? `static` : `sticky`)};
  top: 0;
  z-index: 9999;

  width: 100%;
  height: 9.4rem;
  max-width: 192rem;
  padding: 3.2rem 20rem;

  background-color: #edf7ff;

  ${onTablet} {
    padding: 3.2rem;
  }

  ${onMobile} {
    padding: 1.8rem 3.2rem;
  }
`;

export const SignInButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12.8rem;
  height: 5.4rem;
  border-radius: 0.8rem;

  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);

  color: #f5f5f5;
  font-weight: 600;
  font-size: 1.8rem;

  cursor: pointer;
`;
