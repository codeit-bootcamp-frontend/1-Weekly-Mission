import styled from "styled-components";
import display from "../../css/display.js";

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${({ theme }) => display.device.mobile} {
    gap: 32px;
  }
`;