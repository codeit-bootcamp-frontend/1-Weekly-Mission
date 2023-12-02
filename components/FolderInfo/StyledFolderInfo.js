import styled from "styled-components";

export const OwnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const OwnerImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const OwnerName = styled.p`
  font-size: 16px;
`;

export const FolderName = styled.p`
  font-feature-settings: "clig" off, "liga" off;

  /* Linkbrary/h1-semibold */
  font-size: 40px;
  font-weight: 600;
`;
