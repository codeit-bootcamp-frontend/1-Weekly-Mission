import styled from "styled-components";

export const Section = styled.div`
  width: 80%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(3, minmax(30%, auto));
  row-gap: 25px;
  column-gap: 20px;

  @media (max-width: 1199px) {
    width: 100%;
  }

  @media (max-width: 1124px) {
    width: 100%;
    grid-template-columns: repeat(2, minmax(40%, auto));
  }

  @media (max-width: 767px) {
    width: 100%;
    grid-template-columns: repeat(1, minmax(90%, auto));
  }
`;
