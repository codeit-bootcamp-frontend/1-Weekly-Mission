import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bg || `var(--background)`};
`;
