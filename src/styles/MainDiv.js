import styled from "styled-components";
import { onTablet } from "styles/mediaQuery";

export const MainDiv = styled.div`
  margin: 4rem 19rem 10rem 19rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${onTablet} {
    margin-left: 3.2rem;
    margin-right: 3.2rem;
  }
`;
