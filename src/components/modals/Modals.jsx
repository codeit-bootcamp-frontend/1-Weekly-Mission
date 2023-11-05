import FolderInputModal from "./FolderInputModal";
import modalCloseImg from "../../assets/images/_close.png";
import "./ModalStyle.css";
import FolderEdit from "./FolderEdit";
import FolderAdd from "./FolderAdd";
import FolderShare from "./FolderShare";
import FolderDelete from "./FolderDelete";

function Modals({ modalOn, selectedFolder, onClick }) {
  return (
    <section className="modal-section">
      {/* <FolderInputModal
        modalCloseImg={modalCloseImg}
        selectedFolder={selectedFolder}
        modalOn={modalOn}
        onClick={onClick}
      /> */}
      <FolderEdit
        modalCloseImg={modalCloseImg}
        selectedFolder={selectedFolder}
        modalOn={modalOn}
        onClick={onClick}
      />
      <FolderAdd
        modalCloseImg={modalCloseImg}
        modalOn={modalOn}
        onClick={onClick}
      />
      <FolderShare
        modalCloseImg={modalCloseImg}
        modalOn={modalOn}
        onClick={onClick}
        selectedFolder={selectedFolder}
      />
      <FolderDelete
        modalCloseImg={modalCloseImg}
        modalOn={modalOn}
        onClick={onClick}
        selectedFolder={selectedFolder}
      />
    </section>
  );
}

export default Modals;
