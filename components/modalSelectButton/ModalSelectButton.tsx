import * as S from "@/components/modalSelectButton/ModalSelectButton.style";
import checkIcon from "@/images/check.png";
import Image from "next/image";
import { useState } from "react";

interface ModalSelectButtonProps {
  folderName: string;
  linkCount: number;
  onClick: () => void;
}

const ModalSelectButton = ({ folderName, linkCount, onClick }: ModalSelectButtonProps) => {
  const [isSelect, setIsSelect] = useState(false);
  const handleClick = () => {
    onClick();
    setIsSelect((prev) => !prev);
  };
  return (
    <S.FolderSelectButton $isSelect={isSelect} onClick={handleClick}>
      <S.FolderName>{folderName}</S.FolderName>
      <S.LinkInfo>{linkCount}개 링크</S.LinkInfo>
      <Image src={checkIcon} alt={`${folderName}폴더 선택됨`} />
    </S.FolderSelectButton>
  );
};

export default ModalSelectButton;
