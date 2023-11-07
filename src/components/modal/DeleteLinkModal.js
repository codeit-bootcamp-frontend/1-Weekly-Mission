import RedBtnModal from "./RedBtnModal";

const DeleteLinkModal = ({ isOpen, onRequestClose, name }) => {
  return (
    <RedBtnModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="링크 삭제"
      name={name}
    />
  );
};

export default DeleteLinkModal;
