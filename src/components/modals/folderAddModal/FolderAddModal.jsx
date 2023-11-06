import * as S from "./folderAddModal.style.js";
import ModalBase from "components/modals/modalBase/ModalBase.jsx";

export default function FolderAddModal({ onClickClose }) {
  return (
    <ModalBase title="폴더 추가" onClickClose={onClickClose}>
      <S.AddButton>추가하기</S.AddButton>
    </ModalBase>
  );
}
