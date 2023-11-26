import { styled } from "styled-components";

export const EmptyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 66.25rem;
  height: 6.25rem;
  line-height: 1.5rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 66.25rem;
  margin: auto;

  @media (max-width: 1123px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 44rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    max-width: 20.3125rem;
  }
`;
