import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  aliens-items : center;
  gap: 40px;

  @media ${({theme}) => theme.device.mobile} {
    gap: 32px;
  }
`;

