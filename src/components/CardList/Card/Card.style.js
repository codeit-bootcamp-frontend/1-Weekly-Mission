import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const CardContainer = styled.div`
  border: 1px solid #000;
  width: 34rem;
  height: 33.4rem;
  box-shadow: 0rem 0.5rem 2.5rem 0rem rgba(0, 0, 0, 0.08);

  &:hover {
    border-color: ${COLORS.RED};
  }
`;

export const CardImgWrapper = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 20rem;
`;

export const CardInfo = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 10rem;
`;

export const CardCreatedAt = styled.p`
  color: #666;
  font-size: 13px;
`;

export const CardDescription = styled.p`
  height: 49px;
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

export const CardDate = styled.div`
  height: 19px;
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