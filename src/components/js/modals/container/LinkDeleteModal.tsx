import RedShortModal from "../RedShortModal";

function LinkDeleteModal({ onShow, link }: any) {
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
