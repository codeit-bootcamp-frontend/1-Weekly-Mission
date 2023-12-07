import styled from "styled-components";

interface IStyledLabel {
  $error: boolean;
}

export const StyledLabel = styled.label<IStyledLabel>`
  position: relative;

  ${({ $error }) => ($error ? "color: var(--Red)" : "&:focus-within {color: var(--Primary); font-weight: 700;}")};
`;
