import React from "react";

import styled from "styled-components";

function Main({ children }) {
  return (
    <MainContainer>
      <MainContent>{children}</MainContent>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 30px 32px;
`;

const MainContent = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export default Main;
