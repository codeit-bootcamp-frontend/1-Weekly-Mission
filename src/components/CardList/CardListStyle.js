import styled from "styled-components";

export const CardListContainer = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1124px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1123px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
