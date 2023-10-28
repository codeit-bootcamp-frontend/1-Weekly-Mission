import "./FolderButtons.style.css";
import shareIcon from "../../assets/share-icon.svg";
import renameIcon from "../../assets/rename-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

function FolderButtons() {
  return (
    <div className="folder-button-container">
      <button className="folder-modifier-button">
        <img src={shareIcon} alt="share button" />
        공유
      </button>
      <button className="folder-modifier-button">
        <img src={renameIcon} alt="share button" />
        이름 변경
      </button>
      <button className="folder-modifier-button">
        <img src={deleteIcon} alt="share button" />
        삭제
      </button>
    </div>
  );
}

export default FolderButtons;
