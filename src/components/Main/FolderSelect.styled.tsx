import styled, { keyframes } from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  width: 34rem;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    width: 68rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`;

export const Li = styled.li`
  height: 3.2rem;

  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  background-color: var(--White);
  color: var(--Black);
  border: 0.1px solid var(--Primary);
  border-radius: 0.5rem;
  font-size: 1.4rem;

  &:hover,
  &.active {
    background-color: var(--Primary);
    color: var(--White);
  }
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--White);
  white-space: nowrap;
  border: none;
`;

export const ButtonAdd = styled(BaseButton)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 0.2rem;
    height: 3rem;
    color: var(--Primary);
  }
`;

export const ButtonControl = styled(BaseButton)`
  gap: 0.5rem;
  color: var(--Gray4);
  font-size: 1.4rem;
  font-weight: 600;
`;

export const scrollDown = keyframes`
  50% {
    bottom: 11rem;
  }
`;

export const ButtonFloat = styled(BaseButton)`
  animation: ${scrollDown} 1.3s ease-in-out infinite;
  position: fixed;
  z-index: 2;
  bottom: 10.1rem;
  padding: 0.8rem 2.4rem;
  border-radius: 2rem;
  gap: 0.3rem;
  background-color: var(--Primary);
  color: var(--White);
  font-size: 1.6rem;
  font-weight: 500;

  &:hover {
    background-color: var(--Red);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  width: 34rem;

  @media screen and (min-width: 768px) {
    width: 68rem;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  ${({ title }) => title === "전체" && `display: none;`}
  gap: 1.2rem;
`;

export const Img = styled.img`
  width: 1.8rem;
`;

export const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  width: 34rem;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    width: 68rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`;
