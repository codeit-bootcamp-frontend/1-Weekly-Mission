import styled from "styled-components";

export const Absolute = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

export const KebabContainer = styled.div`
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

export const DivCardList = styled.div`
  display: grid;
  grid-template-columns: 34rem;
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 34rem 34rem;
    row-gap: 2.5rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 34rem 34rem 34rem;
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
`;

export const ACard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 2.4rem 0 rgba(0, 0, 0, 0.08);
  color: var(--Black);
  background-color: var(--White);
`;

export const DivImgCard = styled.div`
  height: 20.5rem;
  margin: 0 auto;
`;

export const ImgCard = styled.img`
  width: 34rem;
  height: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
  object-fit: cover;
`;

export const DivTextCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 13.5rem;
  padding: 1.5rem 2rem;
  gap: 1rem;
`;

export const DivTimeDiff = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  color: var(--Gray5);
`;

export const H3 = styled.h3`
  font-size: 1.4rem;
`;

export const ButtonStar = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const DivEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;
