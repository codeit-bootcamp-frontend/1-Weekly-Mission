import { useState } from "react";
import "../components/Folders.css";
import addImg from "../img/add.svg";

const ALL = {
  name: "전체",
};

const Folder = ({ folderInfo, $select, onClick }) => {
  return (
    <button $select={$select} onClick={onClick} id={folderInfo.id}>
      {folderInfo.name}
    </button>
  );
};

const Folders = ({ userFolder, onCurrentFolder }) => {
  const [currentButton, setCurrentButton] = useState("");
  const handleFolder = (e) => {
    const id = e.target.id;
    const name = e.target.innerHTML;
    if (id === currentButton) {
      setCurrentButton("");
      onCurrentFolder({ name: "전체", id: "" });
    } else {
      setCurrentButton(id);
      onCurrentFolder({ name, id });
    }
  };

  return (
    <div className="folders">
      <div className="folder-box">
        <Folder
          folderInfo={ALL}
          key="전체"
          $select={`${currentButton === ""}`}
          onClick={handleFolder}
          id=""
        />
        {userFolder.map((folder) => (
          <Folder
            folderInfo={folder}
            key={folder.id}
            onClick={handleFolder}
            $select={`${currentButton === String(folder.id)}`}
          />
        ))}
      </div>
      <div className="add-folder">
        <div>폴더추가</div>
        <img src={addImg} alt="폴더추가" />
      </div>
    </div>
  );
};

export default Folders;
