import React, { useEffect, useState } from "react";
import { S } from "./FolderListStyle"; // Import the styles as S

import shareIcon from "../../assets/share.png";
import modifyIcon from "../../assets/pen.png";
import deleteIcon from "../../assets/deleteIcon.png";
import Modal, { ModalMaker } from "../Modal/Modal";
const DEFAULT_FOLDER = {
  id: 0,
  name: "전체",
};

function FolderList({ folders, setFolderLink, selectedFolderId }) {
  const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const onClick = (folder) => (e) => {
    if (!folder) {
      setFolderLink(undefined);
      setSelectedFolder(DEFAULT_FOLDER);
    } else {
      setFolderLink(folder.id);
      setSelectedFolder(folder);
    }
  };

  const handleModal = () => (e) => {
    let feature = e.target.textContent;
    let folderName = selectedFolder?.name;
    setModal(ModalMaker({ feature, folderName, setIsModalOpen }));
    setIsModalOpen(true);
  };

  return (
    <>
      <S.ButtonContainer>
        <S.FolderButtons>
          <S.Button
            onClick={onClick(undefined)}
            data-onselect={selectedFolderId === undefined}
          >
            {DEFAULT_FOLDER.name}
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
        <S.AddFolderButton onClick={(e) => handleModal()(e)}>
          폴더 추가 +
        </S.AddFolderButton>
      </S.ButtonContainer>

      <S.FolderInfoContainer>
        <S.FolderName>{selectedFolder?.name} </S.FolderName>
        {selectedFolder?.name !== "전체" && (
          <S.Icons>
            <Icon
              img={shareIcon}
              feature={"공유"}
              onClick={(e) => handleModal()(e)}
            />
            <Icon
              img={modifyIcon}
              feature={"이름 변경"}
              onClick={(e) => handleModal()(e)}
            />
            <Icon
              img={deleteIcon}
              feature={"삭제"}
              onClick={(e) => handleModal()(e)}
            />
          </S.Icons>
        )}
      </S.FolderInfoContainer>
      {isModalOpen && modal}
    </>
  );
}

function Icon({ img, feature, onClick }) {
  return (
    <S.StyledIcon onClick={onClick}>
      <img src={img}></img>
      <div>{feature}</div>
    </S.StyledIcon>
  );
}
export default FolderList;
