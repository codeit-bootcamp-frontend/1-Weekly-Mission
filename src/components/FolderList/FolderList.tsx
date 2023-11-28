import React, { useState } from "react";
import { S } from "./FolderListStyle"; // Import the styles as S

import shareIcon from "../../assets/share.png";
import modifyIcon from "../../assets/pen.png";
import deleteIcon from "../../assets/deleteIcon.png";
import { ModalMaker } from "../Modal/Modal";
import { Folder } from "../../api";
const DEFAULT_FOLDER = {
  id: 0,
  name: "전체",
};

interface FolderListProps {
  folders: Folder[];
  setFolderLink: (folder_id: number | undefined) => void;
  selectedFolderId: number | undefined;
}

function FolderList({
  folders,
  setFolderLink,
  selectedFolderId,
}: FolderListProps) {
  const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(null);

  const onClick = (folder: Folder | undefined) => () => {
    if (!folder) {
      setFolderLink(undefined);
      setSelectedFolder(DEFAULT_FOLDER);
    } else {
      setFolderLink(folder.id);
      setSelectedFolder(folder);
    }
  };

  const handleModal = ({ feature }: { feature: string }) => {
    const folderName = selectedFolder?.name;
    setModal(ModalMaker({ feature, folderName, setIsModalOpen }));
    setIsModalOpen(true);
  };

  return (
    <>
      <S.ButtonContainer>
        <S.FolderButtons>
          <S.Button
            onClick={onClick(undefined)}
            $onSelected={selectedFolderId === undefined}
          >
            {DEFAULT_FOLDER.name}
          </S.Button>
          {folders.length !== 0 &&
            folders.map((folder) => (
              <S.Button
                onClick={onClick(folder)}
                key={folder.id}
                $onSelected={selectedFolderId === folder.id}
              >
                {folder.name}
              </S.Button>
            ))}
        </S.FolderButtons>
        <S.AddFolderButton
          onClick={() => handleModal({ feature: "폴더 추가 +" })}
        >
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
              onClick={() => handleModal({ feature: "공유" })}
            />
            <Icon
              img={modifyIcon}
              feature={"이름 변경"}
              onClick={() => handleModal({ feature: "이름 변경" })}
            />
            <Icon
              img={deleteIcon}
              feature={"삭제"}
              onClick={() => handleModal({ feature: "삭제" })}
            />
          </S.Icons>
        )}
      </S.FolderInfoContainer>
      {isModalOpen && modal}
    </>
  );
}
interface IconProps {
  img: string;
  feature: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Icon({ img, feature, onClick }: IconProps) {
  return (
    <S.StyledIcon onClick={onClick}>
      <img src={img}></img>
      <div>{feature}</div>
    </S.StyledIcon>
  );
}
export default FolderList;
