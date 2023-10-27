import styled from "styled-components";
import { Image } from "components/CardList/Card/Card.style";
import { onMobile, onTablet } from "styles/mediaQuery";

export const NoLink = styled.div`
  display: flex;
  font-size: 1.6rem;
  line-height: 150%;
  padding: 4.1rem 0 3.5rem 0px;
  justify-content: center;
  align-items: center;
`;

export const CardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem 2rem;
  place-items: center;
  list-style-type: none;
  padding-inline-start: 0;

  ${onTablet} {
    grid-template-columns: repeat(2, 1fr)
  }

  ${onMobile} {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 0rem 0.5rem 2.5rem 0rem rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  width: 100%;
  height: 33.4rem;
  cursor: pointer;

  &:hover {
    background: var(--gray0);

    ${Image} {
      transform: scale(1.3);
      transition-duration: 0.5s;
    }
  }
`;
