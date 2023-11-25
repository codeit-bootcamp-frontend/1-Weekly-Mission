import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
`;

export const PopOver = styled.div`
  display: none;
  position: absolute;
  right: 8%;
  width: 10rem;
  height: 6.4rem;
  background-color: var(--White);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  @media screen and (min-width: 768px) {
    right: -10%;
  }

  &.active {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  & p {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--Gray1);
      color: var(--Primary);
    }
  }
`;
