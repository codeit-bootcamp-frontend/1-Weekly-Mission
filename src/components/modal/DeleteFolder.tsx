import * as S from "./modalStyles/DeleteFolderStyles";

import ModalTitle from "./ModalTitle";
import ModalButton from "@/components/button/ModalButton";

interface DeleteFolderProps {
  currentFolderName: string;
  label: string;
}

export default function DeleteFolder({ currentFolderName, label }: DeleteFolderProps) {
  return (
    <S.Contents>
      <S.Description>
        <ModalTitle label={`${label} 삭제`} />
        <S.Info>{currentFolderName}</S.Info>
      </S.Description>
      <ModalButton action="delete" label="삭제하기" />
    </S.Contents>
  );
}
