import styled from "styled-components";

export const Absolute = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

export const ContainerCardList = styled.div`
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

export const CardLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 2.4rem 0 rgba(0, 0, 0, 0.08);
  color: var(--Black);
  background-color: var(--White);
`;

export const WrapperCardImg = styled.div`
  height: 20.5rem;
  margin: 0 auto;
  overflow: hidden;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
`;

export const CardImg = styled.img`
  width: 34rem;
  height: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.25s ease-out;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  height: 13.5rem;
  padding: 1.5rem 2rem;
  gap: 1rem;
`;

export const WrapperTime = styled.div`
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

export const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;
