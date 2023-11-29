import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
  padding: 1rem 0 4rem;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  @media screen and (min-width: 768px) {
    width: 5.6rem;
    height: 5.6rem;
  }
`;

export const UserText = styled.p`
  color: var(--Black);
  font-size: 1.4rem;
`;

export const UserTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
`;
