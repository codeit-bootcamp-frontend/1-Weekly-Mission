import BlueShortModal from "../BlueShortModal";
import type { modalType } from "../../../../types/modalType";

function FolderAddModal({ onShow }: modalType) {
  const handleCloseButton = () => {
    onShow(false, "");
  };
  return (
    <>
      <BlueShortModal
        title="폴더 추가"
        btnName="추가하기"
        onClose={handleCloseButton}
      />
    </>
  );
}

export default FolderAddModal;
