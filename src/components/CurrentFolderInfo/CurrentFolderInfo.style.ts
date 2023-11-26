import styled from 'styled-components';
import { COLORS } from 'styles/color';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 1.2rem;

  span {
    font-weight: 600;
    font-size: 2.4rem;
    letter-spacing: -0.02rem;
  }
`;

export const OptionContainer = styled.div<{ selected: boolean }>`
  display: ${({ selected }) => (selected ? `none` : `flex`)};
  flex-wrap: wrap;
  align-items: flex-start;

  gap: 1.2rem;

  button {
    display: flex;
    align-items: center;

    gap: 0.4rem;

    span {
      color: ${COLORS.GRAY_60};
      font-size: 1.4rem;
    }
  }
`;
