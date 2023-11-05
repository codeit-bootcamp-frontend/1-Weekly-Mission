import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";

export const ToolBarWrap = styled.div`
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    display: contents;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    display: flex;
    grid-area: folderManageButtons;
  }
`;

export const FolderName = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const ManageButtonWrap = styled.ul`
  display: flex;
  gap: 1.2rem;
`;

export const ManageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
`;
