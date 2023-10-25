import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';

export const CardContainer = styled.a`
  display: block;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  color: #000;

  ${onPc} {
    width: 34rem;
    height: 34rem;
  }
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 60vw;

  ${onTablet} {
    height: 30vw;
  }

  ${onPc} {
    width: 34rem;
    height: 21rem;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
    transition-duration: 0.7s;
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem 2rem;
`;

export const TimeAgo = styled.p`
  color: #666;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const Date = styled.p`
  color: #333;
  font-size: 0.9rem;
  font-weight: 400;
`;
