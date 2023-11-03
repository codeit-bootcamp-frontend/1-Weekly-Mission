import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';
import { COLORS } from 'styles/palette';
import { zIndexStyle } from 'styles/zIndexStyle';

export const CardContainer = styled.a`
  display: block;
  width: 100%;
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
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60vw;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  ${onTablet} {
    height: 30vw;
  }

  ${onPc} {
    width: 34rem;
    height: 21rem;
  }
`;

export const StarButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const KebabButton = styled.button`
  position: absolute;
  right: 0rem;
`;

export const KebabPopup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1.8rem;
  right: 0rem;
  z-index: ${zIndexStyle.floating - 1};
  width: 10rem;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

export const KebabInnerButton = styled.button`
  padding: 0.7rem 1.2rem;
  width: 10rem;
  color: ${COLORS['LB_GRAY_100']};
  font-size: 1.4rem;
  font-weight: 400;

  &:hover {
    background-color: ${COLORS['LB_GRAY_10']};
    color: ${COLORS['LB_PRIMARY']};
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
`;

export const TimeAgo = styled.div`
  grid-area: timeAgo;
  position: relative;
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
