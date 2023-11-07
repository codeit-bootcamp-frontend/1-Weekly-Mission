import BlueBtnModal from "./BlueBtnModal";

const ChangeNameModal = ({ isOpen, onRequestClose }) => {
  return (
    <BlueBtnModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="폴더 이름 변경"
      placeholder="변경할 이름"
      btnType="변경하기"
    />
  );
};

export default ChangeNameModal;
