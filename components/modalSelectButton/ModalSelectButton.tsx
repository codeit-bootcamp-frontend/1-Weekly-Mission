import React, { useState } from "react";
import * as S from "@/components/modalSelectButton/ModalSelectButton.style";
import checkIcon from "@/images/check.png";
import Image from "next/image";
import { ModalSelectButtonProps } from "@/types/type";

const ModalSelectButton = ({ folderName, linkCount }: ModalSelectButtonProps) => {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <S.FolderSelectButton $isSelect={isSelect} onClick={() => setIsSelect((prev) => !prev)}>
      <S.FolderName>{folderName}</S.FolderName>
      <S.LinkInfo>{linkCount}개 링크</S.LinkInfo>
      <Image src={checkIcon} alt={`${folderName}폴더 선택됨`} />
    </S.FolderSelectButton>
  );
};

export default ModalSelectButton;
