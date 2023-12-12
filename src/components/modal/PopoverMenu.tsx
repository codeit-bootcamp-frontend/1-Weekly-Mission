import { MouseEvent } from "react";
import * as S from "./modalStyles/PopoverStyles";

interface PopoverMenuProps {
  onClickModal: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function PopoverMenu({ onClickModal }: PopoverMenuProps) {
  return (
    <S.Container onClick={onClickModal}>
      <S.DeleteOption id="deleteLink">삭제하기</S.DeleteOption>
      <S.AddOption id="addLink">폴더에 추가</S.AddOption>
    </S.Container>
  );
}
