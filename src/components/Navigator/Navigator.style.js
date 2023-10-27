import styled, { css } from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';
import { COLORS } from 'styles/palette';

export const GnbContainer = styled.header`
  width: 100%;
  background-color: ${COLORS['LB_BACKGROUND']};
`;

export const GnbInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.3rem 3.2rem;
  width: 100%;
  max-width: 80rem;

  ${onTablet} {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    max-width: 80rem;
  }

  ${onPc} {
    padding: 2rem 20rem;
    max-width: 192rem;
  }
`;

export const Logo = styled.a`
  margin-right: 0.5rem;
`;

export const Signin = styled.div`
  width: 8rem;
  margin-left: 0.5rem;

  ${onPc} {
    width: 12.8rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.7rem;
  width: 8rem;
  margin-left: 0.5rem;
`;

export const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;

export const ProfileEmail = styled.p`
  display: none;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${COLORS['LB_GRAY_100']};

  ${onTablet} {
    display: block;
  }

  ${onPc} {
    display: block;
  }
`;
