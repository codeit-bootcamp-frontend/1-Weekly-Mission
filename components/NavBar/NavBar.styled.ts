import { COLORS } from '@/styles/palettes';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 33px 200px 32px 200px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: ${COLORS.BACKGROUND};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`; 

export const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const AccountEmail = styled.div`
color: ${COLORS.GRAY_600};

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;