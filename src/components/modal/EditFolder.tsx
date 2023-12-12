import * as S from "./modalStyles/EditFolderStyles";

import ModalTitle from "./ModalTitle";
import ModalButton from "@/components/button/ModalButton";

interface EditFolderProps {
  currentFolderName: string;
}

export default function EditFolder({ currentFolderName }: EditFolderProps) {
  return (
    <>
      <ModalTitle label="폴더 이름 변경" />
      <S.Contents>
        <S.Input placeholder="내용 입력" defaultValue={currentFolderName} />
        <ModalButton action="change" label="변경하기" />
      </S.Contents>
    </>
  );
}
