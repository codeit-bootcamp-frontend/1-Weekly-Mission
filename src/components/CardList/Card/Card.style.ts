import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const CardContainer = styled.div`
  width: 34rem;
  height: 33.4rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0.5rem 2.5rem 0rem rgba(0, 0, 0, 0.08);
  position: relative;

  // &:hover {
  //   img {
  //     transform: scale(1.2);
  //     transition: 0.4s;
  //   }
  // }
`;

export const CardImgWrapper = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StarIcon = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
  z-index: 100;
  cursor: pointer;
`;

export const CardInfo = styled.div`
  display: flex;
  width: 34rem;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CardCreatedAt = styled.div`
  color: #666;

  /* Linkbrary/caption */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const KebabIcon = styled.img`
  width: 2.1rem;
  height: 1.7rem;
  cursor: pointer;
`;

export const CardDescription = styled.p`
  height: 4.9rem;
  align-self: stretch;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const CardDate = styled.p`
  height: 1.9rem;
  align-self: stretch;
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;