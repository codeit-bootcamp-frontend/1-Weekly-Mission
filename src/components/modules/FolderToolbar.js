import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";

import FolderViewButton from "../atoms/FolderViewButton";
import AddFolderButton from "./AddFolderButton";
import FolderManageButtons from "./FolderManageButtons";
import FolderButtonContainer from "../atoms/FolderButtonContainer";
import DeviceSizes from "../../utils/DeviceSizes";

const FolderButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.8rem 1.2rem;

  ${DeviceSizes.mobile} {
    grid-area: folderButtonWrap;
  }
`;

const FolderToolbar = ({ folders }) => {
  const { folderId } = useParams();
  const currentFolder = folders.find((folder) => folder.id === +folderId);
  return (
    <>
      <FolderButtonContainer>
        <FolderButtonWrap>
          <FolderViewButton end to="/folder">
            전체
          </FolderViewButton>
          {folders.map((folder) => (
            <FolderViewButton to={`/folder/${folder.id}`} key={folder.id}>
              {folder.name}
            </FolderViewButton>
          ))}
        </FolderButtonWrap>
        <AddFolderButton />
      </FolderButtonContainer>
      <FolderManageButtons folderName={currentFolder?.name} />
    </>
  );
};

export default FolderToolbar;
