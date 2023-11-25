import RedShortModal from "../RedShortModal";

function FolderDeleteModal({ onShow, currentFolder }: any) {
  const handleCloseButton = () => {
    onShow(false, "");
  };
  return (
    <>
      <RedShortModal
        title="폴더 삭제"
        btnName="삭제하기"
        content={currentFolder}
        onClose={handleCloseButton}
      />
    </>
  );
}

export default FolderDeleteModal;
