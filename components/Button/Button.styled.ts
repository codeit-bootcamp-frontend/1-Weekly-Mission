import styled from 'styled-components';
import { COLORS } from '@/styles/palettes';

export const Button = styled.button`
  display: flex;
  width: 128px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: ${COLORS.BG_GRADIENT};

  color: ${COLORS.GRAY_LIGHT};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  `;