import RedBtnModal from "./RedBtnModal";

interface DeleteFolderModalPropps {
  isOpen: boolean;
  onRequestClose: () => void;
  name?: string;
}

const DeleteFolderModal = ({ isOpen, onRequestClose, name }: DeleteFolderModalPropps) => {
  return <RedBtnModal isOpen={isOpen} onRequestClose={onRequestClose} title="폴더 삭제" name={name} />;
};

export default DeleteFolderModal;
