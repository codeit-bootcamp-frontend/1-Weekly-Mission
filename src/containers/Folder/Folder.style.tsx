import styled, { css } from 'styled-components';
import { onPc, onTablet } from '@/styles/mediaQuery';
import { COLORS } from '@/styles/palette';

export const ContentContainer = styled.main`
  padding: 2rem 3.2rem;

  ${onPc} {
    margin: 0 auto;
    width: 115rem;
  }
`;

export const SearchText = styled.div<{ $show: boolean }>`
  display: none;
  padding-top: 3.2rem;
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02rem;
  color: ${COLORS.LB_GRAY_60};

  ${onTablet} {
    padding-top: 4rem;
    font-size: 3.2rem;
  }

  & span {
    color: ${COLORS.LB_GRAY_100};
  }

  ${({ $show }) =>
    $show &&
    css`
      display: block;
    `}
`;
