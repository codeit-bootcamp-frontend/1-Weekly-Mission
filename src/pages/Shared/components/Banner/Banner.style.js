import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';
import { COLORS } from 'styles/palette';

export const BannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 4rem;
  background-color: ${COLORS['LB_BACKGROUND']};

  ${onTablet} {
    padding-top: 2rem;
    padding-bottom: 6rem;
  }

  ${onPc} {
    padding-top: 2rem;
    padding-bottom: 6rem;
  }
`;

export const Img = styled.img`
  width: 4rem;
  height: 4rem;

  ${onTablet} {
    width: 6rem;
    height: 6rem;
  }

  ${onPc} {
    width: 6rem;
    height: 6rem;
  }
`;

export const OwnerName = styled.p`
  padding-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 400;

  ${onTablet} {
    padding-top: 1.2rem;
    padding-bottom: 2rem;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  ${onPc} {
    padding-top: 1.2rem;
    padding-bottom: 2rem;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;

export const FolderName = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;

  ${onPc} {
    font-size: 4rem;
  }
`;
