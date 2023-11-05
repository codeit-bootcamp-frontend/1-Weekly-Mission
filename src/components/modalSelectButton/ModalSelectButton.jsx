import React, { useState } from "react";
import * as S from "./ModalSelectButton.style";
import checkIcon from "../../images/check.png";

const ModalSelectButton = ({ folderName, linkCount }) => {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <S.FolderSelectButton $isSelect={isSelect} onClick={() => setIsSelect((prev) => !prev)}>
      <S.FolderName>{folderName}</S.FolderName>
      <S.LinkInfo>{linkCount}개 링크</S.LinkInfo>
      <img src={checkIcon} alt={`${folderName}폴더 선택됨`} />
    </S.FolderSelectButton>
  );
};

export default ModalSelectButton;
