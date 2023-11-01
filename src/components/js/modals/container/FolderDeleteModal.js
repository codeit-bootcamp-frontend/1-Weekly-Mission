import RedShortModal from "../RedShortModal";

function FolderDeleteModal({ onShow }) {
  const handleCloseButton = () => {
    onShow(false, "");
  };
  return (
    <>
      <RedShortModal
        title="폴더 삭제"
        btnName="삭제하기"
        content="폴더명"
        onClose={handleCloseButton}
      />
    </>
  );
}

export default FolderDeleteModal;
