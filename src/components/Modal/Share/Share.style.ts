import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const ShareContainer = styled.section`
  display: flex;
  gap: 3.2rem;
  margin: 0 auto;
`;

export const Share = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 7rem;
`;

export const ShareButton = styled.button``;

export const ShareText = styled.span`
  color: ${COLORS['LB_GRAY_100']};
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
`;
