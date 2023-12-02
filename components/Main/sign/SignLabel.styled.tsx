import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;

  &:focus-within {
    color: var(--Primary);
    font-weight: 700;
  }
`;
