import styled from "styled-components";
import display from "../../css/display.js";

export const CardContainer = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 25px;

  @media ${({ theme }) => display.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 25px;
  }

  @media ${({ theme }) => display.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  } 
`;