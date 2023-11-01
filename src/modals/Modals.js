import FolderInputModal from "./FolderInputModal";
import modalCloseImg from "../assets/images/_close.png";
import "./ModalStyle.css";

//modalID = FolderAddBtn 컴포넌트 누르면 1 , categoryItem에 이름변경 누르면 2
function Modals({ modalOn, modalId }) {
  return (
    <FolderInputModal
      modalCloseImg={modalCloseImg}
      modalId={modalId}
      modalOn={modalOn}
    />
  );
}

export default Modals;
