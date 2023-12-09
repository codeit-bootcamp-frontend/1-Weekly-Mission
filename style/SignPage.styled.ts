import Image from "next/image";
import styled from "styled-components";

export const SignContainer = styled.div`
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
`;

export const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.2rem;
  width: 100%;
  max-width: 40rem;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const SnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray20);
  background-color: var(--gray10);
`;
