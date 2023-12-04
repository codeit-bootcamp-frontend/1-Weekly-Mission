import * as S from "@/components/folderTabBar/FolderTabBar.style";
import InputField from "@/components/inputField/InputField";
import Modal from "@/components/modal/Modal";
import { ALL_LINKS_ID, MODALS_ID } from "@/constants/constants";
import { FolderTabBarProps } from "@/types/type";
import { useState } from "react";

const FolderTabBar = ({ folders, selectedFolderId }: FolderTabBarProps) => {
  const [modalComponent, setModalComponent] = useState("");
  const handleFolderAdd = () => {
    setModalComponent(MODALS_ID.addFolder);
  };

  return (
    <>
      <S.TabBarWrap>
        <S.TabLinkWrap>
          <li>
            <S.FolderTabLink
              href={`/folder/${ALL_LINKS_ID}`}
              className={selectedFolderId === ALL_LINKS_ID ? "active" : ""}
            >
              전체
            </S.FolderTabLink>
          </li>
          {folders.map((folder, i) => (
            <li key={folder.id + i}>
              <S.FolderTabLink
                href={`/folder/${folder.id}`}
                className={folder.id === +selectedFolderId ? "active" : ""}
              >
                {folder.name}
              </S.FolderTabLink>
            </li>
          ))}
        </S.TabLinkWrap>
        <S.FolderAddButton onClick={handleFolderAdd}>
          폴더추가
          <S.AddIcon />
        </S.FolderAddButton>
      </S.TabBarWrap>
      {modalComponent === MODALS_ID.addFolder && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더 추가</Modal.Title>
          <InputField modalTarget="" />
          <Modal.BlueButton>추가하기</Modal.BlueButton>
        </Modal>
      )}
    </>
  );
};

export default FolderTabBar;
