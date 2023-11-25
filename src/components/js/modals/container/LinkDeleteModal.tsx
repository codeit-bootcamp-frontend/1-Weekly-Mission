import RedShortModal from "../RedShortModal";
import { modalType } from "../../../../types/modalType";

function LinkDeleteModal({ onShow, link }: modalType) {
  const handleCloseButton = () => {
    onShow(false, "");
  };

  return (
    <>
      <RedShortModal
        title="링크 삭제"
        btnName="삭제하기 "
        content={link}
        onClose={handleCloseButton}
      />
    </>
  );
}

export default LinkDeleteModal;
