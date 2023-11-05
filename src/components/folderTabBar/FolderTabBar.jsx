import React from "react";
import * as S from "./FolderTabBar.style";
import InputModal from "../modal/InputModal";

const FolderTabBar = ({ folders, setModalComponent }) => {
  const handleFolderAdd = () => {
    setModalComponent(<InputModal modalTitle="폴더 추가" buttonText="추가하기" />);
  };
  return (
    <S.TabBarWrap>
      <S.TabLinkWrap>
        <li>
          <S.FolderTabLink end to="/folder">
            전체
          </S.FolderTabLink>
        </li>
        {folders.map((folder) => (
          <li key={folder.id}>
            <S.FolderTabLink to={`/folder/${folder.id}`}>{folder.name}</S.FolderTabLink>
          </li>
        ))}
      </S.TabLinkWrap>
      <S.FolderAddButton onClick={handleFolderAdd}>
        폴더추가
        <S.AddIcon />
      </S.FolderAddButton>
    </S.TabBarWrap>
  );
};

export default FolderTabBar;
