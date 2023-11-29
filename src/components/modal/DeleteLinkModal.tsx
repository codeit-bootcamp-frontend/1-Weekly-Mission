import RedBtnModal from "./RedBtnModal";

interface DeleteLinkModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  name: string;
}

const DeleteLinkModal = ({ isOpen, onRequestClose, name }: DeleteLinkModalProps) => {
  return <RedBtnModal isOpen={isOpen} onRequestClose={onRequestClose} title="링크 삭제" name={name} />;
};

export default DeleteLinkModal;
