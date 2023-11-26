import styled from 'styled-components';
import { Image } from 'components/CardList/Card/Card.style';
import { onMobile, onTablet } from 'styles/mediaQuery';
import { COLORS } from 'styles/color';

export const CardListContainer = styled.ul`
  display: grid;

  padding-inline-start: 0;

  gap: 2.5rem 2rem;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  list-style-type: none;
  place-items: center;

  ${onTablet} {
    grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  }

  ${onMobile} {
    grid-template: repeat(9, 1fr) / 1fr;
  }
`;

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 33.4rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0.5rem 2.5rem 0rem rgba(0, 0, 0, 0.08);

  cursor: pointer;

  &:hover {
    background: ${COLORS.GRAY_0};

    ${Image} {
      transform: scale(1.3);
      transition-duration: 0.5s;
    }
  }
`;
