import "./Modal.css";
import RenameModal from "../components/modals/RenameModal";
import AddFolderModal from "../components/modals/AddFolderModal";
import DeleteModal from "../components/modals/DeleteModal";
import ShareFolderModal from "../components/modals/ShareFolderModal";
import DeleteLinkModal from "../components/modals/DeleteLinkModal";
import AddLinkModal from "../components/modals/AddLinkModal";
import closeImg from "../img/_close.svg";

const Modals = {
  "폴더 이름 변경": RenameModal,
  "폴더 추가": AddFolderModal,
  "폴더 삭제": DeleteModal,
  "폴더 공유": ShareFolderModal,
  "링크 삭제": DeleteLinkModal,
  "폴더에 추가": AddLinkModal,
};

const Modal = ({
  isOpen,
  onModalClose,
  currentModal,
  currentFolder,
  userFolder,
  path,
}) => {
  if (!isOpen) {
    return <></>;
  } else {
    const ModalType = Modals[currentModal.name];
    return (
      <div className="modal-background">
        <container>
          <div className="close" src={closeImg} onClick={onModalClose}></div>
          <p className="title">{currentModal.name}</p>
          <ModalType
            currentFolder={currentFolder}
            link={currentModal.link}
            userFolder={userFolder}
            path={path}
          />
        </container>
      </div>
    );
  }
};

export default Modal;
