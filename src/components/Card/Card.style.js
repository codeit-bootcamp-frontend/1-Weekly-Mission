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
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    'timeAgo'
    'title'
    'description'
    'createdDate';
  gap: 0.6rem;
  padding: 1.5rem 2rem;
  height: 11rem;
  overflow: hidden;
`;

export const TimeAgo = styled.p`
  grid-area: timeAgo;
  color: #666;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const Title = styled.p`
  grid-area: title;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.2;

  ${onTablet} {
    font-size: 1.7rem;
  }
  ${onPc} {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  grid-area: description;
  font-size: 0rem;
  font-weight: 400;

  ${onTablet} {
    font-size: 0rem;
  }
  ${onPc} {
    font-size: 1rem;
  }
`;

export const Date = styled.p`
  grid-area: createdDate;
  color: #333;
  font-size: 0.9rem;
  font-weight: 400;
`;
