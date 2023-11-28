import { useState } from "react";
import * as S from "./FolderMenu.style";
import addIcon from "assets/images/addIcon.svg";
import shareIcon from "assets/images/shareIcon.svg";
import penIcon from "assets/images/penIcon.svg";
import deleteIcon from "assets/images/deleteIcon.svg";


function FolderMenu({ data, onClick }) {
  const [folderName, setFolderName] = useState("전체");

  const clickAllFolderName= () => {
    setFolderName("전체");
  }
  const handleFolderName = (e) => {
    setFolderName(e.target.innerText);
  }

  return (
    <S.FolderContainer>
      <S.FolderWrapper>
        <S.FolderList>
          <S.Folder onClick={clickAllFolderName}>전체</S.Folder>
          {data.map((folder) => 
            <S.Folder key={folder.id} onClick={handleFolderName}>{folder.name}</S.Folder>
          )}
        </S.FolderList>
        <S.AddFolderButton>폴더 추가 <S.AddFolderIcon src={addIcon} alt="폴더 추가하기"/></S.AddFolderButton>
      </S.FolderWrapper>
      <S.FolderHeader>
        <S.FolderName>{folderName}</S.FolderName>
        <S.FolderOptionList>
          <S.FolderOption><S.FolderOptionIcon src={shareIcon} alt="공유하기 아이콘" />공유</S.FolderOption>
          <S.FolderOption><S.FolderOptionIcon src={penIcon} alt="이름 변경 아이콘" />이름 변경</S.FolderOption>
          <S.FolderOption><S.FolderOptionIcon src={deleteIcon} alt="삭제 아이콘" />삭제</S.FolderOption>
        </S.FolderOptionList>
      </S.FolderHeader>
    </S.FolderContainer>
  );
}

export default FolderMenu;