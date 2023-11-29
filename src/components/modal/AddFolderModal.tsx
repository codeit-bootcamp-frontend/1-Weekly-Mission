import BlueBtnModal from "./BlueBtnModal";

interface AddFolderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AddFolderModal = ({ isOpen, onRequestClose }: AddFolderModalProps) => {
  return <BlueBtnModal isOpen={isOpen} onRequestClose={onRequestClose} title="폴더 추가" placeholder="내용 입력" btnType="추가하기" />;
};

export default AddFolderModal;
