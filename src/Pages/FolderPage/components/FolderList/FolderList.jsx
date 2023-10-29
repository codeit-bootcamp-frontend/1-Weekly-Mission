// FolderList.js

import React, { useState } from "react";
import { S } from "./FolderListStyle"; // Import the styles as S
import SelectedFolder from "../SelectedFolder/SelectedFolder";

function FolderList({ folders, setFolderLink, selectedFolderId }) {
  const [selectedFolder, setSelectedFolder] = useState(undefined);
  const onClick = (folder) => (e) => {
    setFolderLink(folder.id);
    setSelectedFolder(folder);
  };

  return (
    <>
      <S.ButtonContainer>
        <S.FolderButtons>
          <S.Button
            onClick={onClick(undefined)}
            data-onselect={selectedFolderId === undefined}
          >
            전체
          </S.Button>
          {folders.length !== 0 &&
            folders.map((folder) => (
              <S.Button
                onClick={onClick(folder)}
                key={folder.id}
                data-onselect={selectedFolderId === folder.id}
              >
                {folder.name}
              </S.Button>
            ))}
        </S.FolderButtons>
        <S.AddFolder>폴더 추가 +</S.AddFolder>
      </S.ButtonContainer>

      <SelectedFolder folderName={selectedFolder?.name} />
    </>
  );
}

export default FolderList;
