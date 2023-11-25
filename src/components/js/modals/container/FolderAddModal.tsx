import BlueShortModal from "../BlueShortModal";

function FolderAddModal({ onShow, currentFolder }) {
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
