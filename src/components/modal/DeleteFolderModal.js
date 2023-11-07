import RedBtnModal from "./RedBtnModal";

const DeleteFolderModal = ({ isOpen, onRequestClose, name }) => {
  return (
    <RedBtnModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="폴더 삭제"
      name={name}
    />
  );
};

export default DeleteFolderModal;
