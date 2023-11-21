import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const StyledButton = styled.button`
  display: flex;
  width: 8rem;
  padding: 1rem 1.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: ${COLORS.GRADATION};
  color: #f5f5f5;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;