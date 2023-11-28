import styled from 'styled-components';
import { onTablet, onPc } from '@styles/mediaQuery';
import { COLORS } from '@styles/palette';
import { textGradientBackground } from '@styles/styleUtils';

export const BannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2.8rem 3.2rem 0rem;
  background-color: ${COLORS.LB_BACKGROUND};

  ${onTablet} {
    padding-top: 3.9rem;
  }

  ${onPc} {
    padding-top: 7rem;
  }
`;

export const BannerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  width: 26rem;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.25;

  ${onTablet} {
    width: 48.5rem;
  }

  ${onPc} {
    width: 72rem;
    font-size: 6.4rem;
  }
`;

export const TitleGradient = styled.span`
  background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
  ${textGradientBackground};
`;

export const Signup = styled.div`
  width: 20rem;
  margin: 2.4rem;

  ${onTablet} {
    width: 35rem;
    margin: 4rem;
  }
  ${onPc} {
    width: 35rem;
    margin: 4rem;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: auto;

  ${onTablet} {
    width: 65rem;
    height: 33rem;
  }

  ${onPc} {
    width: 120rem;
    height: 59rem;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
