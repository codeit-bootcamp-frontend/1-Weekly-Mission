import BlueShortModal from "../BlueShortModal";

function FolderNameChangeModal({ onShow }) {
  const handleCloseButton = () => {
    onShow(false, "");
  };
  return (
    <>
      <BlueShortModal
        title="폴더 이름 변경"
        btnName="변경하기"
        onClose={handleCloseButton}
      />
    </>
  );
}

export default FolderNameChangeModal;
