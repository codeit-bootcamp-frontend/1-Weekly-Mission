import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const SelectMenuContainer = styled.div`
  display: flex;
  width: 10rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  background-color: #FFFFFF;
  box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(51, 50, 54, 0.10);
  position: absolute;
  top: 1.6rem;
  right: -8rem;
  cursor: pointer;
`;

export const SelectDelete = styled.div`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  color: #333236; // --gray-light-gray-100

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const SelectAddFolder = styled.div`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  background: ${COLORS.GRAY_200};
  color: ${COLORS.PRIMARY};

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;