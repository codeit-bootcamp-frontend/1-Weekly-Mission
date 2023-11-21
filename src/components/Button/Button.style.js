import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const StyledButton = styled.button`
  display: flex;
  width: 8rem;
  padding: 1rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: ${COLORS.GRADATION};
  color: #fff;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;