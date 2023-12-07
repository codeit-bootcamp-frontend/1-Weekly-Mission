import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 2rem 0;

  @media screen and (min-width: 768px) {
    gap: 2.4rem;
    padding: 4rem 3.2rem;
  }
`;
