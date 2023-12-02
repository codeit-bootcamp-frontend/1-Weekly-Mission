import styled from "styled-components";

export const GlobalLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export const MainContent = styled.main`
  flex: 1;
  min-height: calc(100vh - 16rem);
`;
