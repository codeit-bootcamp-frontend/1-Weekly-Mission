import { COLORS } from '@/styles/palettes';
import styled from 'styled-components';
import Image from 'next/image';

export const CardContainer = styled.div`
  width: 34rem;
  height: 33.4rem;
  border-radius: 1.5rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
`;

export const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 19rem;
  overflow: hidden;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const CardImage = styled(Image)`
  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    transition: 0.5s;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 15px 20px;
  gap: 1rem;
  position: relative;
`;

export const TimeAgo = styled.div`
  color: #666;

  /* Linkbrary/caption */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Description = styled.p`
  height: 4.9rem;
  color: ${COLORS.BLACK};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const Date = styled.div`
  height: 1.9rem;
  color: #333;

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StarButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
`;

export const KebabButton = styled.div`
  position: absolute;
  right: 2rem;
  top: 1.5rem;
  width: 2.1rem;
  height: 1.7rem;
  cursor: pointer;
`;

export const SelectMenu = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  position: absolute;
  top: 15px;
  left: 0;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.GRAY_700};
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.10);
  z-index: 10;
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 7px 12px;

  &:last-child {
    background-color: ${COLORS.GRAY_200};
    color: ${COLORS.PRIMARY};
  }
`;
